import { Avatar, AvatarGroup, Button, Chip, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const MENU_STYLE = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "#bbdefb",
  },
};

function BoardBar() {
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
        borderTop: "1px solid #2196f3",
        paddingX: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Chip
          sx={MENU_STYLE}
          clickable
          onClick={() => {}}
          icon={<DashboardIcon />}
          label="Phi Ho's Dashboard"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          onClick={() => {}}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          onClick={() => {}}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          onClick={() => {}}
          icon={<BoltIcon />}
          label="Automation"
        />
        <Chip
          sx={MENU_STYLE}
          clickable
          onClick={() => {}}
          icon={<FilterListIcon />}
          label="Filter"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Button
          startIcon={<PersonAddAltIcon />}
          sx={{ height: 32 }}
          variant="outlined"
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            "& .MuiAvatar-root": {
              height: 34,
              width: 34,
              fontSize: 16,
            },
          }}
        >
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/41/ad/d7/41add78e6102d35850d5f4ab5e163496.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/fe/e1/42/fee14277530e31cf1766e6a9f24b4270.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/82/ab/c1/82abc102fc1dc40b586377afe5dacd42.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/9c/36/ab/9c36ab95540ea0976c87ab652869e16d.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/15/39/8c/15398ca9011feebc71dd75bdb012a762.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/f8/f0/dc/f8f0dc8f6fe832ed33da2c8f37d2a9a8.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/8a/19/ed/8a19edb6fc4c4e1d58e875b7f1fdf502.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/63/9e/80/639e80599d84ef3adcfb8531fed2ac32.jpg"
            />
          </Tooltip>
          <Tooltip title="Phi Ho">
            <Avatar
              alt="Phi Ho"
              src="https://i.pinimg.com/564x/ed/b4/40/edb440cde2b66e858644f445a0f8d4f1.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
