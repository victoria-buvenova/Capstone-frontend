import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export function PrivateRoute({ children }) {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login" />;
}
