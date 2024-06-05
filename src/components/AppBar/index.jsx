import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import ModeSelect from "../ModeSelect";
import { ReactComponent as TrelloIcon } from "#/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menu/Workspaces";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Templates from "./Menu/Templates";
import Profiles from "./Menu/Profiles";
import {
  Badge,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import QueueIcon from "@mui/icons-material/Queue";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
function AppBar() {
  const [searchValue, setSearchValue] = useState("");
  const inputSearchRef = useRef();
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#42a5f5" : "#455a64",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        padding: 2,
        overflowY: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            sx={{ color: "white" }}
            inheritViewBox
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}
          >
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button startIcon={<QueueIcon />} sx={{ height: 32, color: "white" }}>
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          ref={inputSearchRef}
          sx={{
            minWidth: 100,
            maxWidth: 180,
            "& label": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& input": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
          type="text"
          label="Search"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {searchValue && (
                  <CloseIcon
                    fontSize="small"
                    sx={{ color: "white", cursor: "pointer" }}
                    onClick={() => {
                      setSearchValue("");
                      const input = inputSearchRef.current.querySelector(
                        ".MuiInputBase-input"
                      );
                      input.focus();
                    }}
                  />
                )}
              </InputAdornment>
            ),
          }}
        ></TextField>
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
