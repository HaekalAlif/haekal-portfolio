"use client";

import { useState, useEffect } from "react";
import { BlogService } from "@/lib/services";
import type {
  BlogPost,
  BlogPostWithRelations,
  BlogCategory,
  CreateBlogPost,
  UpdateBlogPost,
} from "@/lib/types";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPostWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await BlogService.getPublishedPosts();
      setPosts(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch blog posts"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
  };
}

export function useFeaturedPosts() {
  const [posts, setPosts] = useState<BlogPostWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await BlogService.getFeaturedPosts();
        setPosts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch featured posts"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPostWithRelations | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await BlogService.getPostBySlug(slug);
        setPost(data);

        // Increment view count
        await BlogService.incrementViewCount(data.id);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Blog post not found");
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}

export function useBlogCategories() {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await BlogService.getCategories();
        setCategories(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch categories"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

export function useBlogTags() {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await BlogService.getAllTags();
        setTags(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch tags");
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
}

// Admin hooks
export function useBlogPostsAdmin() {
  const [posts, setPosts] = useState<BlogPostWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await BlogService.getAllPosts();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData: CreateBlogPost) => {
    try {
      await BlogService.createPost(postData);
      await fetchPosts(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create post";
      setError(message);
      return { success: false, error: message };
    }
  };

  const updatePost = async (id: string, updates: UpdateBlogPost) => {
    try {
      await BlogService.updatePost(id, updates);
      await fetchPosts(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to update post";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deletePost = async (id: string) => {
    try {
      await BlogService.deletePost(id);
      await fetchPosts(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete post";
      setError(message);
      return { success: false, error: message };
    }
  };

  const togglePublished = async (id: string) => {
    try {
      await BlogService.togglePublished(id);
      await fetchPosts(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to toggle published";
      setError(message);
      return { success: false, error: message };
    }
  };

  const toggleFeatured = async (id: string) => {
    try {
      await BlogService.toggleFeatured(id);
      await fetchPosts(); // Refresh list
      return { success: true };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to toggle featured";
      setError(message);
      return { success: false, error: message };
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
    createPost,
    updatePost,
    deletePost,
    togglePublished,
    toggleFeatured,
  };
}
