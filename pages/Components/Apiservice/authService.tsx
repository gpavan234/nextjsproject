import apiClient from "./apiClient";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  const response = await apiClient.post("/api/auth/register", data);
  return response.data;
};

export const loginUser = async (data: LoginData) => {
  const response = await apiClient.post("/api/auth/login", data);
  return response.data;
};
