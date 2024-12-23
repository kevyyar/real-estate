import { z } from "zod";

export const inquiryTypeOptions = [
  "General Inquiry",
  "Property Viewing",
  "Price Quote",
  "Investment Opportunity",
] as const;

export const userTypeOptions = [
  "Buyer",
  "Seller",
  "Agent",
  "Investor",
] as const;

export const propertyTypeOptions = [
  "APARTMENT",
  "HOUSE",
  "VILLA",
  "CONDO",
] as const;

export const inquiryFormSchema = z.object({
  inquiryType: z.enum(inquiryTypeOptions),
  userType: z.enum(userTypeOptions),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
  propertyType: z.enum(propertyTypeOptions),
  maxPrice: z.number().min(0, "Price must be positive").or(z.string()),
  minSize: z.number().min(0, "Size must be positive").or(z.string()),
  beds: z.number().min(0, "Number of beds must be positive").or(z.string()),
  baths: z.number().min(0, "Number of baths must be positive").or(z.string()),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;
