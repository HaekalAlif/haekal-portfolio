// Database types
export * from "./database.types";

// API types
export * from "./api.types";

// Global types
export * from "./global.types";

// Re-export commonly used types from their correct files
export type {
  Project,
  ProjectWithTechnologies,
  BlogPost,
  BlogPostWithRelations,
  Contact,
  Skill,
  Technology,
  SiteSetting,
  CreateProject,
  UpdateProject,
  CreateBlogPost,
  UpdateBlogPost,
} from "./database.types";

export type { ApiResponse, PaginatedResponse } from "./api.types";

export type { SEOData, ContactFormData } from "./global.types";
