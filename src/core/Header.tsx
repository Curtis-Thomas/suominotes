import { Box, Typography } from "@mui/material";

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
      <Typography variant="h5">Suomi Notes</Typography>
    </Box>
  );
}

export default Header;
