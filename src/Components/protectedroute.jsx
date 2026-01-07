import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedinuser"));

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
