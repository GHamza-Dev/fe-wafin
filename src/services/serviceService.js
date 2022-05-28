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

const serviceService = { addService };
export default serviceService;
