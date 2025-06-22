"use client";

import { useState, useEffect } from "react";
import { AnalyticsService } from "@/lib/services";
import type { AnalyticsData } from "@/lib/types";

export function useDashboardAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await AnalyticsService.getDashboardAnalytics();
      setAnalytics(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch analytics"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return {
    analytics,
    loading,
    error,
    refetch: fetchAnalytics,
  };
}

export function usePageTracking() {
  const trackPageView = async (data: {
    page_path: string;
    page_title?: string;
    referrer?: string;
  }) => {
    try {
      await AnalyticsService.trackPageView({
        ...data,
        user_agent: navigator.userAgent,
        session_id: getSessionId(),
      });
    } catch (err) {
      console.error("Failed to track page view:", err);
    }
  };

  const getSessionId = () => {
    let sessionId = sessionStorage.getItem("session_id");
    if (!sessionId) {
      sessionId =
        Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem("session_id", sessionId);
    }
    return sessionId;
  };

  return { trackPageView };
}

export function usePageViews(startDate?: string, endDate?: string) {
  const [pageViews, setPageViews] = useState<{ date: string; views: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageViews = async () => {
      try {
        setLoading(true);
        setError(null);

        const start =
          startDate ||
          new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
        const end = endDate || new Date().toISOString();

        const data = await AnalyticsService.getPageViewsByDateRange(start, end);
        setPageViews(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch page views"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPageViews();
  }, [startDate, endDate]);

  return { pageViews, loading, error };
}

export function useTopReferrers() {
  const [referrers, setReferrers] = useState<
    { referrer: string; count: number }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopReferrers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await AnalyticsService.getTopReferrers();
        setReferrers(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch top referrers"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTopReferrers();
  }, []);

  return { referrers, loading, error };
}

export function useMostViewedPages() {
  const [pages, setPages] = useState<{ page: string; views: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMostViewedPages = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await AnalyticsService.getMostViewedPages();
        setPages(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch most viewed pages"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMostViewedPages();
  }, []);

  return { pages, loading, error };
}
