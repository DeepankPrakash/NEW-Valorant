// import { Route, Routes } from 'react-router-dom';
// import MainLayout from "./layout/MainLayout";
// import Login from './pages/Login';
// import ProtectedRoute from './Components/ProtectedRoute';
// import Home from './pages/Home';
// import Agents from './pages/Agents';
// import GameModes from './pages/GameModes';
// import Ranks from './pages/Ranks';
// import Maps from './pages/Maps';

// function App(){
//   return(
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/agents" element={<Agents />} />
//         <Route path="/gamemodes" element={<GameModes />} />
//         <Route path="/ranks" element={<Ranks />} />
//         <Route path= "/maps" element={<Maps />} />
//         <Route path="/login" element={<Login />} />
//         <Route path ='/' element = {
//           <ProtectedRoute>
//             <MainLayout />
//           </ProtectedRoute>
//         }></Route>
//       </Route>
//     </Routes>
//   )
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import GameModes from "./pages/GameModes";
import Ranks from "./pages/Ranks";
import Maps from "./pages/Maps";

function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route index element={<Home />} />
        <Route path="agents" element={<Agents />} />
        <Route path="gamemodes" element={<GameModes />} />
        <Route path="ranks" element={<Ranks />} />
        <Route path="maps" element={<Maps />} />
      </Route>

    </Routes>
  );
}

export default App;
