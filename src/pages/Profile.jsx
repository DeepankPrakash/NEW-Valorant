import { Box, Typography , Container} from "@mui/material";
import { useSelector } from "react-redux";

function Profile(){
    const user = useSelector((state) => state.auth.user);

    return (
        <Container sx= {{ mt : 4}}>
            <Typography variant = "h4">Profile</Typography>
            <Box sx={{mt:3}}>
                <Typography variant="h6">Username: {user?.username}</Typography>
                <Typography variant="h6">Token: {user?.token}</Typography>

            </Box>
        </Container>

    )

}

export default Profile;