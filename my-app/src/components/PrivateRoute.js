import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function PrivateRoute({ children }) {
  const { isAdmin, isLoggedIn } = useAuth();
  return (
    isAdmin ? children : <Navigate to="/login" />,
    isLoggedIn ? children : <Navigate to="/home" />
  );
}
