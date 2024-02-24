import { Box } from "@mui/material";
import VocabularyMain from "../../../vocabulary/VocabularyMain";
import NavBar from "../navBar/NavBar";

function VocabularyDash() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <NavBar route="/englishDash" />
      <VocabularyMain />
    </Box>
  );
}

export default VocabularyDash;
