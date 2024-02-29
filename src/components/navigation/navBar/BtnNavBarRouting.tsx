import { useNavigate } from "react-router-dom";
import { Button, Typography, useTheme } from "@mui/material";

interface BtnNavBarRoutingProps {
  navigateTo: string;
}

const BtnNavBarRouting = ({ navigateTo }: BtnNavBarRoutingProps) => {
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
        color: theme.palette.text.primary,
        backgroundColor: "transparent",

        width: "30%",
        height: "100%",
        "&:hover": {
          borderColor: theme.palette.text.secondary,
          opacity: 0.8,
          border: "1px dashed",
        },
      }}
    >
      <Typography
        variant="button"
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "16px",
          textDecoration: "underline",
        }}
      >
        Back
      </Typography>
    </Button>
  );
};

export default BtnNavBarRouting;
