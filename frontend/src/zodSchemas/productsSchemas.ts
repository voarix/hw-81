import { z } from "zod";

export const productSchema = z.object({
  originalUrl: z
    .string()
    .url()
    .min(5, "url is required. The minimum symbols must be 5"),
});
