import { createTheme } from "@mui/material";
import "./global/main.css";

export const theme = createTheme({
  palette: {
    background: {
      default: "#EEF7FF",
      paper: "#2F3645",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: "Kalimer",
    h1: {
      fontFamily: "Black History",
      color: "#333333",
    },
    h2: {
      color: "#333333",
    },
    body1: {
      color: "#666666",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
