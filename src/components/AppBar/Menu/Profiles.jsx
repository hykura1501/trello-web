import * as React from "react";
import { Avatar, Box, Button, IconButton, Menu, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title="Profiles">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/438305881_933364531817858_3595523909023700955_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH5S6aHsjsN2UU4Mae_3EU_mGNwJJK0tguYY3AkkrS2C-6HHo8sTL1JbiszZNhRXwBL2OLu7F8_Msfe55C3Bh7A&_nc_ohc=zaZzaU9WFe0Q7kNvgGVFCDg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-3.fna&oh=00_AYBnsggvflWAdPUPRK6TYz88jOgTNNMM-swrvltEEOZv0w&oe=66611035"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 28, height: 28, mr: 1 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profiles;
