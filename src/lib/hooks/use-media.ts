"use client";

import { useState, useEffect } from "react";
import { MediaService } from "@/lib/services";
import type { Media } from "@/lib/types";

export function useMediaUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadFile = async (
    file: File,
    options: {
      folder?: string;
      altText?: string;
      caption?: string;
      userId?: string;
    } = {}
  ) => {
    try {
      setUploading(true);
      setError(null);
      setUploadProgress(0);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90));
      }, 100);

      const media = await MediaService.uploadAndSaveMedia(file, options);

      clearInterval(progressInterval);
      setUploadProgress(100);

      return { success: true, media };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to upload file";
      setError(message);
      return { success: false, error: message };
    } finally {
      setUploading(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  const uploadMultipleFiles = async (
    files: File[],
    options: {
      folder?: string;
      userId?: string;
    } = {}
  ) => {
    const results = [];
    setUploading(true);
    setError(null);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadProgress((i / files.length) * 100);

        const result = await MediaService.uploadAndSaveMedia(file, options);
        results.push(result);
      }

      setUploadProgress(100);
      return { success: true, media: results };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to upload files";
      setError(message);
      return { success: false, error: message };
    } finally {
      setUploading(false);
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  return {
    uploading,
    error,
    uploadProgress,
    uploadFile,
    uploadMultipleFiles,
  };
}

export function useMedia() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await MediaService.getAllMedia();
      setMedia(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch media");
    } finally {
      setLoading(false);
    }
  };

  const deleteMedia = async (id: string) => {
    try {
      await MediaService.deleteMedia(id);
      await fetchMedia();
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete media";
      setError(message);
      return { success: false, error: message };
    }
  };

  const updateMedia = async (id: string, updates: Partial<Media>) => {
    try {
      await MediaService.updateMedia(id, updates);
      await fetchMedia();
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to update media";
      setError(message);
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return {
    media,
    loading,
    error,
    refetch: fetchMedia,
    deleteMedia,
    updateMedia,
  };
}

export function useMediaByFolder(folder: string) {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!folder) return;

    const fetchMediaByFolder = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await MediaService.getMediaByFolder(folder);
        setMedia(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch media by folder"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMediaByFolder();
  }, [folder]);

  return { media, loading, error };
}
