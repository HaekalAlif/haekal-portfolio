"use client";

import { useState, useEffect } from "react";
import { SkillsService } from "@/lib/services";
import type { Skill, CreateSkill, UpdateSkill } from "@/lib/types";

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await SkillsService.getAllSkills();
      setSkills(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch skills");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return {
    skills,
    loading,
    error,
    refetch: fetchSkills,
  };
}

export function useFeaturedSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedSkills = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await SkillsService.getFeaturedSkills();
        setSkills(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch featured skills"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedSkills();
  }, []);

  return { skills, loading, error };
}

export function useSkillsByCategory(category: string) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchSkillsByCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await SkillsService.getSkillsByCategory(category);
        setSkills(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch skills by category"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsByCategory();
  }, [category]);

  return { skills, loading, error };
}

// Admin hooks
export function useSkillsAdmin() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await SkillsService.getAllSkills();
      setSkills(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch skills");
    } finally {
      setLoading(false);
    }
  };

  const createSkill = async (skillData: CreateSkill) => {
    try {
      await SkillsService.createSkill(skillData);
      await fetchSkills(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create skill";
      setError(message);
      return { success: false, error: message };
    }
  };

  const updateSkill = async (id: string, updates: UpdateSkill) => {
    try {
      await SkillsService.updateSkill(id, updates);
      await fetchSkills(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to update skill";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      await SkillsService.deleteSkill(id);
      await fetchSkills(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete skill";
      setError(message);
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return {
    skills,
    loading,
    error,
    refetch: fetchSkills,
    createSkill,
    updateSkill,
    deleteSkill,
  };
}
