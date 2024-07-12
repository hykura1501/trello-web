import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as GoogleIcon } from "#/assets/google.svg";
import { ReactComponent as MicrosoftIcon } from "#/assets/microsoft.svg";
import { ReactComponent as FacebookIcon } from "#/assets/facebook.svg";

function SocialLogin() {
  const socialLogin = [
    {
      title: "Google",
      icon: GoogleIcon,
    },
    {
      title: "Facebook",
      icon: FacebookIcon,
    },
    {
      title: "Microsoft",
      icon: MicrosoftIcon,
    },
  ];
  return (
    <Box>
      <Typography
        sx={{ cursor: "default", my: 1 }}
        align="center"
        fontWeight={400}
      >
        Or continue with:
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5
        }}
      >
        {socialLogin.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 1.5,
              }}
            >
              <Button variant="outlined" size="large">
                <SvgIcon component={item.icon} inheritViewBox />
                <Typography
                  sx={{ mt: "3px", ml: 1, color: "black" }}
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SocialLogin;
