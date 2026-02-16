// import { Card, Typography, Stack, Box } from "@mui/material";
// // import Viper from "../assets/viper.jpg";

import {  Box,Card ,CardContent, CardMedia, Typography } from "@mui/material";

// function AgentCard({ agent }) {
//   return (
//     // ADD styled container for whole card component with padding to give some space between the card and the grid container
//     // styledcontainer

//     <Card sx={{ height: "100%" }}>
//           <Box sx={{ p: 3, height: "100%", 
//            }}>
//       <Stack spacing={1}>


//         <Typography variant="h5" fontWeight={700}>
//           {agent.name}
//         </Typography>

        

//         <Typography variant="body2" color="text.secondary">
//           {agent.origin}
//         </Typography>

//         <Typography variant="body2" sx={{ mt: 1 }}>
//           {agent.description}
//         </Typography>
//       </Stack>
//       </Box>
//     </Card>

    
//   );
// }

// export default AgentCard;

// import { Card, Typography, CardContent, CardMedia, } from "@mui/material";

function AgentCard({ agent }) {
  return(
    <Card sx={{ borderRadius: 3}}>
      <CardMedia
        component="img"
        height="300"
        image={agent.image}
        alt={agent.name}
      />

    <CardContent>
      <Typography variant="h5" >
        {agent.name}
      </Typography>

      <Typography variant="caption" color="text.secondary">
        {agent.role}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {agent.description}
      </Typography>


       
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Abilities:
          </Typography>

          {agent.abilities.map((ability, index) => (
            <Box key={index} sx={{ mt: 1 }}>
              <Typography variant="body2" fontWeight="bold">
                {ability.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {ability.description}
              </Typography>
            </Box>
          ))}
        </Box>
    </CardContent>


    </Card>
  )
}


export default AgentCard;