export type PropertyStatus = "FOR_SALE" | "FOR_RENT";
export type PropertyType = "APARTMENT" | "HOUSE" | "VILLA" | "CONDO";

export interface PropertyFeature {
  icon: string;
  label: string;
  value: string | number;
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  isFeatured: boolean;
  imageUrl: string;
  features: PropertyFeature[];
}
