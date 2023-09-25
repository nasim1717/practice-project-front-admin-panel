import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Customers/Customers";
import PrivaeRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivaeRoute>
        <Main></Main>
      </PrivaeRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivaeRoute>
            <Dashboard></Dashboard>
          </PrivaeRoute>
        ),
      },
      {
        path: "/customers",
        element: (
          <PrivaeRoute>
            <Customers></Customers>
          </PrivaeRoute>
        ),
      },
    ],
  },
  {
    path: "/auth-pages/login",
    element: <Login></Login>,
  },
]);

export default router;
