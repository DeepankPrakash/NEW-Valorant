// import {AppBar,Toolbar,Typography, Button, Box, IconButton,} from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { getUser } from "../Utils/auth";




// function AppHeader() {

//   const [User, setUser]= useState(null);

//   const navigate = useNavigate();


//   const user = getUser();


//   const handlelogin = (event)=> {

//     setUser(event.currentTarget);
//   }

//   const handleClose = () => {
//     setUser(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleClose();
//     navigate("/login");

//   }

//   return (
//     <AppBar
//       elevation={0}
//       sx={{
//         bgcolor: "rgba(0, 0, 0, 0.8)",
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       <Toolbar >
//         <IconButton
//           size="large"
//           // edge="start"
//           color="inherit"
//           onClick={handlelogin}
//           sx={{ mr: 2 }}
//         >
        
//         <AccountCircleIcon />
//         </IconButton>
//         {/* <Typography variant="h6">User Data</Typography> */}
//         <Typography variant="h6" component="div" justifyContent="center" align='center' sx={{ flexGrow: 1, fontWeight: 700 }}>
//           VALORANT
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             borderRadius: "999px",
//             fontWeight: "bold",
//             px: 3,
//           }}
//         >
//          Play Now
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default AppHeader;

import {AppBar,Toolbar,Typography,Button,IconButton,Tooltip,Snackbar,Alert} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function AppHeader() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const user = useSelector((state) => state.auth.user);

 
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAccountClick = () => {

    if (!user) { navigate("/login");
      return;
    }

    const confirmLogout = window.confirm("Logout?");

    if (confirmLogout) { dispatch(logout());
        setOpenSnackbar(true);
        navigate("/login");
      }
  };

  return (
    <>
      <AppBar elevation={0}
        sx={{ bgcolor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)",
        }}
      >
        <Toolbar>
          <Tooltip title={user ? `Logged in as: ${user.id}` : ""}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleAccountClick}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>


          <Button
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 900,
              fontSize: "1.3rem",
              color: "white"
            }}
            onClick={() => navigate("/")}
          >
            VALORANT
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              fontWeight: "bold",
              px: 3,
            }}
          >
            Play Now
          </Button>

        </Toolbar>
      </AppBar>

    
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Logged out successfully
        </Alert>
      </Snackbar>
    </>
  );
}

export default AppHeader;
