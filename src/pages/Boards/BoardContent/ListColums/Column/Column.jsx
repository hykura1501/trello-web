import Box from "@mui/material/Box";
import ListCard from "./ListCard/ListCard";
import Header from "./Header";
import Footer from "./Footer";
import { mapOrder } from "#/utils/sorts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
function Column({ column, id }) {
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
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
        <ListCard cards={orderedCards} />
        {/* Footer */}
        <Footer />
      </Box>
    </div>
  );
}

export default Column;
