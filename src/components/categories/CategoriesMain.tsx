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
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="Animals"
            navigateTo="/categoriesAnimalsMain"
          >
            <PetsIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="Clothes"
            navigateTo="/categoriesClothesMain"
          >
            <CheckroomIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting btnName="Food" navigateTo="/categoriesFoodMain">
            <LocalDiningIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="Furniture"
            navigateTo="/categoriesFurnitureMain"
          >
            <ChairIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="Locations"
            navigateTo="/categoriesLocationsMain"
          >
            <LocationCityIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="Plants"
            navigateTo="/categoriesPlantsMain"
          >
            <ForestIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CategoriesMain;
