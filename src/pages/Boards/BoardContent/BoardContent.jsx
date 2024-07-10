import { Box } from "@mui/material";
import ListColumns from "./ListColums/ListColumns";
import { mapOrder } from "#/utils/sorts";

function BoardContent({ board }) {
  const orderedColumns = mapOrder(
    board?.columns,
    board?.columnOrderIds,
    "_id"
  );
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
      <ListColumns columns={orderedColumns} />
    </Box>
  );
}

export default BoardContent;
