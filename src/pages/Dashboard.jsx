import { Typography, Co } from "@mui/material";
import { useSelector } from "react-redux";

function Dashboard(){
    const user = useSelector((state) => state.user);
    return (
        <Container sx={{mt: 4}}>
            <Typography variant = "h3" gutterBottom>
                Welcome, {user?.username}
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs = {12} md={4}>
                    <Box sx ={{p: 3, bgcolor: "background.paper", borderRadius: 2}}>
                    <Typography variant="h6">Favourite Role:</Typography>
                    <Typography>Duelist</Typography>

                    </Box>
                </Grid>
                <Grid item xs = {12} md={4}>
                    <Box sx ={{p: 3, bgcolor: "background.paper", borderRadius: 2}}>
                    <Typography variant="h6">Total Matches Played:</Typography>
                    <Typography>150</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;