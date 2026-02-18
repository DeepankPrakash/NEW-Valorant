import { useState } from "react";
import { Container, Grid, Select, MenuItem } from "@mui/material";
import { agents } from "../data/agents";
import AgentCard from "../Components/AgentCard";

function CompareAgents() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const agent1 = agents.find(a => a.name === first);
  const agent2 = agents.find(a => a.name === second);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Select fullWidth value={first} onChange={(e)=>setFirst(e.target.value)}>
            {agents.map(a => (
              <MenuItem key={a.id} value={a.name}>
                {a.name}
              </MenuItem>
            ))}
          </Select>
          {agent1 && <AgentCard agent={agent1} />}
        </Grid>

        <Grid item xs={12} md={6}>
          <Select fullWidth value={second} onChange={(e)=>setSecond(e.target.value)}>
            {agents.map(a => (
              <MenuItem key={a.id} value={a.name}>
                {a.name}
              </MenuItem>
            ))}
          </Select>
          {agent2 && <AgentCard agent={agent2} />}
        </Grid>

      </Grid>
    </Container>
  );
}

export default CompareAgents;
