import { Box } from "@mui/material";
import BtnRouting from "../components/navigation/navigationBtn/BtnRouting";

function Main() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <BtnRouting btnName="English" navigateTo="/englishDash" />
    </Box>
  );
}

export default Main;
