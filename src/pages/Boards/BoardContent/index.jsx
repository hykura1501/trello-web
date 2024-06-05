import Box from "@mui/material/Box";

function BoardContent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#1e88e5" : "#37474f",
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContent;
