import * as httpRequest from "../utils/httpRequest";

export const getCard = async (cardId) => {
  try {
    const res = await httpRequest.get(`/card/detail/${cardId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCards = async (columnId) => {
  try {
    const res = await httpRequest.get(`/card/${columnId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
