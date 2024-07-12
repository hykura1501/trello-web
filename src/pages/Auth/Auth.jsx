import { Box, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as TrelloIcon } from "#/assets/trello.svg";
import SocialLogin from "./SocialLogin";
function Auth({ children, title }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        bgcolor: "rgb(250, 251, 252)",
        backgroundImage:
          'url("../src/assets/bg2.svg"), url("../src/assets/bg1.svg")',
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundAttachment: "fixed, fixed",
        backgroundSize: "368px, 368px",
        backgroundPosition: "left bottom, right bottom",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          mt: "26px",
          width: "400px",
          padding: "22px 40px",
          background: "rgb(255, 255, 255)",
          borderRadius: "3px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
          boxSizing: "border-box",
          color: "#42526E",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            gap: 0.8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.2,
            }}
          >
            <SvgIcon
              component={TrelloIcon}
              sx={{ color: "blue", fontSize: "28px" }}
              inheritViewBox
            />
            <Typography
              variant="span"
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#172b4d",
              }}
            >
              Trello
            </Typography>
          </Box>
          <Typography align="center" fontWeight={500}>
            {title}
          </Typography>
        </Box>
        {children}
        <SocialLogin />
      </Box>
    </Box>
  );
}

export default Auth;
