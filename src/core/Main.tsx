import { Box, Typography } from "@mui/material";
import BtnRouting from "../components/navigation/navigationBtn/BtnRouting";
import GitHubButton from "react-github-btn";

function Main() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
        p: 2,
      }}
    >
      <Typography sx={{ textAlign: "center" }}>
        Free open-source Finnish language platform.
      </Typography>
      <Typography></Typography>
      <Typography sx={{ textAlign: "center", pt: 1, pb: 2 }}>
        If you have found this platform useful, please consider starring the
        project on GitHub.
      </Typography>
      <Box
        sx={{
          height: "10vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: 2,
        }}
      >
        <GitHubButton
          href="https://github.com/Curtis-Thomas/suominotes"
          data-icon="octicon-star"
          aria-label="Star buttons/github-buttons on GitHub"
          data-show-count="true"
          data-size="large"
        >
          Star
        </GitHubButton>
      </Box>

      <BtnRouting
        btnName="English"
        btnDescription="English to Finnish"
        navigateTo="/englishDash"
        btnBackgroundColor="white"
        btnTitleColor="#4eb6b0"
      />
      <BtnRouting
        btnName="中文"
        btnDescription="Chinese to Finnish"
        navigateTo="/chineseDash"
        btnBackgroundColor="white"
        btnTitleColor="#4eb6b0"
      />
    </Box>
  );
}

export default Main;
