import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`/users/login`, { email, password }, { withCredentials: true });
    if (response.status !== 200) {
      throw new Error("Failed to login");
    }
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw new Error("Something wrong with Login");
  }
};

export const signupUser = async (email: string, name: string, password: string) => {
  try {
    const response = await axios.post(`/users/signup`, { name, email, password });
    if (response.status !== 201) {
      throw new Error("Failed to signup");
    }
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw new Error("Something wrong with Signup");
  }
};

export const logoutUser = async () => {
  const response = await axios.get("/users/logout");
  if (response.status !== 200) {
    throw new Error("Failed to logout");
  }
  const data = await response.data;
  return data;
};

export const checkAuthStatus = async () => {
  const response = await axios.get("/users/auth-status");
  if (response.status !== 200) {
    throw new Error("Unable to authenticate user");
  }
  const data = await response.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  try {
    const response = await axios.post("/chat/new", { message });
    if (response.status !== 200) {
      throw new Error("Unable to authenticate user");
    }
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Unable to send chat request");
  }
};

export const getUserChats = async () => {
  try {
    const response = await axios.get("/chat/all-chats");
    if (response.status !== 200) {
      throw new Error("Unable to send chat request");
    }
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Unable to send chat request");
  }
};

export const deleteUserChats = async () => {
  try {
    const response = await axios.delete("/chat/delete");
    if (response.status !== 200) {
      throw new Error("Unable to delete user");
    }
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Unable to send chat request");
  }
};
