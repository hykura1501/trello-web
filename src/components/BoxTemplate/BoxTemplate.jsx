import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function BoxTemplate({ data }) {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "96px",
          width: "175px",
          backgroundImage: data.backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            color: "white",

            ml: 0.5,
          }}
        >
          {data.title}
        </Typography>
      </Box>
    </Link>
  );
}

export default BoxTemplate;
