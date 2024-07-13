import * as httpRequest from "../utils/httpRequest";

export const getBoard = async (boardId) => {
  try {
    const res = await httpRequest.get(`/board/detail/${boardId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
