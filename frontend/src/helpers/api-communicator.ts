import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`/users/login`, { email, password });
    if (response.status !== 200) {
      throw new Error("Failed to login");
    }
    const data = await response.data;
    return data;
  } catch (error: unknown) {
    throw new Error("Something wrong with Login");
  }
};

export const checkAuthStatus = async () => {
  const response = await axios.get("/users/auth-status");
  if (response.status !== 200) {
    throw new Error("Unable to authenticate user");
  }
  const data = await response.data;
  return data;
};
