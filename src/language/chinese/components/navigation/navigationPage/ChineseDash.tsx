import { Box } from "@mui/material";
import NavBar from "../../../../../components/navigation/navBar/NavBar";
import BtnRouting from "../../../../../components/navigation/navigationBtn/BtnRouting";

function ChineseDash() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <NavBar route="/" />
      <BtnRouting btnName="Notes" navigateTo="/chineseNotesDash" />
    </Box>
  );
}

export default ChineseDash;
