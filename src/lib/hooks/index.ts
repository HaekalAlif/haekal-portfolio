// Project hooks
export {
  useProjects,
  useFeaturedProjects,
  useProject,
  useProjectsAdmin,
} from "./use-projects";

// Blog hooks
export {
  useBlogPosts,
  useFeaturedPosts,
  useBlogPost,
  useBlogCategories,
  useBlogTags,
  useBlogPostsAdmin,
} from "./use-blog";

// Contact hooks
export {
  useContactForm,
  useContactsAdmin,
  useUnreadContacts,
} from "./use-contact";

// Skills hooks
export {
  useSkills,
  useFeaturedSkills,
  useSkillsByCategory,
  useSkillsAdmin,
} from "./use-skills";

// Technologies hooks
export {
  useTechnologies,
  useTechnologiesByCategory,
  useTechnologiesAdmin,
} from "./use-technologies";

// Media hooks
export { useMediaUpload, useMedia, useMediaByFolder } from "./use-media";

// Analytics hooks
export {
  useDashboardAnalytics,
  usePageTracking,
  usePageViews,
  useTopReferrers,
  useMostViewedPages,
} from "./use-analytics";
