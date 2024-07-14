import Box from "@mui/material/Box";
import ListCard from "./ListCard/ListCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import Button from "@mui/material/Button";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useEffect, useRef, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getAllCards, createCard, updateCard } from "#/services/cardService";
import MenuAction from "#/components/MenuAction/MenuAction";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ContentEditable from "react-contenteditable";

function Column({
  column,
  showCreatingCard,
  handleShowCreateCard,
  handleUpdateColumn,
  setColumnCreating,
}) {
  //change title column
  const [columnTitle, setColumnTitle] = useState(column?.title);
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
    if (titleCard.trim()) {
      const card = await createCard({
        boardId: column.boardId,
        columnId: column.columnId,
        title: titleCard.trim(),
      });
      setCards([...cards, card]);
      handleShowCreateCard("");
      setTitleCard("");
    } else {
      setTitleCard("");
    }
  };
  //Change title column
  const titleRef = useRef();
  const handleChangeColumnTitle = () => {
    const newTitle = titleRef.current.innerText.trim();
    if (newTitle && newTitle != column?.title) {
      const body = {
        boardId: column.boardId,
        columnId: column.columnId,
        title: newTitle,
      };
      handleUpdateColumn(body);
    } else {
      titleRef.current.innerText = column?.title;
    }
  };
  const handleUpdateCard = async (body) => {
    const data = await updateCard(body);
    if (data) {
      const idx = cards.findIndex((card) => card.cardId === data.cardId);
      cards[idx] = data;
      setCards([...cards]);
    }
  };
  return (
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          minHeight: (theme) => theme.trello.columnHeaderHeight,
          height: "fit-content",
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ContentEditable
          tagName="div"
          innerRef={titleRef}
          disabled={false}
          html={columnTitle}
          onChange={(event) => {
            setColumnTitle(event.target.value);
          }}
          onClick={() => {
            setColumnCreating(false);
            handleShowCreateCard("");
          }}
          onBlur={handleChangeColumnTitle}
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            flex: 1,
            maxWidth: "236px",
          }}
        />
        <MenuAction Icon={ExpandMore} />
      </Box>
      {/* List card */}
      {cards.length > 0 && (
        <ListCard cards={cards} handleUpdateCard={handleUpdateCard} />
      )}
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
            placeholder="Enter the title for this card ..."
            multiline
            value={titleCard}
            onChange={(e) => setTitleCard(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "blue" },
                "&:hover fieldset": { borderColor: "blue" },
              },
              textarea: {
                "&::placeholder": {
                  color: "white",
                },
                color: "white",
                minHeight: "36px",
                margin: 0,
              },
              overflow: "hidden",
              overflowY: "auto",
              maxHeight: "160px",
              color: "white",
            }}
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
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: (theme) => theme.trello.columnFooterHeight,
            py: 2,
            px: 1.5,
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
              variant="contained"
              size="small"
            >
              Add new card
            </Button>
            <DragHandleIcon
              size="small"
              sx={{ cursor: "pointer", color: "white" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Column;
