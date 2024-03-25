import { Router } from "express";

import { verifyToken } from "../utils/token-manager.js";
import { validate } from "../middlewares/validate.js";
import { chatSchema } from "../schemas/chatSchema.js";
import { generateChatCompletion } from "../controllers/chats/generateChatCompletion.js";
import { sendChatsToUser } from "../controllers/chats/sendChatsToUser.js";

// Protected API
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatSchema), verifyToken, generateChatCompletion);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);

export default chatRoutes;
