
import Box from "@mui/material/Box";
import AddCardIcon from "@mui/icons-material/AddCard";
import Button from "@mui/material/Button";
import DragHandleIcon from "@mui/icons-material/DragHandle";

function Footer() {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.columnFooterHeight,
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button startIcon={<AddCardIcon />}>Add new card</Button>
      <DragHandleIcon sx={{ cursor: "pointer" }} />
    </Box>
  );
}

export default Footer;
