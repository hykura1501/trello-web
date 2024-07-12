import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Auth from "./Auth";
import { NavLink } from "react-router-dom";
import * as authServices from "#/services/authServices";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const setFieldsValue = (e) => {
    setFields((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = async () => {
    const data = await authServices.login(fields);
    console.log(data);
  };

  return (
    <Auth title={"Login to continue"}>
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
          name="email"
          value={fields.email}
          onChange={setFieldsValue}
        />
        <FormControl sx={{ m: 0.5 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            name="password"
            value={fields.password}
            onChange={setFieldsValue}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
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
          onClick={handleLogin}
        >
          Login
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 1.5 }}>
          <NavLink
            to="/forget-password"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Forget password
          </NavLink>
          <Typography sx={{ mx: 1 }}>•</Typography>
          <NavLink
            to="/register"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Create an account
          </NavLink>
        </Box>
      </Box>
    </Auth>
  );
}

export default Login;
