import { z } from "zod";

export const merchantSchema = z.object({
  logoImage: z.string().optional(),
  merchantName: z.string().min(1, { message: "Merchant name is required" }),
  merchantDomain: z.string().min(1, { message: "Merchant domain is required" }),
  merchantType: z.string().min(1, { message: "Merchant type is required" }),
  merchantBio: z.string().optional(),
  merchantAddress: z
    .string()
    .min(1, { message: "Merchant address is required" }),
  merchantPhoneNumber: z
    .string()
    .min(1, { message: "Merchant phone number is required" }),
  merchantDescription: z.string().optional(),
  company: z.string().optional(),
  admins: z.array(z.string()).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
