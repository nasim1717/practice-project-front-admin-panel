import useAuthCheck from "../hooks/useAuthCheck";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const check = useAuthCheck();

  if (check) {
    return children;
  }
  return <div>Loader....</div>;
};

export default AuthProvider;
