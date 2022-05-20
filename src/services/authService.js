import axios from "axios";
import { api } from "../config/config";

const register = async (userData) => {
  let config = {
    method: "post",
    url: `${api}/client`,
    data: JSON.stringify(userData),
  };

  const response = await axios(config);

  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }

  return response.data.data;
};

const login = async (credentials) => {
  const response = await axios({
    method: "post",
    url: `${api}/client/login`,
    data: JSON.stringify(credentials),
  });

  if (response.data.data) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }

  console.log(response.data.data);
  return response.data.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
