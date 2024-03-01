import { Box, Grid, Typography } from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ChairIcon from "@mui/icons-material/Chair";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ForestIcon from "@mui/icons-material/Forest";
import CategoriesBtnRouting from "../../../../../../components/categories/CategoriesBtnRouting";

function ChineseCategoriesMain() {
  return (
    <Box>
      <Typography variant="h4" sx={{ pb: 1, fontWeight: "600" }}>
        按类别分
      </Typography>
      <Grid container spacing={2} padding={1}>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="动物"
            navigateTo="/chineseCategoriesAnimals"
          >
            <PetsIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="服装"
            navigateTo="/chineseCategoriesClothes"
          >
            <CheckroomIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="食物"
            navigateTo="/chineseCategoriesFood"
          >
            <LocalDiningIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="家具"
            navigateTo="/chineseCategoriesFurniture"
          >
            <ChairIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="地点"
            navigateTo="/chineseCategoriesLocations"
          >
            <LocationCityIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <CategoriesBtnRouting
            btnName="植物"
            navigateTo="/chineseCategoriesPlants"
          >
            <ForestIcon sx={{ color: "black" }} />
          </CategoriesBtnRouting>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChineseCategoriesMain;
