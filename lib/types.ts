export interface Category {
  id: number;
  name: string;
  slug: string;
  icon?: string;
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  country: string;
  image: string;
  date: string;
  time: string;
  views: number;
  author: string;
  featured?: boolean;
  video?: boolean;
}

export interface Country {
  id: number;
  name: string;
  slug: string;
  flag: string;
}