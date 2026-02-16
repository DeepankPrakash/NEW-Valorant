import { TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Utils/auth";
import { useDispatch } from "react-redux";

function Login(){

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        // e.preventDefault();
        // const success = login(id, password);
        // if(success){
        //     navigate("/");
        // }
        dispatch(login({
            id, password, token : "dummy-token"
        }))
        navigate("/");
    }

    return (
        <Box sx={{p:5, maxWidth: 400, mx : 'auto'}}>
            <Typography variant ='h4'> Login </Typography>
            <TextField label="User ID "
            fullWidth margin="normal" onChange={(e)=> setId(e.target.value)}
            ></TextField>
            <TextField label="Password"
            fullWidth margin="normal" type="password" onChange={(e)=> setPassword(e.target.value)}
            ></TextField>

            <Button variant='contained' onClick={handleSubmit}>Login</Button>

        </Box>

    )
}

export default Login;