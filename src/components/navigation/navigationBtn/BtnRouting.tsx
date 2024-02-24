import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

interface BtnRoutingProps {
  btnName: string;
  navigateTo: string;
}

const BtnRouting = ({ btnName, navigateTo }: BtnRoutingProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    navigate(navigateTo);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "100%",
        height: "20vh",
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Button
        fullWidth
        onClick={handleClick}
        sx={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,

          border: "1px solid",
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            opacity: 0.8,
            border: "1px dashed",
          },
        }}
      >
        <Typography
          variant="button"
          sx={{ fontWeight: "bold", textTransform: "none", fontSize: "16px" }}
        >
          {btnName}
        </Typography>
      </Button>
    </Box>
  );
};

export default BtnRouting;
