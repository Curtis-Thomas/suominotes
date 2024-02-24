import { Accordion, Box, useTheme } from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Notes2 from "./Notes2";
import Notes3 from "./Notes3";
import Notes1 from "./Notes1";

function NotesMain() {
  const theme = useTheme();
  return (
    <Box>
      <Accordion
        sx={{
          width: "100%",
          border: "solid 1px",
          mb: 1,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "white", height: "10vh" }} />
          }
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
          mb: 1,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "white", height: "10vh" }} />
          }
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
          mb: 1,
          border: "solid 1px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "white", height: "10vh" }} />
          }
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

export default NotesMain;
