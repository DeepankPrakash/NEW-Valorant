import { useParams } from "react-router-dom";
import {Container, Typography, Box, Grid, Chip, LinearProgress } from "@mui/material";

import { agents } from "../data/agents";
import AgentCard from "../Components/AgentCard";

function AgentDetails() {
  const { agentName } = useParams();
  const agent = agents.find(
    (a) => a.name.toLowerCase() === agentName
  );

  if (!agent) {
    return (
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4">
          Agent Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{height: 400, backgroundImage: `url(${agent.image})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: 3, display: "flex",
             alignItems: "flex-end",
             p: 4,
             mb: 5,
             backgroundColor: "rgba(0,0,0,0.6)",
             backgroundBlendMode: "darken"
            }}>
        <Typography variant="h2" fontWeight="bold">
          {agent.name}
        </Typography>
      </Box>
      <Grid container spacing={4} mb={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" mb={2}>
            Overview
          </Typography>

          <Chip label={agent.role} color="primary" sx={{ mb: 2 }} />

          <Typography>
            <strong>Origin:</strong> {agent.origin}
          </Typography>

          <Typography mt={2}>
            {agent.description}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h4" mb={3}>
        Abilities
      </Typography>

      <Grid container spacing={3} mb={6}>
        {agent.abilities.map((ability, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper", transition: "0.3s", "&:hover": { transform: "scale(1.03)"}}}>
              <Typography variant="h6">
                {ability.name}
              </Typography>
              <Typography variant="body2" mt={1}>
                {ability.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" mb={2}>
        Difficulty
      </Typography>

    <Box sx={{ mb: 6 }}>
        <Chip 
    label={agent.difficulty}
    color={agent.difficulty === "Easy" ? "success" : agent.difficulty === "Medium" ? "warning" : "error"} />
    </Box>

      <Typography variant="h4" mb={3}>
        Related Agents
      </Typography>

      <Grid container spacing={3}>
        {agents
          .filter(
            (a) =>
              a.role === agent.role &&
              a.name !== agent.name
          )
          .slice(0, 3)
          .map((related) => (
            <Grid item xs={12} md={4} key={related.id}>
              <AgentCard agent={related} />
            </Grid>
          ))}
      </Grid>

    </Container>
  );
}

export default AgentDetails;
