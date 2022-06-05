import axios from "axios";
import { api } from "../config/config";

const addOrder = async (order) => {
  let config = {
    method: "post",
    url: `${api}/order/store`,
    data: JSON.stringify(order),
  };

  const response = await axios(config);

  return response.data;
};

const getProviderOrders = async (id, token) => {
  let config = {
    method: "post",
    url: `${api}/order/all`,
    data: JSON.stringify({ id }),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.data;
};

const getClientOrders = async (id, token) => {
  let config = {
    method: "post",
    url: `${api}/order/client-all`,
    data: JSON.stringify({ id }),
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);

  return response.data.data;
};

const acceptOrder = async (id) => {
  let config = {
    method: "post",
    url: `${api}/order/accept`,
    data: JSON.stringify({ id }),
  };

  const response = await axios(config);

  return response.data;
};

const completeOrder = async (id) => {
  let config = {
    method: "post",
    url: `${api}/order/complete`,
    data: JSON.stringify({ id }),
  };

  const response = await axios(config);

  return response.data;
};

const rejectOrder = async (id) => {
  let config = {
    method: "post",
    url: `${api}/order/reject`,
    data: JSON.stringify({ id }),
  };

  const response = await axios(config);
  return response.data;
};

const orderService = {
  addOrder,
  getProviderOrders,
  acceptOrder,
  rejectOrder,
  completeOrder,
  getClientOrders,
};

export default orderService;
