import UserRepo from "../models/UserModel.js";

const findAll = async () => {
  const users = await UserRepo.find();
  return users;
};

const signUp = async (user) => {
  const newUser = new UserRepo(user);
  await newUser.save();
  return newUser;
};

export default {
  findAll,
  signUp,
};
