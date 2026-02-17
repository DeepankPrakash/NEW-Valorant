// import { useState } from "react";
import { Container, Typography, Grid, Box, Stack  } from "@mui/material";
import MapImage from "../assets/mapimage.jpg";
import { maps } from "../data/maps";


function Maps(){
    // const [maplist] = useState(maps);

    // // useState(() => {
    // //     console.log(maplist);

    // // });
 
    return(
        
        <Box sx={{ mt: 6, backgroundImage: `url(${MapImage})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
            <Container>      
                 <Typography variant = 'h3' mb ={4} > Maps </Typography>
            <Stack spacing={3} sx={{backgroundColor: "rgba(0, 0, 0, 0.8)", p: 3, borderRadius: 2}}>
            <Grid container spacing={3}>
                {maps.map((map) => (
                    <Grid item xs={12} sm={6} md={4} key={map.id}>
                        <Box sx={{border: "1px solid #b40606", borderRadius: 2, p: 2, height: "100%"}}>
                            <Typography variant="h5" fontWeight={700}>{map.name}</Typography>
                            <Typography variant="subtitle1" color="text.secondary">{map.location}</Typography>
                            <Typography variant="body2" color="text.secondary" mt={1}>{map.description}</Typography>
                            <Typography variant="caption" color="text.secondary" mt={2}>Sites: {map.sites}</Typography>
                        </Box>
                  </Grid>
                ))}
            </Grid>
            </Stack>
            </Container>
     
        </Box>
        
    )
}

export default Maps;
