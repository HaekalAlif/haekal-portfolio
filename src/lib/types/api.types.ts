import type { Project, BlogPost, PageView } from "./database.types";

// Standard API Response format
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Filter types
export interface ProjectFilters {
  status?: string[];
  technologies?: string[];
  featured?: boolean;
  category?: string;
}

export interface BlogFilters {
  published?: boolean;
  featured?: boolean;
  category?: string;
  tags?: string[];
  author?: string;
}

// Search types
export interface SearchParams {
  query: string;
  type?: "projects" | "blog" | "all";
  filters?: ProjectFilters | BlogFilters;
}

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  type: "project" | "blog";
  slug: string;
  image_url?: string;
  created_at: string;
}

// Upload types
export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  type: string;
}

// Analytics types
export interface AnalyticsData {
  totalProjects: number;
  totalBlogPosts: number;
  totalContacts: number;
  totalViews: number;
  recentViews: PageView[];
  popularProjects: Project[];
  popularBlogPosts: BlogPost[];
}

// Form validation error types
export interface FormError {
  field: string;
  message: string;
}

export interface FormState {
  errors: FormError[];
  isSubmitting: boolean;
  isSuccess: boolean;
}
