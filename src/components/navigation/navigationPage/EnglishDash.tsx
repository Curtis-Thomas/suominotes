import { Box } from "@mui/material";

import BtnRouting from "../navigationBtn/BtnRouting";
import Search from "../../search/Search";

import CategoriesMain from "../../categories/CategoriesMain";

function EnglishDash() {
  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },

        p: 2,
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
