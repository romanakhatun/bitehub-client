import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;
