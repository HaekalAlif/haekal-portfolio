"use client";

import { useState, useEffect } from "react";
import { ProjectsService } from "@/lib/services";
import type {
  Project,
  ProjectWithTechnologies,
  CreateProject,
  UpdateProject,
} from "@/lib/types";

export function useProjects() {
  const [projects, setProjects] = useState<ProjectWithTechnologies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ProjectsService.getPublishedProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
}

export function useFeaturedProjects() {
  const [projects, setProjects] = useState<ProjectWithTechnologies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProjectsService.getFeaturedProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch featured projects"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return { projects, loading, error };
}

export function useProject(slug: string) {
  const [project, setProject] = useState<ProjectWithTechnologies | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ProjectsService.getProjectBySlug(slug);
        setProject(data);

        // Increment view count
        await ProjectsService.incrementViewCount(data.id);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Project not found");
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  return { project, loading, error };
}

// Admin hooks
export function useProjectsAdmin() {
  const [projects, setProjects] = useState<ProjectWithTechnologies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ProjectsService.getAllProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (projectData: CreateProject) => {
    try {
      await ProjectsService.createProject(projectData);
      await fetchProjects(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create project";
      setError(message);
      return { success: false, error: message };
    }
  };

  const updateProject = async (id: string, updates: UpdateProject) => {
    try {
      await ProjectsService.updateProject(id, updates);
      await fetchProjects(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to update project";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await ProjectsService.deleteProject(id);
      await fetchProjects(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete project";
      setError(message);
      return { success: false, error: message };
    }
  };

  const toggleFeatured = async (id: string) => {
    try {
      await ProjectsService.toggleFeatured(id);
      await fetchProjects(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to toggle featured";
      setError(message);
      return { success: false, error: message };
    }
  };

  const togglePublished = async (id: string) => {
    try {
      await ProjectsService.togglePublished(id);
      await fetchProjects(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to toggle published";
      setError(message);
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
    createProject,
    updateProject,
    deleteProject,
    toggleFeatured,
    togglePublished,
  };
}
