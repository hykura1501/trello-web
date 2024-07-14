import { Box, Container } from "@mui/material";
import AppBar from "#/components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { useEffect, useState } from "react";
import { getBoard } from "#/services/boardService";
import { useParams } from "react-router-dom";

function Board({ user }) {
  const params = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      const data = await getBoard(params.boardId);
      setBoard(data);
    };
    fetchBoard();
  }, [params.boardId]);

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
        <BoardContent boardId={params.boardId} />
      </Container>
    </Box>
  );
}

export default Board;
