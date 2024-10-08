import * as httpRequest from "../utils/httpRequest";

export const getCard = async (cardId) => {
  try {
    const res = await httpRequest.get(`/card/detail/${cardId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCard = async (body) => {
  try {
    const res = await httpRequest.post(`/card/new`, body);
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

export const updateCard = async (body) => {
  try {
    const res = await httpRequest.patch(`/card/update`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const newAttachment = async (body) => {
  try {
    const res = await httpRequest.post(`/card/attachment/new`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllAttachments = async (body) => {
  try {
    const res = await httpRequest.post(`/card/attachment`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteAttachment = async (config) => {
  try {
    const res = await httpRequest._delete(`/card/attachment/delete`, config);
    return res.code;
  } catch (error) {
    console.log(error);
  }
};
