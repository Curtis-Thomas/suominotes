import { Box } from "@mui/material";
import BtnRouting from "../../../../../components/navigation/navigationBtn/BtnRouting";
import Search from "../../../../../components/search/Search";

import ChineseCategoriesMain from "./categories/ChineseCategoriesMain";

function ChineseDash() {
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
        btnName="词汇"
        navigateTo="/chineseVocabularyDash"
        btnDescription="按字母表顺序排列"
        btnBackgroundColor="white"
        btnTitleColor="#4eb6b0"
      />
      <BtnRouting
        btnName="笔记"
        navigateTo="/chineseNotesDash"
        btnDescription="复习笔记"
        btnBackgroundColor="#4eb6b0"
        btnTitleColor="white"
      />
      <BtnRouting
        btnName="语法"
        navigateTo="/chineseGrammarDash"
        btnDescription="基础语法"
        btnBackgroundColor="white"
        btnTitleColor="#4eb6b0"
      />

      <ChineseCategoriesMain />
      <BtnRouting
        btnName="练习"
        navigateTo="/chineseFlashCardsDash"
        btnDescription="闪卡等"
        btnBackgroundColor="#4eb6b0"
        btnTitleColor="white"
      />
    </Box>
  );
}

export default ChineseDash;
