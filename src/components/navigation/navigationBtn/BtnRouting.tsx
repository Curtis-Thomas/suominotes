import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

interface BtnRoutingProps {
  btnName: string;
  navigateTo: string;
  btnDescription?: string;
}

const BtnRouting = ({
  btnName,
  btnDescription,
  navigateTo,
}: BtnRoutingProps) => {
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
        height: "9vh",
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
              variant="h4"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "26px",
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
          >
            <Typography
              variant="button"
              sx={{
                textTransform: "none",
                fontSize: "14px",
                color: "black",
                fontWeight: "600",
              }}
            >
              {btnDescription}
            </Typography>
          </Box>
        </Box>
      </Button>
    </Box>
  );
};

export default BtnRouting;
