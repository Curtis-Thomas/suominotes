import { Box } from "@mui/material";

import BtnRouting from "../BtnRouting";

function EnglishDash() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <BtnRouting btnName="Notes" navigateTo="/notesDash" />
      <BtnRouting btnName="Vocabulary" navigateTo="/vocabularyDash" />
    </Box>
  );
}

export default EnglishDash;
