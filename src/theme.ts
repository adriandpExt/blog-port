import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#EEEDEB",
      paper: "#2F3645",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    h1: {
      color: "#333333",
    },
    h2: {
      color: "#333333",
    },
    body1: {
      color: "#666666",
    },
  },
});

export default theme;
