import { Box } from "@mui/material";
import ChineseAlphabet from "./chineseNotes1/ChineseAlphabet";
import ChineseDiphthongs from "./chineseNotes1/ChineseDipththongs";
import ChineseLongShortVowels from "./chineseNotes1/ChineseLongShortVowels";

function ChineseNotes1() {
  return (
    <Box>
      <ChineseAlphabet />
      <ChineseDiphthongs />
      <ChineseLongShortVowels />
    </Box>
  );
}

export default ChineseNotes1;
