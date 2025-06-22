import { supabase } from "@/lib/supabase";
import type { Technology } from "@/lib/types/database.types";

export class TechnologiesService {
  // Get all technologies
  static async getAllTechnologies(): Promise<Technology[]> {
    const { data, error } = await supabase
      .from("technologies")
      .select("*")
      .order("name");

    if (error) throw error;
    return data as Technology[];
  }

  // Get technologies by category
  static async getTechnologiesByCategory(
    category: string
  ): Promise<Technology[]> {
    const { data, error } = await supabase
      .from("technologies")
      .select("*")
      .eq("category", category)
      .order("name");

    if (error) throw error;
    return data as Technology[];
  }

  // Get technology by name
  static async getTechnologyByName(name: string): Promise<Technology> {
    const { data, error } = await supabase
      .from("technologies")
      .select("*")
      .eq("name", name)
      .single();

    if (error) throw error;
    return data as Technology;
  }

  // ADMIN FUNCTIONS
  // Create technology
  static async createTechnology(
    technology: Omit<Technology, "id" | "created_at">
  ): Promise<Technology> {
    const { data, error } = await supabase
      .from("technologies")
      .insert(technology)
      .select()
      .single();

    if (error) throw error;
    return data as Technology;
  }

  // Update technology
  static async updateTechnology(
    id: string,
    updates: Partial<Technology>
  ): Promise<Technology> {
    const { data, error } = await supabase
      .from("technologies")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Technology;
  }

  // Delete technology
  static async deleteTechnology(id: string): Promise<void> {
    const { error } = await supabase.from("technologies").delete().eq("id", id);

    if (error) throw error;
  }
}
