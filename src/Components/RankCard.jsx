import { Card, Typography, Box } from "@mui/material";

function RankCard({ rank }) {
  return (
    <Card sx={{textAlign: "center", py: 3, }}>
        <Box sx={{ p: 2 , height: "100%", 
           }}>
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ color: rank.color }}>
            {rank.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Tier {rank.tier}
          </Typography>
        </Box>
      
    </Box>
    </Card>
  );
}

export default RankCard;
