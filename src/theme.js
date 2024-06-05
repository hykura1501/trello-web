import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "6px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#4db6ac",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#ce93d8",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "0.5px !important",
          },
          "&:hover fieldset": {
            borderWidth: "1.5px !important",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1.5px !important",
          },
        },
      },
    },
  },
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      // palette for light mode
      palette: {},
    },
    dark: {
      palette: {},
    },
  },
});
export default theme;
