import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

interface CategoriesBtnRoutingProps {
  btnName: string;
  navigateTo: string;
  children?: React.ReactNode; // Add this line
}

const CategoriesBtnRouting = ({
  btnName,
  children,

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
            backgroundColor: "white",

            opacity: 0.5,
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
                fontWeight: "700",
                textTransform: "none",
                fontSize: "18px",
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
              justifyContent: "center",
            }}
          >
            {children}
          </Box>
        </Box>
      </Button>
    </Box>
  );
};

export default CategoriesBtnRouting;
