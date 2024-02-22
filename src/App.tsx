import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, ThemeProvider } from "@mui/material";

import theme from "./theme";
import Header from "./core/Header";
import Main from "./core/Main";
import EnglishDash from "./components/navigation/navigationBtn/navigationPage/EnglishDash";
import NotesDash from "./components/navigation/navigationBtn/navigationPage/NotesDash";
import VocabularyDash from "./components/navigation/navigationBtn/navigationPage/VocabularyDash";

const routeConfig = [
  { path: "/", component: Main },
  { path: "/englishDash", component: EnglishDash },
  { path: "/notesDash", component: NotesDash },
  { path: "/vocabularyDash", component: VocabularyDash },
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: "100vh",
          }}
        >
          <Header />
          <Routes>
            {/* Render the routes based on the routeConfig */}
            {routeConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
