import { Box } from "@mui/material";
import NavBar from "../../../../../components/navigation/navBar/NavBar";
import ChineseNotesMain from "./notes/ChineseNotesMain";

function ChineseNotesDash() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <NavBar route="/chineseDash" />
      <ChineseNotesMain />
    </Box>
  );
}

export default ChineseNotesDash;
