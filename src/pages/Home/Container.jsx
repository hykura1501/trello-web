import {
  Box,
  Button,
  FormControl,
  IconButton,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ReactComponent as TrelloIcon } from "#/assets/tl.svg";
import CloseIcon from "@mui/icons-material/Close";
import BoxTemplate from "#/components/BoxTemplate/BoxTemplate";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import BasicPopover from "#/components/BasicPopover/BasicPopover";
import { ReactComponent as PresentationIcon } from "#/assets/presentation.svg";
import DoneIcon from "@mui/icons-material/Done";
import { createBoard } from "#/services/boardService";
import Cookies from "js-cookie";

const dataTemplate = [
  {
    title: "Project Management",
    backgroundImage:
      "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg)",
  },
  {
    title: "Kanban Template",
    backgroundImage:
      "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/0650687ebf9b93c44903d606722af922/photo-1719300368274-9efe9c6b2d37.webp)",
  },
  {
    title: "Simple Project Board",
    backgroundImage:
      "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/640x960/8ee8e0f6b4b19886cf7b5dd2d391296a/photo-1720122207974-0e950e7deb05.webp)",
  },
  {
    title: "Remote Team Hub",
    backgroundImage:
      "url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/368bc33f2c374599a45888b7ce4f9c5a/photo-1472289065668-ce650ac443d2.jpg)",
  },
];

const backgrounds = [
  {
    url: "https://images.unsplash.com/photo-1725832062946-2ec9aae5c4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzI2ODQzNTU0fA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    url: "https://images.unsplash.com/photo-1726533870778-8be51bf99bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzI3MTg1MjczfA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    url: "https://images.unsplash.com/photo-1725663656850-7bc515816fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzI3MDA5MTc1fA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    url: "https://images.unsplash.com/photo-1726059968922-0396248fdaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzI3MDA5MTc1fA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    bgColor: "rgb(11, 80, 175)",
    url: "./src/assets/d106776cb297f000b1f4.svg",
  },
  {
    bgColor: "rgb(34, 140, 213)",
    url: "./src/assets/707f35bc691220846678.svg",
  },
  {
    bgColor: "rgb(103, 66, 132)",
    url: "./src/assets/8ab3b35f3a786bb6cdac.svg",
  },
  {
    bgColor: "rgb(168, 105, 193)",
    url: "./src/assets/a7c521b94eb153008f2d.svg",
  },
  {
    bgColor: "rgb(239, 118, 58)",
    url: "./src/assets/aec98becb6d15a5fc95e.svg",
  },
  // {
  //   bgcolor: "rgb(244, 136, 166)",
  //   bgUrl: "b75536d1afb40980ca57.svg"
  // },
];

const types = ["private", "workspace", "public"];

function Container() {
  const [openPopoverCreateBoard, setOpenPopoverCreateBoard] = useState(false);
  const open = Boolean(openPopoverCreateBoard);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setOpenPopoverCreateBoard(event.currentTarget);
  };

  const [background, setBackground] = useState(backgrounds[0]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState(2);
  const handleCreateBoard = async () => {
    const dataBoard = {
      ...background,
      title,
      type: types[type],
    };
    const data = await createBoard(dataBoard, {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
    if (data) {
      console.log(data);
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* // Most popular templates */}
      <Box sx={{ flex: 1, mt: 5, pl: 2, pr: 4 }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.4,
                color: "#b6c2cf",
              }}
            >
              <TrelloIcon />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                Most popular templates
              </Typography>
            </Box>
            <CloseIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%", mt: 2, gap: 2 }}>
          {dataTemplate?.map((item, idx) => (
            <BoxTemplate key={idx} data={item} />
          ))}
        </Box>
      </Box>
      {/* // Recently viewed*/}
      <Box sx={{ flex: 1, mt: 5, pl: 2, pr: 4 }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.4,
                color: "#b6c2cf",
              }}
            >
              <AccessTimeIcon />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                Recently viewed
              </Typography>
            </Box>
            <CloseIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%", mt: 2, gap: 2 }}>
          {dataTemplate?.map((item, idx) => (
            <BoxTemplate key={idx} data={item} />
          ))}
        </Box>
      </Box>

      {/* YOUR WORKSPACES */}
      <Box sx={{ flex: 1, mt: 5, pl: 2, pr: 4 }}>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#b6c2cf",
              }}
            >
              {/* <AccessTimeIcon /> ICON IF NEEDED */}
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                YOUR WORKSPACES
              </Typography>
              <Button
                sx={{ bgcolor: "#282d33", color: "#aebac6" }}
                startIcon={<AddIcon />}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                Create
              </Button>
              <BasicPopover
                anchorEl={openPopoverCreateBoard}
                setAnchorEl={setOpenPopoverCreateBoard}
              >
                <Box sx={{ width: "304px", bgcolor: "#282e33" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 1.5,
                      pb: 2,
                    }}
                  >
                    {/* Top: Create board */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <Typography sx={{ color: "#9fadbc", fontWeight: 600 }}>
                        Create board
                      </Typography>
                      <CloseIcon
                        sx={{
                          position: "absolute",
                          color: "#9fadbc",
                          right: "0",
                        }}
                      />
                    </Box>
                    {/* Presentation */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "200px",
                          height: "120px",
                          bgcolor: background.bgColor,
                          backgroundImage: `url(${background.url})`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <PresentationIcon />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            color: "#9fadbc",
                          }}
                        >
                          Background
                        </Typography>
                      </Box>
                      {/* background */}
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {backgrounds.map((bg, idx) => {
                          return (
                            <Box
                              key={idx}
                              sx={{
                                width: `${!bg.bgColor ? "64px" : "40px"}`,
                                height: `${!bg.bgColor ? "40px" : "32px"}`,
                                cursor: "pointer",
                                "&:hover": {
                                  opacity: 0.7,
                                },
                                backgroundImage: `url(${bg.url})`,
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "2px",
                                bgcolor: bg.bgColor,
                              }}
                              onClick={() => {
                                setBackground(bg);
                              }}
                            >
                              {bg.url === background.url && (
                                <DoneIcon
                                  fontSize="small"
                                  sx={{ color: "white" }}
                                />
                              )}
                            </Box>
                          );
                        })}
                        <IconButton sx={{ bgcolor: "#323940", color: "white" }}>
                          <MoreHorizIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    {/* board title */}
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          color: "#9fadbc",
                          fontWeight: 600,
                        }}
                      >
                        Board title
                      </Typography>
                      <TextField
                        hiddenLabel
                        variant="outlined"
                        size="small"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{
                          "& .MuiInputBase-root": {
                            color: "white",

                            "& fieldset": {
                              borderColor: "red",
                            },
                            "&:hover fieldset": {
                              borderColor: "red",
                            },
                            "& fieldset.Mui-focused": {
                              borderColor: "red",
                            },
                          },
                        }}
                      />
                      <Typography sx={{ color: "#9fadbc", fontSize: "0.8rem" }}>
                        👋Board title is required
                      </Typography>
                    </Box>
                    {/* Visibility */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          color: "#9fadbc",
                          fontWeight: 600,
                        }}
                      >
                        Visibility
                      </Typography>
                      <FormControl fullWidth>
                        <NativeSelect
                          sx={{
                            "& select": {
                              color: "#9fadbc",
                              fontSize: "0.8rem",
                              "& option": {
                                color: "black",
                                fontSize: "0/8rem",
                              },
                            },
                          }}
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          inputProps={{
                            name: "age",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value={0}>Private</option>
                          <option value={1}>Workspace</option>
                          <option value={2}>Public</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                    {/* footer */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      <Typography sx={{ color: "#9fadbc", fontSize: "0.8rem" }}>
                        This Workspace has 7 boards remaining. Free Workspaces
                        can only have 10 open boards. For unlimited boards,
                        upgrade your Workspace.
                      </Typography>
                      <Button
                        fullWidth
                        sx={{
                          bgcolor: "#323940",
                          color: "#9fadbc",
                          "&:disabled": {
                            color: "#4e5b67",
                          },
                        }}
                        disabled={!title}
                        onClick={handleCreateBoard}
                      >
                        Create
                      </Button>
                      <Button
                        fullWidth
                        sx={{ bgcolor: "#323940", color: "#9fadbc" }}
                      >
                        Start with a template
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </BasicPopover>
            </Box>
            <CloseIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%", mt: 2, gap: 2 }}>
          {dataTemplate?.map((item, idx) => (
            <BoxTemplate key={idx} data={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Container;
