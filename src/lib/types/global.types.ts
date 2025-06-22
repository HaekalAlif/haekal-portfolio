// Navigation types
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  external?: boolean;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";

// Loading states
export type LoadingState = "idle" | "loading" | "success" | "error";

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Modal types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// Toast notification types
export interface ToastData {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message?: string;
  duration?: number;
}

// File upload types
export interface FileWithPreview extends File {
  preview?: string;
}

// Social media types
export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "instagram" | "email";
  url: string;
  username?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

// Newsletter types
export interface NewsletterFormData {
  email: string;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Environment types
export interface EnvConfig {
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  DATABASE_URL: string;
  NEXT_PUBLIC_SITE_URL?: string;
}


