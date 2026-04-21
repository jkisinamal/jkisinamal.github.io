export interface Artwork {
  title: string;
  imageUrl: string;
  description: string;
  medium: string;
  price?: number;
  slug?: string;
  showInGallery?: boolean;
  isAvailable?: boolean;
}

export interface Post {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt: string;
  body: any[];
  mainImageUrl?: string;
  featuredVideo?: string; // New field
}