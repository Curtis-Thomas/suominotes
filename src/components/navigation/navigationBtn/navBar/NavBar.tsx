import { Box } from "@mui/material";
import BtnNavBarRouting from "./BtnNavBarRouting";

interface BtnNavBarRoutingProps {
  route: string;
}

function NavBar({ route }: BtnNavBarRoutingProps) {
  return (
    <Box sx={{ mb: 1, height: "8vh" }}>
      <BtnNavBarRouting navigateTo={route} />
    </Box>
  );
}

export default NavBar;
