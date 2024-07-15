import { Typography } from "@mui/material";
import BoxModal from "./BoxModal";

function EditCard({ openModal, setOpenModal }) {
  return (
    <BoxModal openModal={openModal} setOpenModal={setOpenModal}>
      <Typography variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </BoxModal>
  );
}

export default EditCard;
