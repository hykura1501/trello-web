import { Box, Container } from "@mui/material";
import AppBar from "#/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "#/apis/mock-data";
import { useEffect, useState } from "react";
import { getBoard } from "#/services/boardService";
import { getAllColumns, createColumn } from "#/services/columnServices";
import { getAllCards } from "#/services/cardService";
import { useParams } from "react-router-dom";

function Board({ user }) {
  const params = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const [newBoard, newColumns] = await Promise.all([
        getBoard(params.boardId),
        getAllColumns(params.boardId),
      ]);

      // Fetch cards for each column and update the columns
      const columns = await Promise.all(
        newColumns.map(async (column) => {
          const cards = await getAllCards(column.columnId);
          return {
            ...column,
            cards: cards,
          };
        })
      );

      // Update the new board with the fetched columns
      newBoard.columns = columns;
      setBoard(newBoard);
    };
    fetchData();
  }, [params.boardId]);
  const createNewColumn = async (newColumnData) => {
    const column = await createColumn(newColumnData);
    if (column) {
      const newBoard = { ...board };
      newBoard.columns.push(column);
      console.log(newBoard);
      setBoard(newBoard);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <AppBar user={user} />
        <BoardBar board={board} />
        <BoardContent board={board} createNewColumn={createNewColumn} />
      </Container>
    </Box>
  );
}

export default Board;
