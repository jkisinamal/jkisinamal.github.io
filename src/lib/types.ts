export interface Artwork {
  title: string;
  imageUrl: string;
  description: string;
  medium: string; // Add this line
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
  body: any[]; // Or use a more specific type if you have one for PortableText
  mainImageUrl?: string; // Add this line
}