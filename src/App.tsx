import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, ThemeProvider } from "@mui/material";

import theme from "./theme";
import Header from "./core/Header";
import Main from "./core/Main";
import EnglishDash from "./components/navigation/navigationPage/EnglishDash";
import NotesDash from "./components/navigation/navigationPage/NotesDash";
import VocabularyDash from "./components/navigation/navigationPage/VocabularyDash";
import FlashCardsDash from "./components/navigation/navigationPage/FlashCardsDash";
import FlashCardAnimals from "./components/flashCards/animals/FlashCardAnimals";
import FlashCardFood from "./components/flashCards/food/FlashCardFood";
import FlashCardClothes from "./components/flashCards/clothes/FlashCardClothes";
import FlashCardNature from "./components/flashCards/nature/FlashCardNature";
import FlashCardPlurals from "./components/flashCards/plurals/FlashCardPlurals";
import FlashCardVerbPlurals from "./components/flashCards/verbPlurals/FlashCardVerbPlurals";
import FlashCardProfessions from "./components/flashCards/professions/flashCardProfessions";
import ChineseDash from "./language/chinese/components/navigation/navigationPage/ChineseDash";
import ChineseNotesMain from "./language/chinese/components/navigation/navigationPage/notes/ChineseNotesMain";
import ChineseNotesDash from "./language/chinese/components/navigation/navigationPage/ChineseNotesDash";

import GrammarDash from "./components/grammar/GrammarDash";

const routeConfig = [
  { path: "/", component: Main },

  //English
  { path: "/englishDash", component: EnglishDash },
  { path: "/notesDash", component: NotesDash },
  { path: "/vocabularyDash", component: VocabularyDash },
  { path: "/flashCardsDash", component: FlashCardsDash },

  //Grammar
  { path: "/grammarDash", component: GrammarDash },

  // Flash Cards
  { path: "/flashCardsAnimals", component: FlashCardAnimals },
  { path: "/flashCardsFood", component: FlashCardFood },
  { path: "/flashCardsClothes", component: FlashCardClothes },
  { path: "/flashCardsNature", component: FlashCardNature },
  { path: "/flashCardsPlurals", component: FlashCardPlurals },
  { path: "/flashCardsVerbPlurals", component: FlashCardVerbPlurals },
  { path: "/flashCardsProfessions", component: FlashCardProfessions },

  //Chinese
  { path: "/chineseDash", component: ChineseDash },
  { path: "/chineseNotesDash", component: ChineseNotesDash },

  { path: "/chineseNotesMain", component: ChineseNotesMain },
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            height: "100vh",
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
