import { z } from "zod";
export const chatBodySchema = z.object({
    message: z
        .string({
        required_error: "Message is required",
    })
        .min(1, { message: "Must be at least 1 characters long" })
        .max(1000, {
        message: "Must be at most 1000 characters long",
    }),
});
export const chatSchema = z.object({
    body: chatBodySchema,
});
//# sourceMappingURL=chatSchema.js.map