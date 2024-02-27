import { createTheme } from "@mui/material/styles";

// Create a custom theme using the createTheme function from MUI (Material-UI)
const theme = createTheme({
  palette: {
    primary: {
      main: "#151515",
    },
    secondary: {
      light: "#41B2F0",

      main: "#286CCD",
      contrastText: "#000000",
    },
    background: {
      default: "#273849",
    },
    text: {
      primary: "#4eb6b0",
      secondary: "#FAF9FA",
    },
  },
  typography: {
    body1: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          padding: "8px 16px",
          color: "#000000",
          backgroundColor: "#000000",
          borderColor: "#000000",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
        },
      },
    },
  },
});

export default theme; // Export the custom theme
