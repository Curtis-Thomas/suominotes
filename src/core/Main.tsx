import { Accordion, Box, useTheme } from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Notes1 from "../components/Notes1";
import Notes2 from "../components/Notes2";
import Notes3 from "../components/Notes3";

function Main() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
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
          Notes 1
        </AccordionSummary>
        <AccordionDetails>
          <Notes1 />
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
          Notes 2
        </AccordionSummary>
        <AccordionDetails>
          <Notes2 />
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
          Notes 3
        </AccordionSummary>
        <AccordionDetails>
          <Notes3 />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Main;
