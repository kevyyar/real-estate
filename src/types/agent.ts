export interface Agent {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  stats?: {
    propertiesSold: number;
    experience: number;
    activeListings: number;
  };
}
