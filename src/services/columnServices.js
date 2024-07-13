import * as httpRequest from "../utils/httpRequest";

export const getColumn = async (columnId) => {
  try {
    const res = await httpRequest.get(`/column/detail/${columnId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createColumn = async (body) => {
  try {
    const res = await httpRequest.post(`/column/new`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllColumns = async (boardId) => {
  try {
    const res = await httpRequest.get(`/column/${boardId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
