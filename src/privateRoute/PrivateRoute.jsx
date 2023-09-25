import useAuthCheck from "../hooks/useAuthCheck";

// eslint-disable-next-line react/prop-types
const PrivaeRoute = ({ children }) => {
  const authcheck = useAuthCheck();

  if (authcheck) {
    return children;
  }
  return <div>Loader...</div>;
};

export default PrivaeRoute;
