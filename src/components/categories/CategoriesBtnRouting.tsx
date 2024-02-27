import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

interface CategoriesBtnRoutingProps {
  btnName: string;
  navigateTo: string;
}

const CategoriesBtnRouting = ({
  btnName,

  navigateTo,
}: CategoriesBtnRoutingProps) => {
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
        height: "10vh",
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
          backgroundColor: "white",
          borderRadius: "8px",

          border: "none",
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            opacity: 0.8,
            border: "none",
          },
        }}
      >
        <Box sx={{ height: "100%", width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {btnName}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "left",
            }}
          ></Box>
        </Box>
      </Button>
    </Box>
  );
};

export default CategoriesBtnRouting;
