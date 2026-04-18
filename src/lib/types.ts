export interface Painting {
  title: string;
  imageUrl: string;
  description: string;
  price?: number;
  slug?: string;
}

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
}