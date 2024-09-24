import * as httpRequest from "../utils/httpRequest";

export const getBoard = async (boardId) => {
  try {
    const res = await httpRequest.get(`/board/detail/${boardId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createBoard = async (body, config) => {
  try {
    const res = await httpRequest.post(`/board/new`, body, config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
