import logo from "../../../assets/logo.jpg";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile, CgRedo } from "react-icons/cg";
import { MdApartment } from "react-icons/md";
import { RiTaxiLine } from "react-icons/ri";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsTruck } from "react-icons/bs";
import SidebarSettings from "../../../components/SidebarComponents/SidebarSettings";
import PricingCollapased from "../../../components/SidebarComponents/PricingCollapased";
import AdminProfile from "../../../components/AdminProfie/AdminProfile";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Sidebars = ({ children }) => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const [sidebarFocus, setSidebarFoucs] = useState(false);
  console.log("sidebaron-->", sidebarFocus);

  return (
    <div className={`flex pt-4 ml-3 h-[100vh] `}>
      {/* sidebar start */}
      <div
        onMouseEnter={() => setSidebarFoucs(true)}
        onMouseLeave={() => setSidebarFoucs(false)}
        className={`bg-[#065f46] ${
          sidebarOn ? "basis-[65px] hover:basis-[200px]" : "basis-[200px]"
        } grid grid-cols-1  rounded-md`}
      >
        <div className="mt-3 flex items-center">
          <div className={`w-[100px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
            <img src={logo} alt="" className="w-full" />
          </div>
          <BiArrowToLeft
            onClick={() => setSidebarOn(!sidebarOn)}
            className={`ml-10 text-[30px] cursor-pointer text-[#f1f5f9] ${
              (!sidebarOn && sidebarFocus) || !sidebarOn ? "block" : "hidden"
            } `}
          ></BiArrowToLeft>
          <BiArrowToRight
            onClick={() => setSidebarOn(!sidebarOn)}
            className={`mx-auto text-[30px] cursor-pointer text-[#f1f5f9] ${
              (sidebarOn && !sidebarFocus) || sidebarOn ? "block" : "hidden"
            } `}
          ></BiArrowToRight>
        </div>
        <div className="pb-14  overflow-y-scroll example">
          <div
            className={`flex items-center mt-8  ${
              sidebarOn && !sidebarFocus ? "mx-[9px] " : "mx-[10px]"
            } py-2 text-[#f1f5f9] font-bold bg-[#047857] rounded`}
          >
            <TbLayoutDashboard
              className={`text-[20px] ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"} `}
            ></TbLayoutDashboard>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus ? "hidden" : "block"}`}>
              Dashboard
            </h2>
          </div>
          <hr className="mt-[14px] border-[#047857] border-[1px]" />
          {/* customer */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <CgProfile
              className={`text-[20px] ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
            ></CgProfile>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
              Customers
            </h2>
          </div>
          {/* consignee */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <MdApartment
              className={`text-[20px] ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
            ></MdApartment>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
              Consignee
            </h2>
          </div>
          {/* autos */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <RiTaxiLine
              className={`text-[20px] ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
            ></RiTaxiLine>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Autos</h2>
          </div>
          {/* export */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <HiArrowsUpDown
              className={`text-[20px] ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
            ></HiArrowsUpDown>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Export</h2>
          </div>
          {/* containers */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <BsTruck
              className={`text-[20px] ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
            ></BsTruck>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
              Containers
            </h2>
          </div>
          {/* pricing */}
          <PricingCollapased sidebarOn={sidebarOn} sidebarFocus={sidebarFocus}></PricingCollapased>
          {/* pricing end */}

          {/* load plan */}
          <div
            className={`flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded`}
          >
            <CgRedo
              className={`text-[22px]  ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
            ></CgRedo>
            <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
              Load Plan
            </h2>
          </div>
          {/* load plan end */}
          <hr className="mt-[14px] border-[#047857] border-[1px]" />
          <h2
            className={`text-[12px] text-[#a8a29e] font-bold ml-8 mt-3 ${
              sidebarOn && !sidebarFocus && "hidden"
            }`}
          >
            Settings
          </h2>
          {/* settings collapsed */}
          <SidebarSettings sidebarOn={sidebarOn} sidebarFocus={sidebarFocus}></SidebarSettings>
          {/* setting collapse end */}
        </div>
        <div className={`${sidebarOn && !sidebarFocus ? "mt-1" : "mt-4"}`}>
          <hr
            className={`border-[#a8a29e]  border-[1px] w-1/2
            } mb-0 mx-auto`}
          />
          <div className={` `}>
            <AdminProfile sidebarOn={sidebarOn} sidebarFocus={sidebarFocus}></AdminProfile>
          </div>
        </div>
      </div>

      {/* sidebar end */}
      <main className={`ml-6 ${sidebarOn ? "" : ""}`}>{children}</main>
    </div>
  );
};

export default Sidebars;
