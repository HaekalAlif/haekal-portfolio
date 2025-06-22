import { supabase } from "@/lib/supabase";
import type { Media } from "@/lib/types/database.types";

export class MediaService {
  // Upload file to Supabase Storage
  static async uploadFile(
    file: File,
    folder: string = "uploads",
    userId?: string
  ): Promise<{ url: string; path: string }> {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
      .from("media")
      .upload(filePath, file);

    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage.from("media").getPublicUrl(filePath);

    return {
      url: publicUrl,
      path: filePath,
    };
  }

  // Save media record to database
  static async saveMediaRecord(
    media: Omit<Media, "id" | "created_at">
  ): Promise<Media> {
    const { data, error } = await supabase
      .from("media")
      .insert(media)
      .select()
      .single();

    if (error) throw error;
    return data as Media;
  }

  // Upload and save media (combined function)
  static async uploadAndSaveMedia(
    file: File,
    options: {
      folder?: string;
      altText?: string;
      caption?: string;
      userId?: string;
    } = {}
  ): Promise<Media> {
    try {
      // Upload file
      const { url, path } = await this.uploadFile(
        file,
        options.folder,
        options.userId
      );

      // Create media record
      const mediaRecord: Omit<Media, "id" | "created_at"> = {
        filename: path.split("/").pop() || file.name,
        original_name: file.name,
        file_path: path,
        file_url: url,
        file_size: file.size,
        mime_type: file.type,
        alt_text: options.altText,
        caption: options.caption,
        uploaded_by: options.userId,
        folder: options.folder || "uploads",
        is_public: true,
      };

      // Handle image dimensions
      if (file.type.startsWith("image/")) {
        const dimensions = await this.getImageDimensions(file);
        mediaRecord.width = dimensions.width;
        mediaRecord.height = dimensions.height;
      }

      return await this.saveMediaRecord(mediaRecord);
    } catch (error) {
      throw error;
    }
  }

  // Get image dimensions
  private static getImageDimensions(
    file: File
  ): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  // Get all media files
  static async getAllMedia(): Promise<Media[]> {
    const { data, error } = await supabase
      .from("media")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Media[];
  }

  // Get media by folder
  static async getMediaByFolder(folder: string): Promise<Media[]> {
    const { data, error } = await supabase
      .from("media")
      .select("*")
      .eq("folder", folder)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Media[];
  }

  // Get media by ID
  static async getMediaById(id: string): Promise<Media> {
    const { data, error } = await supabase
      .from("media")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data as Media;
  }

  // Update media record
  static async updateMedia(
    id: string,
    updates: Partial<Media>
  ): Promise<Media> {
    const { data, error } = await supabase
      .from("media")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Media;
  }

  // Delete media (file and record)
  static async deleteMedia(id: string): Promise<void> {
    // Get media record first
    const media = await this.getMediaById(id);

    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from("media")
      .remove([media.file_path]);

    if (storageError) throw storageError;

    // Delete from database
    const { error: dbError } = await supabase
      .from("media")
      .delete()
      .eq("id", id);

    if (dbError) throw dbError;
  }

  // Get storage usage
  static async getStorageUsage(): Promise<{ used: number; limit: number }> {
    // This would depend on your Supabase plan
    // For now, return basic info
    const { data } = await supabase.from("media").select("file_size");

    const totalUsed =
      data?.reduce((sum, item) => sum + (item.file_size || 0), 0) || 0;

    return {
      used: totalUsed,
      limit: 1000000000, // 1GB default, adjust based on your plan
    };
  }
}
