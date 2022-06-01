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

const getProvider = async (id, token) => {
  let config = {
    method: "post",
    url: `${api}/provider/get`,
    data: JSON.stringify(id),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.data;
};

const getAllProviders = async () => {
  let config = {
    method: "post",
    url: `${api}/provider/all`,
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

  return response.data.message;
};

const editProvider = async (provider, token) => {
  let config = {
    method: "post",
    url: `${api}/provider/edit`,
    data: JSON.stringify(provider),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.message;
};

const registerProvider = async (provider, token) => {
  let config = {
    method: "post",
    url: `${api}/provider/register`,
    data: JSON.stringify(provider),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.message;
};

const clientService = {
  getClient,
  editClient,
  editProvider,
  registerProvider,
  getProvider,
  getAllProviders,
};

export default clientService;
