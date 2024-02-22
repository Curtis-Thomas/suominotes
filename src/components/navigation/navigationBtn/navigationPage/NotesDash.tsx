import { Box } from "@mui/material";
import NotesMain from "../../../notes/NotesMain";

function NotesDash() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        width: { xs: "100vw", sm: "100vw", md: "80vw", lg: "80vw", xl: "70vw" },
        margin: "auto",
      }}
    >
      <NotesMain />
    </Box>
  );
}

export default NotesDash;
