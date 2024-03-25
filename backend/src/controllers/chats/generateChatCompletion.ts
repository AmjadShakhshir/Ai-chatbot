import { Request, Response, NextFunction } from "express";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";

import UserRepo from "../../models/UserModel.js";
import { configOpenAI } from "../../config/openai-config.js";

export const generateChatCompletion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = req.body;
    const user = await UserRepo.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(404).json({ message: "User not registered OR Token malfunctioned" });
    }
    const chats = user.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[];
    chats.push({ role: "user", content: message });
    user.chats.push({ role: "user", content: message });

    const config = configOpenAI();
    const openai = new OpenAIApi(config);
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats,
    });
    user.chats.push(chatResponse.data.choices[0].message);
    await user.save();
    return res.status(200).json({ message: "SUCCESS", chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};
