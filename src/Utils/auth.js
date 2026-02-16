// import { Token } from "@mui/icons-material";

export const login = (id, password) => {

    console.log("Login fucntion called")
    if(id  && password){
        localStorage.setItem("user", JSON.stringify({ id, password, 
            Token: "dummy-token" }));
        console.log("User logged in successfully");
        return true;
    }
    return false;
}

export const logout = ()=>
{
    localStorage.removeItem('user');
}

export const getUser = ()=>{
    return JSON.parse(localStorage.getItem('user'));

}

export const isAuthenticated = () => {
    return !!getUser();

}