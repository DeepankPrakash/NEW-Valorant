import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4655",
    },
    background: {
      default: "#0f1923",
      paper: "#1a2634",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
