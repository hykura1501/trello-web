import Box from "@mui/material/Box";
import Column from "./Column/Column";
import { Button, IconButton, TextField } from "@mui/material";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import {
  getAllColumns,
  createColumn,
  updateColumn,
} from "#/services/columnServices";

function ListColumns({ boardId }) {
  // column logical
  const [columnCreating, setColumnCreating] = useState(false);
  const [titleColumn, setTitleColumn] = useState("");
  //api get all column of boardId
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const fetchColumnsOfBoard = async () => {
      const data = await getAllColumns(boardId);
      if (data) {
        setColumns(data);
      }
    };
    fetchColumnsOfBoard();
  }, [boardId]);
  //call api create column
  const handleCreateColumn = async () => {
    if (titleColumn.trim()) {
      const column = await createColumn({
        boardId: boardId,
        title: titleColumn.trim(),
      });
      setColumns([...columns, column]);
      setColumnCreating(false);
      setTitleColumn("");
    } else {
      setTitleColumn("");
    }
  };
  //creating card
  const [showCreatingCard, setShowCreatingCard] = useState("");
  const handleShowCreateCard = (columnId) => {
    setColumnCreating(false);
    setShowCreatingCard(columnId);
  };
  //handleUpdateColumn
  const handleUpdateColumn = async (body) => {
    const data = await updateColumn(body);
    if (data) {
      const idx = columns.findIndex((col) => col.columnId === data.columnId);
      columns[idx] = data;
      setColumns([...columns]);
    }
  };
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
      {columns?.map((column) => {
        return (
          <Column
            key={column.columnId}
            column={column}
            showCreatingCard={showCreatingCard}
            handleShowCreateCard={handleShowCreateCard}
            handleUpdateColumn={handleUpdateColumn}
            setColumnCreating={setColumnCreating}
          />
        );
      })}
      {/* Create column */}
      {columnCreating ? (
        <Box
          sx={{
            minWidth: "266px",
            maxWidth: "266px",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#101204" : "#101204",
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          }}
        >
          <Box
            sx={{
              p: 0.8,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <TextField
              autoFocus
              value={titleColumn}
              onChange={(e) => setTitleColumn(e.target.value)}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "blue" },
                  "&:hover fieldset": { borderColor: "blue" },
                },
                input: {
                  "&::placeholder": {
                    color: "white",
                  },
                  color: "white",
                },
                overflow: "hidden",
                overflowY: "auto",
                minHeight: "36px",
                maxHeight: "160px",
                color: "white",
              }}
              placeholder="Enter list title ..."
              variant="outlined"
              size="small"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button
                size="small"
                variant="contained"
                onClick={handleCreateColumn}
              >
                Add list
              </Button>
              <IconButton
                size="small"
                onClick={() => {
                  setColumnCreating(false);
                  setTitleColumn("");
                }}
                sx={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : (
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
            onClick={() => {
              setColumnCreating(true);
              setShowCreatingCard("");
            }}
          >
            Add new column
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default ListColumns;
