import { Box } from "@mui/material";

import BtnRouting from "../BtnRouting";
import Search from "../../../search/Search";
import NavBar from "../navBar/NavBar";

function EnglishDash() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <NavBar route="/" />
      <BtnRouting btnName="Notes" navigateTo="/notesDash" />
      <BtnRouting btnName="Vocabulary" navigateTo="/vocabularyDash" />
      <Search />
    </Box>
  );
}

export default EnglishDash;
