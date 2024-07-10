import Box from "@mui/material/Box";
import CardItem from "./CardItem/CardItem";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCard({ cards }) {
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  const [items, setItems] = useState(cards);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <Box
      sx={{
        m: "0 4px",
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.columnFooterHeight
          } - ${theme.trello.columnHeaderHeight})`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#b2dfdb",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#b2ebf2",
        },
      }}
    >
      <Box
        sx={{
          p: "0 6px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        > */}
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((card) => (
            <CardItem key={card._id} id={card} card={card} />
          ))}
        </SortableContext>
        {/* </DndContext> */}
      </Box>
    </Box>
  );
}

export default ListCard;
