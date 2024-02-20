import { Box, ThemeProvider } from "@mui/material";

import theme from "./theme";
import Header from "./core/Header";
import Main from "./core/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: "100vh",
        }}
      >
        <Header />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;
