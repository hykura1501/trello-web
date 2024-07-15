import { Box, Modal } from "@mui/material";
const style = {
  position: "relative",
  top: 120,
  left: "50%",
  transform: "translate(-50%, -60px)",
  width: 768,
  bgcolor: "#323940",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
  minHeight: 1000,
  overflowY: "auto",
};
function BoxModal({ openModal, setOpenModal, children }) {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Modal
      sx={{
        overflow: "auto",
      }}
      keepMounted
      open={openModal}
      onClose={handleClose}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

export default BoxModal;
