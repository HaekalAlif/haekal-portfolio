import { supabase } from "@/lib/supabase";
import type {
  Project,
  ProjectWithTechnologies,
  CreateProject,
  UpdateProject,
} from "@/lib/types/database.types";

export class ProjectsService {
  // Get all published projects
  static async getPublishedProjects(): Promise<ProjectWithTechnologies[]> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies (
          technology:technologies (*)
        )
      `
      )
      .eq("is_published", true)
      .order("priority", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as ProjectWithTechnologies[];
  }

  // Get featured projects
  static async getFeaturedProjects(): Promise<ProjectWithTechnologies[]> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies (
          technology:technologies (*)
        )
      `
      )
      .eq("is_published", true)
      .eq("featured", true)
      .order("priority", { ascending: false })
      .limit(6);

    if (error) throw error;
    return data as ProjectWithTechnologies[];
  }

  // Get project by slug
  static async getProjectBySlug(
    slug: string
  ): Promise<ProjectWithTechnologies> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies (
          technology:technologies (*)
        )
      `
      )
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error) throw error;
    return data as ProjectWithTechnologies;
  }

  // Increment view count
  static async incrementViewCount(id: string): Promise<void> {
    // First get current view count
    const { data: currentProject } = await supabase
      .from("projects")
      .select("view_count")
      .eq("id", id)
      .single();

    if (currentProject) {
      const { error } = await supabase
        .from("projects")
        .update({
          view_count: (currentProject.view_count || 0) + 1,
        })
        .eq("id", id);

      if (error) throw error;
    }
  }

  // Filter projects by technology
  static async getProjectsByTechnology(
    technologyName: string
  ): Promise<ProjectWithTechnologies[]> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies!inner (
          technology:technologies!inner (*)
        )
      `
      )
      .eq("is_published", true)
      .eq("project_technologies.technology.name", technologyName)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as ProjectWithTechnologies[];
  }

  // Filter projects by status
  static async getProjectsByStatus(
    status: string
  ): Promise<ProjectWithTechnologies[]> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies (
          technology:technologies (*)
        )
      `
      )
      .eq("is_published", true)
      .eq("status", status)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as ProjectWithTechnologies[];
  }

  // ADMIN FUNCTIONS
  // Get all projects (for admin)
  static async getAllProjects(): Promise<ProjectWithTechnologies[]> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies (
          technology:technologies (*)
        )
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as ProjectWithTechnologies[];
  }

  // Create project
  static async createProject(project: CreateProject): Promise<Project> {
    const { data, error } = await supabase
      .from("projects")
      .insert(project)
      .select()
      .single();

    if (error) throw error;
    return data as Project;
  }

  // Update project
  static async updateProject(
    id: string,
    updates: UpdateProject
  ): Promise<Project> {
    const { data, error } = await supabase
      .from("projects")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Project;
  }

  // Delete project
  static async deleteProject(id: string): Promise<void> {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) throw error;
  }

  // Add technology to project
  static async addTechnologyToProject(
    projectId: string,
    technologyId: string
  ): Promise<void> {
    const { error } = await supabase
      .from("project_technologies")
      .insert({ project_id: projectId, technology_id: technologyId });

    if (error) throw error;
  }

  // Remove technology from project
  static async removeTechnologyFromProject(
    projectId: string,
    technologyId: string
  ): Promise<void> {
    const { error } = await supabase
      .from("project_technologies")
      .delete()
      .eq("project_id", projectId)
      .eq("technology_id", technologyId);

    if (error) throw error;
  }

  // Get project with technologies by ID (for admin)
  static async getProjectById(id: string): Promise<ProjectWithTechnologies> {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        *,
        project_technologies (
          technology:technologies (*)
        )
      `
      )
      .eq("id", id)
      .single();

    if (error) throw error;
    return data as ProjectWithTechnologies;
  }

  // Toggle project featured status
  static async toggleFeatured(id: string): Promise<Project> {
    const { data: currentProject } = await supabase
      .from("projects")
      .select("featured")
      .eq("id", id)
      .single();

    const { data, error } = await supabase
      .from("projects")
      .update({ featured: !currentProject?.featured })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Project;
  }

  // Toggle project published status
  static async togglePublished(id: string): Promise<Project> {
    const { data: currentProject } = await supabase
      .from("projects")
      .select("is_published")
      .eq("id", id)
      .single();

    const { data, error } = await supabase
      .from("projects")
      .update({ is_published: !currentProject?.is_published })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Project;
  }
}
