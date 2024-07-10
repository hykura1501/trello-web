import Box from "@mui/material/Box";
import Column from "./Column/Column";
import { Button } from "@mui/material";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

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
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

function ListColumns({ columns }) {
  const [items, setItems] = useState(columns);

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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <Box
      sx={{
        overflowY: "hidden",
        overflowX: "auto",
        width: "100%",
        height: "100%",
        backgroundColor: "inherit",
        display: "flex",
        gap: 2,
        p: "0 16px",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#b2dfdb",
        },
        "&::-webkit-scrollbar-track": {
          m: "0 16px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#b2ebf2",
        },
      }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            // onDragOver={handleDragOver}
          >
            {items.map((column) => {
              return <Column key={column._id} id={column} column={column} />;
            })}
          </DndContext>
        </SortableContext>
      </DndContext>

      <Box
        sx={{
          bgcolor: "#ffffff3c",
          height: "fit-content",
          borderRadius: "6px",
          minWidth: "200px",
          maxWidth: "200px",
        }}
      >
        <Button
          sx={{
            color: "white",
            ml: 1.5,
            py: 1,
          }}
          startIcon={<PostAddOutlinedIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
