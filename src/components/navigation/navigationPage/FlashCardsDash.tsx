import { Box } from "@mui/material";

import NavBar from "../navBar/NavBar";
import FlashCardsMain from "../../flashCards/FlashCardsMain";

function FlashCardsDash() {
  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
        pb: 5,
      }}
    >
      <NavBar route="/englishDash" />

      <FlashCardsMain />
    </Box>
  );
}

export default FlashCardsDash;
