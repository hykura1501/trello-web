import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Auth from "./Auth";
import { NavLink } from "react-router-dom";
import * as authServices from "#/services/authServices";
function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [fields, setFields] = useState({
    fullName: "",
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
  const handleRegister = async () => {
    const data = await authServices.register(fields);
    if (data) {
      window.location.href = "/board";
    }
  };
  return (
    <Auth title={"Register to continue"}>
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
        <TextField
          sx={{ m: 0.5 }}
          id="standard-basic"
          label="Full Name"
          variant="standard"
          name="fullName"
          value={fields.fullName}
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
          onClick={handleRegister}
        >
          Register
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 1.5 }}>
          <NavLink
            to="/login"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Already have an account? Log in
          </NavLink>
        </Box>
      </Box>
    </Auth>
  );
}

export default Register;
