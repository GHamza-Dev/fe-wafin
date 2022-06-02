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

const orderService = {
  addOrder,
};

export default orderService;
