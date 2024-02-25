import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

interface BtnRoutingFlashCardProps {
  title: string;
  description: string;
  navigateTo: string;
}

const BtnRoutingFlashCard = ({
  title,
  description,
  navigateTo,
}: BtnRoutingFlashCardProps) => {
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
        <Box sx={{ width: "50%", height: "100%" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Picture goes here
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "50%", height: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              {title}
            </Typography>
          </Box>

          <Box sx={{ width: "100%", height: "70%" }}>
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {description}: Description goes here
            </Typography>
          </Box>
        </Box>
      </Button>
    </Box>
  );
};

export default BtnRoutingFlashCard;
