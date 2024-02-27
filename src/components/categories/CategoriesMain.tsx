import { Box, Grid } from "@mui/material";
import CategoriesBtnRouting from "./CategoriesBtnRouting";

function CategoriesMain() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Animals" navigateTo="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Food" navigateTo="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Locations" navigateTo="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Plants" navigateTo="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Clothes" navigateTo="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <CategoriesBtnRouting btnName="Furniture" navigateTo="" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CategoriesMain;
