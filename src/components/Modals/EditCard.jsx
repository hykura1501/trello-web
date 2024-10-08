import { Avatar, Box, Button, Typography } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import BoxModal from "./BoxModal";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ContentEditable from "react-contenteditable";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import PhotoIcon from "@mui/icons-material/Photo";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useRef } from "react";
import AttachmentFile from "./AttachmentFile";
import { saveAs } from "file-saver";

import {
  getAllAttachments,
  newAttachment,
  deleteAttachment,
} from "#/services/cardService";
import { useEffect } from "react";
function EditCard({ card, openModal, setOpenModal, handleUpdateCard }) {
  const [showBoxEditCard, setShowBoxEditCard] = useState(false);
  const contentCardRef = useRef();
  const handleUpdateDescription = () => {
    card.description = contentCardRef.current.getContent();
    const body = {
      boardId: card.boardId,
      columnId: card.columnId,
      cardId: card.cardId,
      description: card.description,
    };
    handleUpdateCard(body);
    setShowBoxEditCard(false);
  };

  ///
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  ////

  const [attachments, setAttachments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllAttachments({
        boardId: card.boardId,
        columnId: card.columnId,
        cardId: card.cardId,
      });
      if (data) {
        setAttachments(data);
      }
    };
    fetchData();
  }, []);
  //handleAddNewAttachment
  const handleAddNewAttachment = async (body) => {
    const data = await newAttachment(body);
    if (data) {
      setAttachments([data, ...attachments]);
    }
  };
  //handleDeleteAttachment
  const handleDeleteAttachment = async (fileUrl) => {
    const code = await deleteAttachment({
      data: {
        boardId: card.boardId,
        columnId: card.columnId,
        cardId: card.cardId,
        fileUrl: fileUrl,
      },
    });
    if (code === 200) {
      const idx = attachments.findIndex((item) => {
        return item.fileUrl === fileUrl;
      });
      if (idx !== -1) {
        attachments.splice(idx, 1);
        setAttachments([...attachments]);
      }
    }
  };
  return (
    <BoxModal openModal={openModal} setOpenModal={setOpenModal}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            width: "75%",
            display: "flex",
            gap: 6,
            flexDirection: "column",
          }}
        >
          {/* Title */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <MedicalInformationIcon sx={{ color: "white" }} />
              <ContentEditable
                style={{ flex: 1, color: "white" }}
                html={card.title}
              ></ContentEditable>
            </Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "0.8rem", ml: 5.5, color: "white" }}
            >
              {`in the list ${card.columnTitle}`}
            </Typography>
          </Box>
          {/* Description */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <DescriptionIcon sx={{ color: "white" }} />
              <Typography sx={{ flex: 1, color: "white" }}>
                Description
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  color: "white",
                  bgcolor: "#3b444c",
                  "&:hover": {
                    bgcolor: "#8295b5",
                  },
                }}
                onClick={() => {
                  setShowBoxEditCard(true);
                }}
              >
                Edit
              </Button>
            </Box>
            {/* Content of description */}
            {showBoxEditCard || !card.description ? (
              <Box sx={{ px: 4 }}>
                <Editor
                  onInit={(_evt, editor) => (contentCardRef.current = editor)}
                  apiKey="6axrdt79je4tngkoquht4jg48ls8y7uu5uoy0ymjga050to8"
                  init={{
                    toolbar:
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | ",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    plugins:
                      "anchor autolink codesample emoticons image link lists media searchreplace table checklist export formatpainter pageembed linkchecker permanentpen powerpaste editimage advtemplate mentions tinycomments typography  markdown",
                    tinycomments_mode: "embedded",
                  }}
                  initialValue={card.description}
                />
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.5,
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Button
                    onClick={handleUpdateDescription}
                    sx={{
                      color: "#28384d",
                      bgcolor: "#579dff",
                      "&:hover": {
                        bgcolor: "#8295b5",
                      },
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setShowBoxEditCard(false);
                    }}
                    sx={{
                      color: "white",
                      bgcolor: "#323940",
                      "&:hover": {
                        bgcolor: "#79828b",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box sx={{ ml: 5.5 }}>
                <div
                  style={{ color: "white" }}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></div>
              </Box>
            )}
          </Box>
          {/* Attachment */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <AttachmentIcon sx={{ color: "white" }} />
              <Typography sx={{ flex: 1, color: "white" }}>
                Attachment
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  color: "white",
                  bgcolor: "#3b444c",
                  "&:hover": {
                    bgcolor: "#8295b5",
                  },
                }}
                onClick={handleClickOpen}
              >
                Add
              </Button>
            </Box>
            {/* Content of Attachment */}
            <Box
              sx={{ ml: 5.5, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {attachments?.map((item, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <img style={{ height: 80 }} src={item.fileUrl} />
                    <Box
                      sx={{ display: "flex", flexDirection: "column", py: 1 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 800,
                          color: "white",
                        }}
                        variant="h1"
                      >
                        {item.fileName}
                      </Typography>
                      {/* Action of attachment */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          color: "white",
                        }}
                      >
                        <span
                          style={{
                            color: "white",
                            fontSize: "0.8rem",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={() => {}}
                        >
                          Comment
                        </span>
                        <span>•</span>
                        <span
                          style={{
                            color: "white",
                            fontSize: "0.8rem",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            saveAs(item.fileUrl, item.fileName);
                          }}
                        >
                          Download
                        </span>
                        <span>•</span>
                        <span
                          style={{
                            color: "white",
                            fontSize: "0.8rem",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDeleteAttachment(item.fileUrl)}
                        >
                          Delete
                        </span>
                        <span>•</span>
                        <span
                          style={{
                            color: "white",
                            fontSize: "0.8rem",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                          onClick={() => {}}
                        >
                          Edit
                        </span>
                      </Box>
                      {/* make cover of card */}
                      <Box
                        sx={{ display: "flex", gap: 0.6, alignItems: "center" }}
                      >
                        <MedicalInformationIcon
                          sx={{ color: "white", height: "18px" }}
                        />
                        <a
                          href="#"
                          style={{
                            textDecoration: "underline",
                            mt: 1,
                            color: "white",
                            fontSize: "0.8rem",
                          }}
                        >
                          <span>Make cover</span>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          {/* Comment */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <DescriptionIcon sx={{ color: "white" }} />
              <Typography sx={{ flex: 1, color: "white" }}>Activity</Typography>
            </Box>
            {/* Content of Comment */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* Write Comment */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar sx={{ width: 34, height: 34 }}>H</Avatar>
                <Box
                  style={{
                    background: "#22272b",
                    height: "48px",
                    alignContent: "center",
                    flex: 1,
                    borderRadius: "8px",
                    paddingLeft: "16px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Write a comment ...
                </Box>
              </Box>
              {/* List comment */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <Avatar sx={{ width: 34, height: 34 }}>H</Avatar>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      width: "100%",
                      mb: 1,
                      color: "white",
                    }}
                  >
                    Phi Ho
                  </Typography>
                  {/* Content of comment */}
                  <Box
                    sx={{
                      background: "#22272b",
                      height: "auto",
                      alignContent: "center",
                      borderRadius: "8px",
                      paddingLeft: "16px",
                      cursor: "pointer",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    {/* Content of comment */}
                    <p style={{ color: "white" }}>Tao bị khùng nè</p>
                    <img
                      style={{ width: "95%", marginBottom: "20px" }}
                      src="https://trello.com/1/cards/66937c158ad2add888c66a3f/attachments/669484e249a7e6174270408b/download/image.png"
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <a href="" style={{ color: "white", fontSize: "0.8rem" }}>
                      <span>Delete</span>
                    </a>
                    <span>•</span>
                    <a href="" style={{ color: "white", fontSize: "0.8rem" }}>
                      <span>Edit</span>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          {/* Add to card */}
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2, gap: 1.5 }}
          >
            <br></br>
            <br></br>
            <Typography variant="h6" fontSize={12} sx={{ color: "white" }}>
              Add to card
            </Typography>
            <Button
              fullWidth={true}
              startIcon={<PersonIcon />}
              sx={{
                bgcolor: "#3b444c",
                color: "white",
                textAlign: "left",
                justifyContent: "flex-start",
                height: "32px",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#8295b5",
                },
              }}
            >
              Members
            </Button>
            <Button
              fullWidth={true}
              startIcon={<AttachmentIcon />}
              sx={{
                bgcolor: "#3b444c",
                color: "white",
                textAlign: "left",
                justifyContent: "flex-start",
                height: "32px",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#8295b5",
                },
              }}
            >
              Attachment
            </Button>
            <Button
              fullWidth={true}
              startIcon={<PhotoIcon />}
              sx={{
                bgcolor: "#3b444c",
                color: "white",
                textAlign: "left",
                justifyContent: "flex-start",
                height: "32px",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#8295b5",
                },
              }}
            >
              Cover
            </Button>
          </Box>
          {/* Action */}
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2, gap: 1.5 }}
          >
            <br></br>
            <br></br>
            <Typography variant="h6" fontSize={12} sx={{ color: "white" }}>
              Action
            </Typography>
            <Button
              fullWidth={true}
              startIcon={<ArrowRightAltIcon />}
              sx={{
                color: "white",
                textAlign: "left",
                justifyContent: "flex-start",
                height: "32px",
                alignItems: "center",
                bgcolor: "#3b444c",
                "&:hover": {
                  bgcolor: "#8295b5",
                },
              }}
            >
              Move
            </Button>
            <Button
              fullWidth={true}
              startIcon={<ContentCopyIcon />}
              sx={{
                bgcolor: "#3b444c",
                color: "white",
                textAlign: "left",
                justifyContent: "flex-start",
                height: "32px",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#8295b5",
                },
              }}
            >
              Copy
            </Button>
            <Button
              fullWidth={true}
              startIcon={<ArchiveIcon />}
              sx={{
                bgcolor: "#3b444c",
                color: "white",
                textAlign: "left",
                justifyContent: "flex-start",
                height: "32px",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#8295b5",
                },
              }}
            >
              Archive
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Attachment File */}
      <AttachmentFile
        handleAddNewAttachment={handleAddNewAttachment}
        open={open}
        setOpen={setOpen}
        card={card}
      />
    </BoxModal>
  );
}

export default EditCard;
