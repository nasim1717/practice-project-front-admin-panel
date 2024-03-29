import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userAuth.user);

  if (user) {
    return children;
  }
  return <Navigate to="/auth-pages/login"></Navigate>;
};

export default PrivateRoute;
