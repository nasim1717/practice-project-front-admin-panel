import logo from "../../../assets/logo.jpg";
import { BiArrowToLeft } from "react-icons/bi";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile, CgRedo } from "react-icons/cg";
import { MdApartment } from "react-icons/md";
import { RiTaxiLine } from "react-icons/ri";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsTruck } from "react-icons/bs";
import SidebarSettings from "../../../components/SidebarComponents/SidebarSettings";
import PricingCollapased from "../../../components/SidebarComponents/PricingCollapased";
import AdminProfile from "../../../components/AdminProfie/AdminProfile";

// eslint-disable-next-line react/prop-types
const Sidebars = ({ children }) => {
  return (
    <div className="flex pt-4 ml-3 h-[100vh]">
      {/* sidebar start */}
      <div className="bg-[#065f46] basis-[200px] grid grid-cols-1 rounded-md">
        <div className="mt-3 flex items-center">
          <div className="w-[100px] ml-3">
            <img src={logo} alt="" className="w-full" />
          </div>
          <BiArrowToLeft className="ml-10 text-[30px] text-[#f1f5f9]"></BiArrowToLeft>
        </div>
        <div className="pb-14  overflow-y-scroll example">
          <div className="flex items-center mt-8 mx-[10px] py-2 text-[#f1f5f9] font-bold bg-[#047857] rounded">
            <TbLayoutDashboard className="text-[20px] ml-4"></TbLayoutDashboard>
            <h2 className="text-[12px] ml-3">Dashboard</h2>
          </div>
          <hr className="mt-[14px] border-[#047857] border-[1px]" />
          {/* customer */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <CgProfile className="text-[20px] ml-4"></CgProfile>
            <h2 className="text-[12px] ml-3">Customers</h2>
          </div>
          {/* consignee */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <MdApartment className="text-[20px] ml-4"></MdApartment>
            <h2 className="text-[12px] ml-3">Consignee</h2>
          </div>
          {/* autos */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <RiTaxiLine className="text-[20px] ml-4"></RiTaxiLine>
            <h2 className="text-[12px] ml-3">Autos</h2>
          </div>
          {/* export */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <HiArrowsUpDown className="text-[20px] ml-4"></HiArrowsUpDown>
            <h2 className="text-[12px] ml-3">Export</h2>
          </div>
          {/* containers */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <BsTruck className="text-[20px] ml-4"></BsTruck>
            <h2 className="text-[12px] ml-3">Containers</h2>
          </div>
          {/* pricing */}
          <PricingCollapased></PricingCollapased>
          {/* pricing end */}

          {/* load plan */}
          <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
            <CgRedo className="text-[20px] ml-4"></CgRedo>
            <h2 className="text-[12px] ml-3">Load Plan</h2>
          </div>
          {/* load plan end */}
          <hr className="mt-[14px] border-[#047857] border-[1px]" />
          <h2 className="text-[12px] text-[#a8a29e] font-bold ml-8 mt-3">Settings</h2>
          {/* settings collapsed */}
          <SidebarSettings></SidebarSettings>
          {/* setting collapse end */}
        </div>
        <div className="mt-4">
          <hr className=" border-[#a8a29e]  border-[1px] w-[95px] mb-0 mx-auto" />
          <div className={` `}>
            <AdminProfile></AdminProfile>
          </div>
        </div>
      </div>

      {/* sidebar end */}
      <main className="ml-6">{children}</main>
    </div>
  );
};

export default Sidebars;
