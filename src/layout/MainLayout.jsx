import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import AppHeader from "../Components/AppHeader";

function MainLayout(){
    return(
        <Box>
            <AppHeader />
            <Toolbar />
            <Outlet />
        </Box>
    )
}

export default MainLayout;