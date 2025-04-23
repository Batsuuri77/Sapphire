import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  taxId: z.string().min(1, { message: "Tax ID is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  mobileNumber: z.string().optional(),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  strAddress: z.string().min(1, { message: "Street address is required" }),
  zipCode: z.string().min(1, { message: "Zip code is required" }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
