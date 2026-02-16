import { useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import {maps} from "../data/maps";


function Maps(){
    const [maplist] = useState(maps);

    // useState(() => {
    //     console.log(maplist);

    // });


    return(
        <Container sx={{ mt: 6 }}>
            <Typography variant = 'h3' mb ={4} > Maps </Typography>
            <Grid container spacing={3}>
                {maplist.map((map) => (
                    <Grid item xs={12} sm={6} md={4} key={map.id}>
                        <Box sx={{border: "1px solid #ccc", borderRadius: 2, p: 2, height: "100%"}}>
                            <Typography variant="h5" fontWeight={700}>{map.name}</Typography>
                            <Typography variant="subtitle1" color="text.secondary">{map.location}</Typography>
                            <Typography variant="body2" color="text.secondary" mt={1}>{map.description}</Typography>
                            <Typography variant="caption" color="text.secondary" mt={2}>Sites: {map.sites}</Typography>
                        </Box>
                  </Grid>
                ))}
            </Grid>
        </Container>
        
    )
}

export default Maps;