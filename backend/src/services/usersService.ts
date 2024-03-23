import bcrypt from "bcrypt";

import UserRepo from "../models/UserModel.js";
import { createToken } from "../utils/token-manager.js";

const findAll = async () => {
  const users = await UserRepo.find();
  return users;
};

const findByEmail = async (email: string) => {
  const user = await UserRepo.findOne({ email });
  return user;
};

const signUp = async (name: string, email: string, password: string) => {
  const hashedPaswword = bcrypt.hashSync(password, 10);
  const existingUser = await findByEmail(email);

  if (existingUser) {
    return null;
  }
  const user = await UserRepo.create({ name, email, password: hashedPaswword });
  await user.save();
  return user;
};

const logIn = async ({ email, password }) => {
  const user = await UserRepo.findOne({ email });
  if (!user) {
    return {
      error: "User does not exist",
    };
  }
  const passwordMatch = await bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return {
      error: "Incorrect password",
    };
  }

  const token = createToken(user._id.toString(), user.email, "7d");
  return { user, token };
};

export default {
  findAll,
  findByEmail,
  signUp,
  logIn,
};
