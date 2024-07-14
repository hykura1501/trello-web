import Box from "@mui/material/Box";
import ListCard from "./ListCard/ListCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import Button from "@mui/material/Button";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getAllCards, createCard } from "#/services/cardService";

function Column({ column, showCreatingCard, handleShowCreateCard }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //handle create card
  const [titleCard, setTitleCard] = useState("");
  //get all cards of columnId
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchCardsOfColumn = async () => {
      const data = await getAllCards(column.columnId);
      if (data) {
        setCards(data);
      }
    };
    fetchCardsOfColumn();
  }, [column.columnId]);
  //call api create card
  const handleCreateCard = async () => {
    const card = await createCard({
      boardId: column.boardId,
      columnId: column.columnId,
      title: titleCard,
    });
    setCards([...cards, card]);
    handleShowCreateCard("");
    setTitleCard("");
  };
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
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontSize="16px" variant="h6">
          {column.title}
        </Typography>
        <ExpandMore
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          sx={{
            cursor: "pointer",
          }}
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            setAnchorEl(null);
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive this column</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DeleteForeverIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Remove this column</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {/* List card */}
      <ListCard cards={cards} />
      {column.columnId === showCreatingCard ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "blue" },
              "&:hover fieldset": { borderColor: "blue" },
            },
            gap: 1,
            overflowY: "hidden",
          }}
        >
          <TextField
            autoFocus
            sx={{ width: "100%", overflowY: "hidden !important" }}
            placeholder="Enter the title for this card ..."
            multiline
            rows={2}
            value={titleCard}
            onChange={(e) => setTitleCard(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button size="small" variant="contained" onClick={handleCreateCard}>
              Add card
            </Button>
            <IconButton
              size="small"
              onClick={() => {
                handleShowCreateCard("");
                setTitleCard("");
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: (theme) => theme.trello.columnFooterHeight,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              startIcon={<AddCardIcon />}
              onClick={() => handleShowCreateCard(column.columnId)}
            >
              Add new card
            </Button>
            <DragHandleIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Column;
