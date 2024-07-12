import * as httpRequest from "../utils/httpRequest";

const loginServices = async (body) => {
  try {
    const response = await httpRequest.post("/user/login", body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default loginServices;
