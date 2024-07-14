import { Box } from "@mui/material";
import ListColumns from "./ListColums/ListColumns";
import { useEffect, useState } from "react";
import { getAllColumns, createColumn } from "#/services/columnServices";

function BoardContent({ boardId }) {
  //api get all column of boardId
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const fetchColumnsOfBoard = async () => {
      const data = await getAllColumns(boardId);
      setColumns(data);
    };
    fetchColumnsOfBoard();
  }, [boardId]);
  //call api create column
  const createNewColumn = async (newColumnData) => {
    const column = await createColumn(newColumnData);
    setColumns([...columns, column]);
  };
  return (
    <Box
      sx={{
        width: "100%",
        p: "8px 0",
        height: (theme) => theme.trello.boardContentHeight,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#1e88e5" : "#37474f",
      }}
    >
      {/* List Column */}
      <ListColumns columns={columns} createNewColumn={createNewColumn} />
    </Box>
  );
}

export default BoardContent;
