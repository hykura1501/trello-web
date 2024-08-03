import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { newAttachment } from "#/services/cardService";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
function AttachmentFile({ open, setOpen, card, handleAddNewAttachment }) {
  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const file = formJson.file;
            const body = new FormData();
            body.append("file", file);
            body.append("boardId", card.boardId);
            body.append("columnId", card.columnId);
            body.append("cardId", card.cardId);
            handleAddNewAttachment(body);
            setOpen(false);
          },
        }}
      >
        <DialogTitle>Attach</DialogTitle>
        <DialogContent sx={{ width: "560px" }}>
          <DialogContentText>
            Attach a file from your computer
          </DialogContentText>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput name="file" type="file" />
          </Button>
          <DialogContentText>Or paste a link</DialogContentText>
          <TextField
            margin="dense"
            id="url"
            name="url"
            label="Url"
            type="url"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AttachmentFile;
