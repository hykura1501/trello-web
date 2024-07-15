import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CloseIcon from "@mui/icons-material/Close";
import BoxModal from "./BoxModal";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ContentEditable from "react-contenteditable";
import DescriptionIcon from "@mui/icons-material/Description";
function EditCard({ openModal, setOpenModal }) {
  return (
    <BoxModal openModal={openModal} setOpenModal={setOpenModal}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            gap: 6,
            flexDirection: "column",
          }}
        >
          {/* Title */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <MedicalInformationIcon />
              <ContentEditable
                style={{ flex: 1 }}
                html="new card"
              ></ContentEditable>
            </Box>
            <Typography variant="h6" sx={{ fontSize: "0.8rem", ml: 5.5 }}>
              in the list Test
            </Typography>
          </Box>
          {/* Description */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <DescriptionIcon />
              <Typography sx={{ flex: 1 }}>Description</Typography>
              <Button variant="contained" size="small">
                Edit
              </Button>
            </Box>
            {/* Content of description */}
            <Box sx={{ ml: 5.5 }}>
              <Typography>Content</Typography>
              <img
                style={{ height: 300 }}
                src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
              />
            </Box>
          </Box>
          {/* Attachment */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <AttachmentIcon />
              <Typography sx={{ flex: 1 }}>Attachment</Typography>
              <Button variant="contained" size="small">
                Add
              </Button>
            </Box>
            {/* Content of Attachment */}
            <Box sx={{ ml: 5.5 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <img
                  style={{ height: 80 }}
                  src="https://trello.com/1/cards/66937c158ad2add888c66a3f/attachments/669484e249a7e6174270408b/download/image.png"
                />
                <Box sx={{ display: "flex", flexDirection: "column", py: 1 }}>
                  <Typography
                    sx={{ fontSize: "0.8rem", fontWeight: 800 }}
                    variant="h1"
                  >
                    image.png
                  </Typography>
                  {/* Action of attachment */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <a href="" style={{ color: "white", fontSize: "0.8rem" }}>
                      <span>Comment</span>
                    </a>
                    <span>•</span>
                    <a href="" style={{ color: "white", fontSize: "0.8rem" }}>
                      <span>Download</span>
                    </a>
                    <span>•</span>
                    <a href="" style={{ color: "white", fontSize: "0.8rem" }}>
                      <span>Delete</span>
                    </a>
                    <span>•</span>
                    <a href="" style={{ color: "white", fontSize: "0.8rem" }}>
                      <span>Edit</span>
                    </a>
                  </Box>
                  {/* make cover of card */}
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <MedicalInformationIcon />
                    <div style={{ textDecoration: "underline", mt: 1 }}>
                      Make cover
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Comment */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <DescriptionIcon />
              <Typography sx={{ flex: 1 }}>Activity</Typography>
            </Box>
            {/* Content of Comment */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* Write Comment */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar sx={{ width: 34, height: 34 }}>H</Avatar>
                <div
                  style={{
                    background: "#22272b",
                    height: "48px",
                    alignContent: "center",
                    flex: 1,
                    borderRadius: 8,
                    paddingLeft: "16px",
                    cursor: "pointer",
                  }}
                >
                  Write a comment ...
                </div>
              </Box>
              {/* List comment */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <Avatar sx={{ width: 34, height: 34 }}>H</Avatar>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "0.8rem" }}>
                    Phi Ho
                  </Typography>
                  <div
                    style={{
                      background: "#22272b",
                      height: "48px",
                      alignContent: "center",
                      borderRadius: 8,
                      width: "540px",
                      paddingLeft: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Write a comment ...
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <h1>Hello</h1>
        </Box>
      </Box>
    </BoxModal>
  );
}

export default EditCard;
