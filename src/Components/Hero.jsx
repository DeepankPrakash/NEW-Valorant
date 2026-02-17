import { Box, Typography, Button, Container, Stack, Tooltip } from "@mui/material";
import valorant from "../assets/valorant.jpg";
import { Link } from "react-router-dom";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Footer from "./Footer";
import MapIcon from '@mui/icons-material/Map';
import StarIcon from '@mui/icons-material/Star';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Hero() {
  return (

    <>
     <Box sx={{minHeight: "80vh",display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `url(${valorant})`,
      backgroundSize: "cover", backgroundPosition: "center", textAlign: "center",}}></Box>
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <Typography variant="h2" fontWeight={900} color="white">
            DEFY THE LIMITS
          </Typography>
          <Typography variant="h5" color="white" mb={4} justifyContent="center" align="center">
            A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities. Join the fight and defy the limits of your skills.

            <Typography variant="caption" sx={{ color: '#ff4655', fontStyle: 'italic', mt: 2, display: 'block' }}>
              P.S. Mind f*** warning: this game is highly addictive and may cause you to lose your mind. Play at your own risk!
            </Typography>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" size="large">
              Play Free
            </Button>

            <Button variant="outlined" size="large" sx={{ color: "white", borderColor: "white" }}>
              Watch Trailer
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Stack spacing={2} sx={{ mt: 8, mb: 4, alignItems: "center" }}>
        <Typography variant="h4" fontWeight={700}>
          Explore the World of Valorant
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" maxWidth="600px">
          Dive into the rich lore, discover unique agents, and master various game modes. Whether you're a casual player or a competitive gamer, Valorant has something for everyone.
        </Typography>
      </Stack>

      
      
      <Stack direction='row' spacing={2} alignItems="center" justifyContent="center">
      <Button  component={Link} to="/agents" startIcon={<MilitaryTechIcon />} sx={{ mt: 4, mx: "auto", '&:hover': 
        {transition: '0.2s', transform: 'scale(1.13)'}
       }} variant="contained" size="large">
        Agents</Button>
      <Button  component={Link} to="/Gamemodes" startIcon={<SportsEsportsIcon />} sx={{ mt: 4, mx: "auto", '&:hover': 
        {transition: '0.2s', transform: 'scale(1.13)'}
       }} variant="contained" size="large">
        Game Modes
      </Button>
      <Button  component={Link} to="/ranks" startIcon={<StarIcon />} sx={{ mt: 4, mx: "auto", '&:hover': 
        {transition: '0.2s', transform: 'scale(1.13)'}
       }} variant="contained" size="large">
        Ranks
      </Button>
      <Button  component={Link} to="/maps" startIcon={<MapIcon />} sx={{ mt: 4, mx: "auto", '&:hover': 
        {transition: '0.2s', transform: 'scale(1.13)'}
       }} variant="contained" size="large">
        Maps
      </Button>
     </Stack>
      
      <Stack spacing={2} sx={{ mt: 1, mb: 1, alignItems: "center" }}>
    <Tooltip title="Coming soon...This feature is currently under development and will be available in a future update. Thank you for your patience :)" placement="bottom"> 
        <span>
          <Button disabled>Valorant Premium</Button>
         </span>
    </Tooltip>
      </Stack>

     <Footer />
    </>
  );
}

export default Hero;
