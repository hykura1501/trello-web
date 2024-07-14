import { Box } from "@mui/material";
import ListColumns from "./ListColums/ListColumns";
function BoardContent({ boardId }) {
  return (
    <Box
      sx={{
        width: "100%",
        p: "8px 0",
        height: (theme) => theme.trello.boardContentHeight,
        // backgroundColor: (theme) =>
          // theme.palette.mode === "light" ? "#1e88e5" : "#37474f",

      }}
    >
      {/* List Column */}
      <ListColumns boardId={boardId} />
    </Box>
  );
}

export default BoardContent;
