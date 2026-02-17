import { useEffect, useState } from "react";
import { Container, Typography, Card, Grid, Stack, Chip , Box} from "@mui/material";
import { modes } from "../data/modes";
import GameModeImg from "../assets/GameModeBack.jpg";

function GameModes() {
  const [gameModes, setGameModes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setGameModes(modes);
    }, 500);
  }, []);

  return (

  // <Grid>
    <Box sx={{ mt: 6, backgroundImage: `url(${GameModeImg})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
      <Typography variant="h3" mb={4} sx={{color: "white"}}>
        Game Modes
      </Typography>

      <Stack spacing={3} sx={{backgroundColor: "rgba(0, 0, 0, 0.8)", p: 3, borderRadius: 2}}>
      <Container>
      <Grid container spacing={3}>
        {gameModes.map((mode) => (
          <Grid item xs={12} sm={6} md={4} key={mode.id}>
            <Card
              sx={{
                height: "100%",
              }}
            >

              <Box sx={{ p: 2, height: "100%" }}>
              <Stack spacing={1}>
                <Typography variant="h4">{mode.icon}</Typography>
                <Typography variant="h5" fontWeight={700}>
                  {mode.name}
                </Typography>
                <Chip
                  label={mode.players}
                  color="primary"
                  size="small"
                  sx={{ width: "fit-content" }}
                />
                <Typography variant="body2" color="text.secondary">
                  {mode.description}
                </Typography>
              </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      </Container>
      </Stack>
    </Box>
  // </Grid>
  );
}

export default GameModes;
