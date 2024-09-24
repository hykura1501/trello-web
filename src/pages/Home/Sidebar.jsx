import { Box, Button } from "@mui/material";
import { ReactComponent as TrelloIcon } from "#/assets/trello.svg";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import HouseIcon from "@mui/icons-material/House";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const navMenu = [
  {
    icon: <TrelloIcon />,
    title: "Boards",
    route: "/board",
  },
  {
    icon: <ArtTrackIcon />,
    title: "Template",
    route: "/template",
  },
  {
    icon: <HouseIcon />,
    title: "Home",
    route: "/",
  },
];
function Sidebar() {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <Box sx={{ width: "25%", px: 2, mt: 5 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
          {navMenu?.map((item, idx) => {
            return (
              <NavLink key={idx} to={item.route}>
                <Button
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                    color: idx === activeNav ? "#579dff" : "#b6c2cf",
                  }}
                  startIcon={item.icon}
                  onClick={() => setActiveNav(idx)}
                >
                  {item.title}
                </Button>
              </NavLink>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
