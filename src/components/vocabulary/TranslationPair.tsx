import { Grid, Typography } from "@mui/material";

interface TranslationPairProps {
  word: string;
  translation: string;
}

function TranslationPair({ word, translation }: TranslationPairProps) {
  return (
    <Grid sx={{ borderBottom: "1px solid" }} container>
      <Grid sx={{ borderRight: "1px solid" }} item xs={6}>
        <Typography sx={{ textAlign: "center" }} color="white" variant="h6">
          {word}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography sx={{ textAlign: "center" }} color="white" variant="h6">
          {translation}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TranslationPair;
