import { z, ZodSchema } from 'zod';

export const loginSchema: ZodSchema = z.object({
  login: z.string(),
  password: z.string(),
});
