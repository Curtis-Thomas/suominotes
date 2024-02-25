import { Box } from "@mui/material";

import BtnRoutingFlashCard from "../navigation/navigationBtn/BtnRoutingFlashCard";

function FlashCardsMain() {
  return (
    <Box>
      <BtnRoutingFlashCard
        description="Learn: "
        title="Animals"
        navigateTo="/flashCardsAnimals"
      />
      {/* <BtnRoutingFlashCard
        description="Learn: "
        title="Food"
        navigateTo="/flashCardsFood"
      />
      <BtnRoutingFlashCard
        description="Learn: "
        title="Clothes"
        navigateTo="/flashCardsClothes"
      />
      <BtnRoutingFlashCard
        description="Learn: "
        title="Nature"
        navigateTo="/flashCardsNature"
      />
      <BtnRoutingFlashCard
        description="Learn: "
        title="Plurals"
        navigateTo="/flashCardsPlurals"
      />
      <BtnRoutingFlashCard
        description="Learn: "
        title="Verb Plurals"
        navigateTo="/flashCardsVerbPlurals"
      />
      <BtnRoutingFlashCard
        description="Learn: "
        title="Professions"
        navigateTo="/flashCardsProfessions"
      /> */}
    </Box>
  );
}

export default FlashCardsMain;
