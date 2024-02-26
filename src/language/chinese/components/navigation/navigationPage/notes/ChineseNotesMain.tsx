import { Accordion, Box, useTheme } from "@mui/material";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChineseNotes1 from "./ChineseNotes1";

function ChineseNotesMain() {
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
          <ChineseNotes1 />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default ChineseNotesMain;
