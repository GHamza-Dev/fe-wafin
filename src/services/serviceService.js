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

const getAllServices = async () => {
  const response = await axios.post(`${api}/service/all`);
  return response.data.data;
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

const getServiceById = async (id, token) => {
  let config = {
    method: "post",
    url: `${api}/service/one`,
    data: JSON.stringify({ service_id: id }),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);
  return response.data.data;
};

const deleteService = async (id, token) => {
  let config = {
    method: "post",
    url: `${api}/service/delete`,
    data: JSON.stringify({ service_id: id }),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);
  return response.data.message;
};

const searchServices = async (filters) => {
  let config = {
    method: "post",
    url: `${api}/service/search`,
    data: JSON.stringify(filters),
  };

  const response = await axios(config);

  return response.data;
};

const getServiceCategories = async () => {
  const response = await axios.post(`${api}/service/categories`);
  return response.data.data;
};

const serviceService = {
  addService,
  getUsersServices,
  deleteService,
  getServiceById,
  getAllServices,
  getServiceCategories,
  searchServices,
};
export default serviceService;
