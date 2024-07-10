import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as TrelloIcon } from "#/assets/trello.svg";
import { ReactComponent as GoogleIcon } from "#/assets/google.svg";
import { ReactComponent as MicrosoftIcon } from "#/assets/microsoft.svg";
import { ReactComponent as FacebookIcon } from "#/assets/facebook.svg";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        bgcolor: "rgb(250, 251, 252)",
        backgroundImage:
          "url(https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-left.4f52d13c.svg), url(https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-right.3ee60d6f.svg)",
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
          mt: "30px",
          width: "400px",
          padding: "24px 40px",
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
            gap: 1.2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.4,
            }}
          >
            <SvgIcon
              component={TrelloIcon}
              sx={{ color: "blue", fontSize: "32px" }}
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
            Log in to continue
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TextField
            sx={{ m: 0.5 }}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <FormControl sx={{ m: 0.5 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{ bgcolor: "blue", color: "white", mt: "2px" }}
          >
            Login
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 1.5 }}>
            <a
              href="/forget-password"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Forget password
            </a>
            <Typography sx={{ mx: 1 }}>•</Typography>
            <a
              href="/register"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Create an account
            </a>
          </Box>
        </Box>
        <Typography
          sx={{ cursor: "default", my: 2 }}
          align="center"
          fontWeight={400}
        >
          Or continue with:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 1.5,
          }}
        >
          <Button variant="outlined" size="large">
            <SvgIcon component={GoogleIcon} inheritViewBox />
            <Typography
              sx={{ mt: "3px", ml: 1, color: "black" }}
              fontWeight={600}
            >
              Google
            </Typography>
          </Button>
          <Button variant="outlined" size="large">
            <SvgIcon component={FacebookIcon} inheritViewBox />
            <Typography
              sx={{ mt: "3px", ml: 1, color: "black" }}
              fontWeight={600}
            >
              Facebook
            </Typography>
          </Button>
          <Button variant="outlined" size="large">
            <SvgIcon component={MicrosoftIcon} inheritViewBox />
            <Typography
              sx={{ mt: "3px", ml: 1, color: "black" }}
              fontWeight={600}
            >
              Microsoft
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
