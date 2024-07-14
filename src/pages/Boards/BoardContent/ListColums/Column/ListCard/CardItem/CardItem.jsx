import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
import AttachmentIcon from "@mui/icons-material/Attachment";
function CardItem({ card }) {
  const showCardActions =
    !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length;
  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      {card?.cover && (
        <CardMedia sx={{ height: 140 }} image={card.cover} title="Phi Ho" />
      )}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
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
