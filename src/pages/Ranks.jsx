import { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { ranks } from "../data/ranks";
import RankCard from "../Components/RankCard";

function Ranks() {
  const [rankList] = useState(ranks);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h3" mb={4}>
        Competitive Ranks
      </Typography>

      <Grid container spacing={3}>
        {rankList.map(rank => (
          <Grid item xs={12} sm={6} md={4} key={rank.id}>
            <RankCard rank={rank} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Ranks;
