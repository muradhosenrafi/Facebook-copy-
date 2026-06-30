import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const auth = getAuth();

  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;