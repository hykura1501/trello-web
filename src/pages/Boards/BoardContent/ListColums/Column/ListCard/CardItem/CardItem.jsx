import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useRef, useState } from "react";
import MenuAction from "#/components/MenuAction/MenuAction";
import ContentEditable from "react-contenteditable";

function CardItem({ card, handleUpdateCard }) {
  const [cardTitle, setCardTitle] = useState(card?.title);
  const cardRef = useRef();
  const handleChangeTitleCard = async () => {
    const newCardTitle = cardRef.current.innerText.trim();
    if (newCardTitle && newCardTitle !== card?.title) {
      const body = {
        boardId: card.boardId,
        columnId: card.columnId,
        cardId: card.cardId,
        title: newCardTitle,
      };
      handleUpdateCard(body);
    } else {
      cardRef.current.innerText = card?.title;
    }
  };
  const showCardActions =
    !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length;
  const [showEditCard, setShowEditCard] = useState(false);
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        background: "#22272b",
      }}
    >
      {card?.cover && (
        <CardMedia sx={{ height: 140 }} image={card.cover} title="Phi Ho" />
      )}
      <CardContent
        sx={{
          p: 1.1,
          "&:last-child": { p: 1.1 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ContentEditable
          tagName="div"
          innerRef={cardRef}
          html={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          onBlur={handleChangeTitleCard}
          style={{
            color: "#9aa4af",
            fontSize: "0.8rem",
          }}
        />
        <IconButton
          sx={{ color: "white", height: "14px", width: "14px" }}
          onClick={() => setShowEditCard(true)}
        >
          <MenuAction Icon={EditIcon} />
        </IconButton>
      </CardContent>
      {showCardActions && (
        <CardActions
          sx={{
            p: "0 4px 8px 4px",
          }}
        >
          {!!card?.memberIds?.length && (
            <Button startIcon={<PeopleIcon />} size="small">
              {card?.memberIds.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button startIcon={<CommentIcon />} size="small">
              {card?.comments.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button startIcon={<AttachmentIcon />} size="small">
              {card?.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}

export default CardItem;
