import { Box } from "@mui/material";
import Alphabet from "./notes1/Alphabet";
import Diphthongs from "./notes1/Dipththongs";
import LongShortVowels from "./notes1/LongShortVowels";

function Notes1() {
  return (
    <Box>
      <Alphabet />
      <Diphthongs />
      <LongShortVowels />
    </Box>
  );
}

export default Notes1;
