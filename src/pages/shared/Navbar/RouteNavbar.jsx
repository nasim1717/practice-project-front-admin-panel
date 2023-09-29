import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RouteNavbar = ({ children }) => {
  return (
    <div className="navbar bg-base-100 shadow-4xl mt-4 rounded-md">
      <div className="">
        <Link to="/">
          {" "}
          <LiaHomeSolid className="text-[22px] ml-4"></LiaHomeSolid>
        </Link>

        <MdOutlineKeyboardArrowRight className="ml-2"></MdOutlineKeyboardArrowRight>
        <h2 className="pl-2 text-gray-400">{children}</h2>
      </div>
    </div>
  );
};

export default RouteNavbar;
