import { Box, Typography } from "@mui/material";
import BtnRouting from "../components/navigation/navigationBtn/BtnRouting";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 3,
        pb: 3,
      }}
    >
      <Box sx={{ width: "20%" }}>
        <BtnRouting btnName="Home" navigateTo="/" />
      </Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">Suomi Notes</Typography>
      </Box>
      <Box sx={{ width: "20%" }}></Box>
    </Box>
  );
}

export default Header;
