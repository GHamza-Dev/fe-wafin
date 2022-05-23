import axios from "axios";
import { api } from "../config/config";

const getClient = async (id, token) => {
  let config = {
    method: "post",
    url: `${api}/client/get`,
    data: JSON.stringify(id),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.data;
};

const editClient = async (client, token) => {
  let config = {
    method: "post",
    url: `${api}/client/edit`,
    data: JSON.stringify(client),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.data;
};

const clientService = {
  getClient,
  editClient,
};

export default clientService;
