import { ChatCompletionRequestMessage, OpenAIApi } from "openai";
import UserRepo from "../models/UserModel.js";
import { configureOpenAI } from "../config/openai-config.js";

const generateChat = async (message: string, id: string) => {
  const user = await UserRepo.findById(id);
  if (!user) {
    return null;
  }
  const chats = user.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[];
  chats.push({ role: "user", content: message });
  user.chats.push({ role: "user", content: message });

  const config = configureOpenAI();
  const openai = new OpenAIApi(config);
  const chatResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: chats,
  });
  user.chats.push(chatResponse.data.choices[0].message);
  await user.save();
  return user;
};

const deleteAllChats = async (id: string) => {
  const user = await UserRepo.findOne({ _id: id });
  user.chats.pull({});
  await user.save();
  return user;
};

export default {
  deleteAllChats,
  generateChat,
};
