// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function ProtectedRoute({ children }) {

//   const user = useSelector((state) => state.auth.user);

//   if (!user) {

//     alert("Please log in to access this page.");
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {

  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  if (!user) {

    // Only show alert if user is trying to access protected route manually
    if (location.pathname !== "/login") {
      alert("Please log in to access this page.");
    }

    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
