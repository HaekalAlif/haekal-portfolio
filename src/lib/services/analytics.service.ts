import { supabase } from "@/lib/supabase";
import type {
  PageView,
  Project,
  BlogPost,
  Contact,
} from "@/lib/types/database.types";
import type { AnalyticsData } from "@/lib/types/api.types";

export class AnalyticsService {
  // Track page view
  static async trackPageView(data: {
    page_path: string;
    page_title?: string;
    referrer?: string;
    user_agent?: string;
    session_id?: string;
  }): Promise<void> {
    const { error } = await supabase.from("page_views").insert({
      ...data,
      ip_address: await this.getClientIP(),
    });

    if (error) throw error;
  }

  // Get client IP (simplified)
  private static async getClientIP(): Promise<string> {
    try {
      const response = await fetch("/api/get-ip");
      const data = await response.json();
      return data.ip || "unknown";
    } catch {
      return "unknown";
    }
  }

  // Get dashboard analytics
  static async getDashboardAnalytics(): Promise<AnalyticsData> {
    try {
      // Get counts
      const [projectsCount, blogPostsCount, contactsCount, totalViews] =
        await Promise.all([
          this.getProjectsCount(),
          this.getBlogPostsCount(),
          this.getContactsCount(),
          this.getTotalPageViews(),
        ]);

      // Get recent data
      const [recentViews, popularProjects, popularBlogPosts] =
        await Promise.all([
          this.getRecentPageViews(),
          this.getPopularProjects(),
          this.getPopularBlogPosts(),
        ]);

      return {
        totalProjects: projectsCount,
        totalBlogPosts: blogPostsCount,
        totalContacts: contactsCount,
        totalViews,
        recentViews,
        popularProjects,
        popularBlogPosts,
      };
    } catch (error) {
      throw error;
    }
  }

  // Get projects count
  private static async getProjectsCount(): Promise<number> {
    const { count, error } = await supabase
      .from("projects")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return count || 0;
  }

  // Get blog posts count
  private static async getBlogPostsCount(): Promise<number> {
    const { count, error } = await supabase
      .from("blog_posts")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return count || 0;
  }

  // Get contacts count
  private static async getContactsCount(): Promise<number> {
    const { count, error } = await supabase
      .from("contacts")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return count || 0;
  }

  // Get total page views
  private static async getTotalPageViews(): Promise<number> {
    const { count, error } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return count || 0;
  }

  // Get recent page views
  private static async getRecentPageViews(): Promise<PageView[]> {
    const { data, error } = await supabase
      .from("page_views")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;
    return data as PageView[];
  }

  // Get popular projects
  private static async getPopularProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("is_published", true)
      .order("view_count", { ascending: false })
      .limit(5);

    if (error) throw error;
    return data as Project[];
  }

  // Get popular blog posts
  private static async getPopularBlogPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("view_count", { ascending: false })
      .limit(5);

    if (error) throw error;
    return data as BlogPost[];
  }

  // Get page views by date range
  static async getPageViewsByDateRange(
    startDate: string,
    endDate: string
  ): Promise<{ date: string; views: number }[]> {
    const { data, error } = await supabase
      .from("page_views")
      .select("created_at")
      .gte("created_at", startDate)
      .lte("created_at", endDate)
      .order("created_at");

    if (error) throw error;

    // Group by date
    const viewsByDate: { [key: string]: number } = {};
    data.forEach((view) => {
      const date = view.created_at.split("T")[0];
      viewsByDate[date] = (viewsByDate[date] || 0) + 1;
    });

    return Object.entries(viewsByDate).map(([date, views]) => ({
      date,
      views,
    }));
  }

  // Get top referrers
  static async getTopReferrers(): Promise<
    { referrer: string; count: number }[]
  > {
    const { data, error } = await supabase
      .from("page_views")
      .select("referrer")
      .not("referrer", "is", null)
      .not("referrer", "eq", "");

    if (error) throw error;

    // Group by referrer
    const referrerCounts: { [key: string]: number } = {};
    data.forEach((view) => {
      if (view.referrer) {
        referrerCounts[view.referrer] =
          (referrerCounts[view.referrer] || 0) + 1;
      }
    });

    return Object.entries(referrerCounts)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }

  // Get most viewed pages
  static async getMostViewedPages(): Promise<
    { page: string; views: number }[]
  > {
    const { data, error } = await supabase
      .from("page_views")
      .select("page_path");

    if (error) throw error;

    // Group by page
    const pageCounts: { [key: string]: number } = {};
    data.forEach((view) => {
      pageCounts[view.page_path] = (pageCounts[view.page_path] || 0) + 1;
    });

    return Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);
  }
}
