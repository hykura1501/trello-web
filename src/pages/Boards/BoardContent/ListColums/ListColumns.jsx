import Box from "@mui/material/Box";
import Column from "./Column/Column";
import { Button, IconButton, TextField } from "@mui/material";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ListColumns({ columns, createNewColumn }) {
  // column logical
  const params = useParams();
  const [columnCreating, setColumnCreating] = useState(false);
  const [titleColumn, setTitleColumn] = useState("");
  const handleCreateColumn = async () => {
    await createNewColumn({
      boardId: params.boardId,
      title: titleColumn,
    });
    setColumnCreating(false);
    setTitleColumn("");
  };
  //creating card
  const [showCreatingCard, setShowCreatingCard] = useState("");
  const handleShowCreateCard = (columnId) => {
    setColumnCreating(false);
    setShowCreatingCard(columnId);
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
              theme.palette.mode === "light" ? "#f1f8e9" : "#616161",
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
