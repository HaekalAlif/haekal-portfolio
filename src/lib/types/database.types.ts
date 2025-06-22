export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  role: "admin" | "viewer";
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon_url?: string;
  display_order: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Technology {
  id: string;
  name: string;
  icon_url?: string;
  color?: string;
  category?: string;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  image_url?: string;
  gallery_urls?: string[];
  demo_url?: string;
  github_url?: string;
  status: "in-progress" | "completed" | "archived";
  featured: boolean;
  priority: number;
  view_count: number;
  is_published: boolean;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectWithTechnologies extends Project {
  project_technologies: {
    technology: Technology;
  }[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  image_url?: string;
  category_id?: string;
  author_id?: string;
  published: boolean;
  featured: boolean;
  view_count: number;
  reading_time?: number;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPostWithRelations extends BlogPost {
  blog_categories?: BlogCategory;
  profiles?: Profile;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
  status: "unread" | "read" | "replied" | "archived";
  ip_address?: string;
  user_agent?: string;
  replied_at?: string;
  created_at: string;
}

export interface Media {
  id: string;
  filename: string;
  original_name: string;
  file_path: string;
  file_url: string;
  file_size?: number;
  mime_type?: string;
  width?: number;
  height?: number;
  alt_text?: string;
  caption?: string;
  uploaded_by?: string;
  folder: string;
  is_public: boolean;
  created_at: string;
}

export interface PageView {
  id: string;
  page_path: string;
  page_title?: string;
  referrer?: string;
  ip_address?: string;
  user_agent?: string;
  session_id?: string;
  created_at: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value?: string;
  type: "text" | "number" | "boolean" | "json";
  description?: string;
  updated_by?: string;
  updated_at: string;
}

// Form types for creating/updating
export type CreateProject = Omit<
  Project,
  "id" | "created_at" | "updated_at" | "view_count"
>;
export type UpdateProject = Partial<CreateProject>;

export type CreateBlogPost = Omit<
  BlogPost,
  "id" | "created_at" | "updated_at" | "view_count"
>;
export type UpdateBlogPost = Partial<CreateBlogPost>;

export type CreateContact = Omit<
  Contact,
  "id" | "created_at" | "status" | "ip_address" | "user_agent" | "replied_at"
>;

export type CreateSkill = Omit<Skill, "id" | "created_at" | "updated_at">;
export type UpdateSkill = Partial<CreateSkill>;