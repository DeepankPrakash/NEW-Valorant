import { TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice.js";
import { useDispatch } from "react-redux";


function Login(){

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () =>{

       if (id === "admin" && password === "admin123"){
        dispatch(login({id:"admin", username: "Admin User", token: "dummy-token"}));
        navigate("/");

       }else{
        setError("Invalid credentials.");
      }
    };

    return (

        <>
        <Box sx={{p:5, maxWidth: 400, mx : 'auto'}}>
            <Typography variant ='h4'> Login </Typography>

            {error &&
             <Typography color="error">{error}</Typography>}
            <TextField label="User ID "
            fullWidth margin="normal" value={id} onChange={(e)=>{
                setId(e.target.value);
                setError("");
            } 
        }
            ></TextField>
            <TextField label="Password"
            fullWidth margin="normal" type="password" value={password} onChange={(e)=> {setPassword(e.target.value); setError("");}}
            ></TextField>

            <Button variant='contained' onClick={handleSubmit}>Login</Button>

        </Box>
        </>
    )
}

export default Login;
