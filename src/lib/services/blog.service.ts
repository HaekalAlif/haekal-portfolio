import { supabase } from "@/lib/supabase";
import type {
  BlogPost,
  BlogPostWithRelations,
  BlogCategory,
  CreateBlogPost,
  UpdateBlogPost,
} from "@/lib/types/database.types";

export class BlogService {
  // Get all published blog posts
  static async getPublishedPosts(): Promise<BlogPostWithRelations[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // Get featured blog posts
  static async getFeaturedPosts(): Promise<BlogPostWithRelations[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("published", true)
      .eq("featured", true)
      .order("published_at", { ascending: false })
      .limit(3);

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // Get blog post by slug
  static async getPostBySlug(slug: string): Promise<BlogPostWithRelations> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error) throw error;
    return data as BlogPostWithRelations;
  }

  // Get posts by category
  static async getPostsByCategory(
    categorySlug: string
  ): Promise<BlogPostWithRelations[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories!inner (*),
        profiles (*)
      `
      )
      .eq("published", true)
      .eq("blog_categories.slug", categorySlug)
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // Get posts by tag
  static async getPostsByTag(tag: string): Promise<BlogPostWithRelations[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("published", true)
      .contains("tags", [tag])
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // Search blog posts
  static async searchPosts(query: string): Promise<BlogPostWithRelations[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("published", true)
      .or(
        `title.ilike.%${query}%, excerpt.ilike.%${query}%, content.ilike.%${query}%`
      )
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // Get all categories
  static async getCategories(): Promise<BlogCategory[]> {
    const { data, error } = await supabase
      .from("blog_categories")
      .select("*")
      .order("name");

    if (error) throw error;
    return data as BlogCategory[];
  }

  // Get category by slug
  static async getCategoryBySlug(slug: string): Promise<BlogCategory> {
    const { data, error } = await supabase
      .from("blog_categories")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return data as BlogCategory;
  }

  // Get all unique tags
  static async getAllTags(): Promise<string[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("tags")
      .eq("published", true)
      .not("tags", "is", null);

    if (error) throw error;

    const allTags = data
      .flatMap((post) => post.tags || [])
      .filter((tag, index, array) => array.indexOf(tag) === index)
      .sort();

    return allTags;
  }

  // Increment view count
  static async incrementViewCount(id: string): Promise<void> {
    // First get current view count
    const { data: currentPost } = await supabase
      .from("blog_posts")
      .select("view_count")
      .eq("id", id)
      .single();

    if (currentPost) {
      const { error } = await supabase
        .from("blog_posts")
        .update({
          view_count: (currentPost.view_count || 0) + 1,
        })
        .eq("id", id);

      if (error) throw error;
    }
  }

  // Get related posts
  static async getRelatedPosts(
    currentPostId: string,
    categoryId?: string,
    tags?: string[]
  ): Promise<BlogPostWithRelations[]> {
    let query = supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("published", true)
      .neq("id", currentPostId);

    // Filter by category if provided
    if (categoryId) {
      query = query.eq("category_id", categoryId);
    }

    // Filter by tags if provided
    if (tags && tags.length > 0) {
      query = query.overlaps("tags", tags);
    }

    const { data, error } = await query
      .order("published_at", { ascending: false })
      .limit(3);

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // ADMIN FUNCTIONS
  // Get all posts (for admin)
  static async getAllPosts(): Promise<BlogPostWithRelations[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data as BlogPostWithRelations[];
  }

  // Create blog post
  static async createPost(post: CreateBlogPost): Promise<BlogPost> {
    const { data, error } = await supabase
      .from("blog_posts")
      .insert(post)
      .select()
      .single();

    if (error) throw error;
    return data as BlogPost;
  }

  // Update blog post
  static async updatePost(
    id: string,
    updates: UpdateBlogPost
  ): Promise<BlogPost> {
    const { data, error } = await supabase
      .from("blog_posts")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as BlogPost;
  }

  // Delete blog post
  static async deletePost(id: string): Promise<void> {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);

    if (error) throw error;
  }

  // Get post by ID (for admin)
  static async getPostById(id: string): Promise<BlogPostWithRelations> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        `
        *,
        blog_categories (*),
        profiles (*)
      `
      )
      .eq("id", id)
      .single();

    if (error) throw error;
    return data as BlogPostWithRelations;
  }

  // Toggle post published status
  static async togglePublished(id: string): Promise<BlogPost> {
    const { data: currentPost } = await supabase
      .from("blog_posts")
      .select("published")
      .eq("id", id)
      .single();

    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        published: !currentPost?.published,
        published_at: !currentPost?.published ? new Date().toISOString() : null,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as BlogPost;
  }

  // Toggle post featured status
  static async toggleFeatured(id: string): Promise<BlogPost> {
    const { data: currentPost } = await supabase
      .from("blog_posts")
      .select("featured")
      .eq("id", id)
      .single();

    const { data, error } = await supabase
      .from("blog_posts")
      .update({ featured: !currentPost?.featured })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as BlogPost;
  }

  // Create category
  static async createCategory(
    category: Omit<BlogCategory, "id" | "created_at">
  ): Promise<BlogCategory> {
    const { data, error } = await supabase
      .from("blog_categories")
      .insert(category)
      .select()
      .single();

    if (error) throw error;
    return data as BlogCategory;
  }

  // Update category
  static async updateCategory(
    id: string,
    updates: Partial<BlogCategory>
  ): Promise<BlogCategory> {
    const { data, error } = await supabase
      .from("blog_categories")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as BlogCategory;
  }

  // Delete category
  static async deleteCategory(id: string): Promise<void> {
    const { error } = await supabase
      .from("blog_categories")
      .delete()
      .eq("id", id);

    if (error) throw error;
  }
}
