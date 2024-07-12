import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:8000",
});

export const get = async (url, config = {}) => {
  const response = await httpRequest.get(url, config);
  return response.data;
};
export const post = async (url, body, config = {}) => {
  const response = await httpRequest.post(url, body, config);
  return response.data;
};
