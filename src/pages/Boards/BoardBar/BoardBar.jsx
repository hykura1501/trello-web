import {
  Avatar,
  AvatarGroup,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function BoardBar({ board }) {
  const [starred, setStarred] = useState(false);
  const [visibility, setVisibility] = useState(board?.type);
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": {
          m: "0 16px",
        },
        paddingX: 2,
        backdropFilter: "blur(4px)",
        background: "#0000003d",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light" ? "#A7E6FF" : "#37474f",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "18px", fontWeight: "bold", color: "white" }}
        >
          {board?.title}
        </Typography>
        {starred ? (
          <IconButton
            size="small"
            sx={{ color: "white" }}
            onClick={() => setStarred(false)}
          >
            <StarIcon />
          </IconButton>
        ) : (
          <IconButton
            size="small"
            sx={{ color: "white" }}
            onClick={() => setStarred(true)}
          >
            <StarBorderIcon />
          </IconButton>
        )}
        {visibility === "public" ? (
          <IconButton
            size="small"
            sx={{ color: "white" }}
            onClick={() => setVisibility("private")}
          >
            <VpnLockIcon />
          </IconButton>
        ) : (
          <IconButton
            size="small"
            sx={{ color: "white" }}
            onClick={() => setVisibility("public")}
          >
            <LockIcon />
          </IconButton>
        )}
        <IconButton size="small" sx={{ color: "white" }}>
          <AddToDriveIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: "white" }}>
          <BoltIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: "white" }}>
          <FilterListIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Button
          startIcon={<PersonAddAltIcon />}
          sx={{
            height: 32,
            color: "white",
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "#ffa000" : "#76ff03",
            "&:hover": {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "#ffca28" : "#64dd17",
            },
          }}
          variant="outlined"
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              height: 34,
              width: 34,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              color: "white",
            },
          }}
        >
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="/src/assets/bv.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="/src/assets/bv.jpg"
            />
          </Tooltip>
        </AvatarGroup>
        <IconButton size="small" sx={{ color: "white" }}>
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default BoardBar;
