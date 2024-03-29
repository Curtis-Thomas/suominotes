import * as React from "react";

import { Box, Button, Menu } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import BtnDropdownMenuRouting from "../components/navigation/dropdownMenu/BtnDropdownMenuRouting";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTitleClick = () => {
    window.location.href = "/";
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 1,
        pb: 1,
      }}
    >
      <Box sx={{ width: "20%", height: "100%" }}></Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "1.5rem",
          }}
          onClick={handleTitleClick}
        >
          Suomi Notes
        </Button>
      </Box>
      <Box sx={{ width: "20%" }}>
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            backgroundColor: "transparent",

            color: "white",
            border: "solid 1px white",
            borderRadius: "100px",
          }}
        >
          <MenuIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Box>
            <BtnDropdownMenuRouting btnName="Home" navigateTo="/" />
          </Box>
        </Menu>
      </Box>
    </Box>
  );
}

export default Header;
