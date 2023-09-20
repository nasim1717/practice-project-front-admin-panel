import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Sidebars from "../pages/shared/Sidebar/Sidebars";

const Main = () => {
  return (
    <div>
      <Sidebars>
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </Sidebars>
    </div>
  );
};

export default Main;
