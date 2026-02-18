import { useState } from "react";
import { Container, TextField, Grid } from "@mui/material";
import { agents } from "../data/agents";
import AgentCard from "../Components/AgentCard";

function Search() {
  const [query, setQuery] = useState("");

  const filtered = agents.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <TextField
        fullWidth
        label="Search Agents"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={3}>
        {filtered.map(agent => (
          <Grid item xs={12} md={4} key={agent.id}>
            <AgentCard agent={agent} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Search;

