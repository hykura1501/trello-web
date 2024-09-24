import AppBar from "#/components/AppBar/AppBar";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Container from "./Container";
function Home({ user }) {
  return (
    <Box>
      <AppBar user={user}></AppBar>
      <Box
        sx={{
          bgcolor: "#1d2125",
          height: "100vh",
          width: "100%",
          borderTop: "1px solid #31383d",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            px: "40px",
            color: "white"
          }}
        >
          <Sidebar />
          <Container />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
