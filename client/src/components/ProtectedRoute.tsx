import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  if (!currentUser) {
    // Redirect to login page and preserve the attempted URL
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
