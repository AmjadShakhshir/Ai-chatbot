import { z } from "zod";

export const userBodySchema = z.object({
  name: z.string().min(3, { message: "Must be at least 3 characters long" }).max(20, {
    message: "Must be at most 20 characters long",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Must be at least 6 characters long",
    })
    .max(20, {
      message: "Must be at most 20 characters long",
    }),
  chats: z.array(z.string()).default([]),
});

export const userSchema = z.object({
  body: userBodySchema,
});
