import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Sidebars from "../pages/shared/Sidebar/Sidebars";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Sidebars className="">
        <div className="">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer className=""></Footer>
        </div>
      </Sidebars>
    </div>
  );
};

export default Main;
