import Box from "@mui/material/Box";
import ListCard from "./ListCard/ListCard";
import Header from "./Header";
import Footer from "./Footer";
function Column({ column, id }) {
  return (
    <Box
      sx={{
        minWidth: "266px",
        maxWidth: "266px",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#f1f8e9" : "#616161",
        borderRadius: "6px",
        height: "fit-content",
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      {/* Header */}
      <Header title={column?.title} />
      {/* List card */}
      <ListCard cards={column?.cards} />
      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Column;
