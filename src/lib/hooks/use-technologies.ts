"use client";

import { useState, useEffect } from "react";
import { TechnologiesService } from "@/lib/services";
import type { Technology } from "@/lib/types";

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTechnologies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await TechnologiesService.getAllTechnologies();
      setTechnologies(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch technologies"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return {
    technologies,
    loading,
    error,
    refetch: fetchTechnologies,
  };
}

export function useTechnologiesByCategory(category: string) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const fetchTechnologiesByCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await TechnologiesService.getTechnologiesByCategory(
          category
        );
        setTechnologies(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch technologies by category"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologiesByCategory();
  }, [category]);

  return { technologies, loading, error };
}

// Admin hooks
export function useTechnologiesAdmin() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTechnologies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await TechnologiesService.getAllTechnologies();
      setTechnologies(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch technologies"
      );
    } finally {
      setLoading(false);
    }
  };

  const createTechnology = async (
    technologyData: Omit<Technology, "id" | "created_at">
  ) => {
    try {
      await TechnologiesService.createTechnology(technologyData);
      await fetchTechnologies(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create technology";
      setError(message);
      return { success: false, error: message };
    }
  };

  const updateTechnology = async (id: string, updates: Partial<Technology>) => {
    try {
      await TechnologiesService.updateTechnology(id, updates);
      await fetchTechnologies(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to update technology";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deleteTechnology = async (id: string) => {
    try {
      await TechnologiesService.deleteTechnology(id);
      await fetchTechnologies(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete technology";
      setError(message);
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return {
    technologies,
    loading,
    error,
    refetch: fetchTechnologies,
    createTechnology,
    updateTechnology,
    deleteTechnology,
  };
}
