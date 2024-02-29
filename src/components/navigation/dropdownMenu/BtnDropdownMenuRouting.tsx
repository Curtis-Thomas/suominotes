import { useNavigate } from "react-router-dom";
import { Button, Typography, useTheme } from "@mui/material";

interface BtnDropdownMenuRoutingProps {
  btnName: string;
  navigateTo: string;
}

const BtnDropdownMenuRouting = ({
  btnName,
  navigateTo,
}: BtnDropdownMenuRoutingProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    navigate(navigateTo);
  };
  return (
    <Button
      fullWidth
      onClick={handleClick}
      sx={{
        color: "black",
        backgroundColor: "transparent",

        borderTop: "1px solid",
        borderBottom: "1px solid",
        width: "100%",
        height: "100%",
        "&:hover": {
          borderColor: theme.palette.text.secondary,
          opacity: 0.8,
          border: "1px dashed",
          backgroundColor: "white",
        },
        "&:active": {
          borderColor: theme.palette.text.secondary,
          opacity: 0.8,
          border: "1px dashed",
          backgroundColor: "white",
        },
        "&:focus": {
          borderColor: theme.palette.text.secondary,
          opacity: 0.8,
          border: "1px dashed",
          backgroundColor: "white",
        },
      }}
    >
      <Typography
        variant="button"
        sx={{ fontWeight: "bold", textTransform: "upper" }}
      >
        {btnName}
      </Typography>
    </Button>
  );
};

export default BtnDropdownMenuRouting;
