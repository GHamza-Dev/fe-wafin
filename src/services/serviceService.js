import axios from "axios";
import { api } from "../config/config";

const addService = async (service, token) => {
  let config = {
    method: "post",
    url: `${api}/service/store`,
    data: JSON.stringify(service),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.message;
};

const getUsersServices = async (provider, token) => {
  let config = {
    method: "post",
    url: `${api}/service/user-services`,
    data: JSON.stringify(provider),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);
  if (response.data.err) return response.data.message;
  else return response.data.data;
};

const serviceService = { addService, getUsersServices };
export default serviceService;
