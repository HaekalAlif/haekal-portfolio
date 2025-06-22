import { supabase } from "@/lib/supabase";
import type {
  Skill,
  CreateSkill,
  UpdateSkill,
} from "@/lib/types/database.types";

export class SkillsService {
  // Get all skills
  static async getAllSkills(): Promise<Skill[]> {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("display_order")
      .order("name");

    if (error) throw error;
    return data as Skill[];
  }

  // Get featured skills
  static async getFeaturedSkills(): Promise<Skill[]> {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .eq("is_featured", true)
      .order("display_order")
      .order("name");

    if (error) throw error;
    return data as Skill[];
  }

  // Get skills by category
  static async getSkillsByCategory(category: string): Promise<Skill[]> {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .eq("category", category)
      .order("display_order")
      .order("name");

    if (error) throw error;
    return data as Skill[];
  }

  // ADMIN FUNCTIONS
  // Create skill
  static async createSkill(skill: CreateSkill): Promise<Skill> {
    const { data, error } = await supabase
      .from("skills")
      .insert(skill)
      .select()
      .single();

    if (error) throw error;
    return data as Skill;
  }

  // Update skill
  static async updateSkill(id: string, updates: UpdateSkill): Promise<Skill> {
    const { data, error } = await supabase
      .from("skills")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Skill;
  }

  // Delete skill
  static async deleteSkill(id: string): Promise<void> {
    const { error } = await supabase.from("skills").delete().eq("id", id);

    if (error) throw error;
  }
}
