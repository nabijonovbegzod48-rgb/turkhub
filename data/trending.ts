import { news } from "@/data/news";

export const trendingNews = [...news]
  .sort((a, b) => b.views - a.views)
  .slice(0, 5);