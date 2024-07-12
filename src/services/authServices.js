import * as httpRequest from "../utils/httpRequest";

export const login = async (body) => {
  try {
    const response = await httpRequest.post("/user/login", body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (body) => {
  try {
    const response = await httpRequest.post("/user/register", body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default { login, register };
