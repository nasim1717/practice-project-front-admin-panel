import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Customers/Customers";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/customers",
        element: (
          <PrivateRoute>
            <Customers></Customers>
          </PrivateRoute>
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
