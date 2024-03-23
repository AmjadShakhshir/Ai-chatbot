import UserRepo from "../models/UserModel.js";

const findAll = async () => {
  const users = await UserRepo.find();
  return users;
};

const findByEmail = async (email: string) => {
  const user = await UserRepo.findOne({ email });
  return user;
};

const signUp = async ({ name, email, password }) => {
  const newUser = new UserRepo({ name, email, password });
  await newUser.save();
  return newUser;
};

export default {
  findAll,
  findByEmail,
  signUp,
};
