import { colors } from "@mui/material";
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
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          fontSize: "0.875rem",
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
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
      palette: {
        primary: {
          main: colors.blue[500],
          light: colors.blue[300],
          dark: colors.blue[700],
        },
        secondary: {
          main: colors.red[500],
          light: colors.red[300],
          dark: colors.red[700],
        },
      },
    },
    dark: {
      // palette for dark mode
      palette: {
        primary: {
          main: colors.blue[300],
          light: colors.blue[100],
          dark: colors.blue[500],
        },
        secondary: {
          main: colors.red[300],
          light: colors.red[100],
          dark: colors.red[500],
        },
      },
    },
  },
});
export default theme;
