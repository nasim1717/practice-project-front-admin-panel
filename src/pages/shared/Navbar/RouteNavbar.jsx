import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const RouteNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-4xl mt-4 rounded-md">
      <div className="">
        <LiaHomeSolid className="text-[22px] ml-4"></LiaHomeSolid>
        <MdOutlineKeyboardArrowRight className="ml-2"></MdOutlineKeyboardArrowRight>
      </div>
    </div>
  );
};

export default RouteNavbar;
