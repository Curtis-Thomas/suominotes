import { Box, Grid, Typography } from "@mui/material";
import CategoriesBtnRouting from "./CategoriesBtnRouting";
import PetsIcon from "@mui/icons-material/Pets";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ChairIcon from "@mui/icons-material/Chair";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ForestIcon from "@mui/icons-material/Forest";

function CategoriesMain() {
  return (
    <Box>
      <Typography variant="h4" sx={{ pb: 1, fontWeight: "600" }}>
        Categories
      </Typography>
      <Grid container spacing={2} padding={1}>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Animals" navigateTo="">
            <PetsIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Clothes" navigateTo="">
            <CheckroomIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Food" navigateTo="">
            <LocalDiningIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Furniture" navigateTo="">
            <ChairIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Locations" navigateTo="">
            <LocationCityIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Plants" navigateTo="">
            <ForestIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CategoriesMain;
