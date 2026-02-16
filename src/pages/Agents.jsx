// import { agents } from "../data/agents";
// import { Grid, Container, Typography } from "@mui/material";
// import AgentCard from "../Components/AgentCard";

// function Agents(){



//     return(
//         <Container sx = {{ mt:6}}>
//             <Typography variant="h3" mb= {4} textAlign="center">
//                 Agents
//             </Typography>

//             <Grid container spacing={4}>
//                 {agents.slice(0, 6).map((agent) => (
//                     <Grid item xs={12} sm={6} key={agent.id}>
//                         <AgentCard agent={agent} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     )
// }

// export default Agents;



import { agents } from "../data/agents";
import { Grid, Container, Typography } from "@mui/material";
import AgentCard from "../Components/AgentCard";

function Agents() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h3" mb={4} textAlign="center">
        Agents
      </Typography>

      <Grid container spacing={4}>
        {agents.slice(0, 6).map((agent) => (
          <Grid size={{ xs: 12, sm: 6 }} key={agent.id}>
            <AgentCard agent={agent} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Agents;
