import Box from "@mui/material/Box";
import CardItem from "./CardItem/CardItem";
function ListCard({ columnTitle, cards, handleUpdateCard }) {
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
        {cards?.map((card) => {
          card.columnTitle = columnTitle;
          return (
            <CardItem
              key={card.cardId}
              card={card}
              handleUpdateCard={handleUpdateCard}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ListCard;
