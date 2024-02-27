import { Box } from "@mui/material";

import BtnRouting from "../navigationBtn/BtnRouting";
import Search from "../../search/Search";

import CategoriesMain from "../../categories/CategoriesMain";

function EnglishDash() {
  return (
    <Box
      sx={{
        width: {
          xs: "100vw",
          sm: "100vw",
          md: "100vw",
          lg: "100vw",
          xl: "100vw",
        },

        p: {
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
        },
        pl: {
          xl: 50,
        },
        pr: {
          xl: 50,
        },
      }}
    >
      <Search />
      <BtnRouting
        btnName="Vocabulary"
        navigateTo="/vocabularyDash"
        btnDescription="Alphabetical list"
      />
      <BtnRouting
        btnName="Grammar"
        navigateTo="/grammarDash"
        btnDescription="Basics of grammar"
      />

      <CategoriesMain />
      <BtnRouting
        btnName="Practise"
        navigateTo="/flashCardsDash"
        btnDescription="Flash cards etc."
      />
    </Box>
  );
}

export default EnglishDash;
