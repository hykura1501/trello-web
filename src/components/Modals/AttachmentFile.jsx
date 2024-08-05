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
import { useEffect, useState } from "react";
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
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            event.preventDefault();
            // const formData = new FormData(event.currentTarget);
            // const formJson = Object.fromEntries(formData.entries());
            // const file = formJson.file;
            const body = new FormData();
            body.append("file", selectedFile);
            body.append("boardId", card.boardId);
            body.append("columnId", card.columnId);
            body.append("cardId", card.cardId);
            handleAddNewAttachment(body);
            setOpen(false);
          },
        }}
      >
        <DialogTitle>Attachment</DialogTitle>
        <DialogContent
          sx={{ width: "560px", display: "flex", flexDirection: "column" }}
        >
          <DialogContentText>
            Attach a file from your computer
          </DialogContentText>
          <>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{ width: "150px", my: 2 }}
            >
              Upload file
              <VisuallyHiddenInput
                name="file"
                type="file"
                onChange={onSelectFile}
              />
            </Button>
          </>
          {selectedFile && (
            <img src={preview} style={{ height: 180, width: 180 }} />
          )}
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
          <Button type="submit">Upload</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AttachmentFile;
