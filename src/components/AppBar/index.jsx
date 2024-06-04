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
import { Badge, Button, TextField, Tooltip } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function AppBar() {
  return (
    <Box
      padding={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        // backgroundColor: "primary.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            sx={{ color: "primary.main" }}
            inheritViewBox
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "primary.main",
          gap: 2,
        }}
      >
        <TextField
          sx={{ minWidth: 100 }}
          type="search"
          label="Search"
          size="small"
        ></TextField>
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon color="primary.main" />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
