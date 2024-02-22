import { Accordion, Box, Typography, useTheme } from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VocabularyA from "./A/VocabularyA";
import VocabularyB from "./A/VocabularyB";
import VocabularyC from "./A/VocavularyC";

function VocabularyMain() {
  const theme = useTheme();
  return (
    <Box>
      <Typography>Vocabulary</Typography>
      <Accordion
        sx={{
          width: "100%",
          border: "solid 1px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          A
        </AccordionSummary>
        <AccordionDetails>
          <VocabularyA />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "100%",
          border: "solid 1px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          B
        </AccordionSummary>
        <AccordionDetails>
          <VocabularyB />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "100%",
          border: "solid 1px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          C
        </AccordionSummary>
        <AccordionDetails>
          <VocabularyC />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default VocabularyMain;
