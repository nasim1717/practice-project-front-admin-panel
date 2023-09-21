import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { IoIosArrowDown, IoMdLock } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsStopwatch } from "react-icons/bs";

const SidebarSettings = () => {
  const [settingsCollps, setSettingsCollps] = useState(false);
  return (
    <div className="">
      <div
        className={`ml-3 flex items-center mt-3 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] ${
          settingsCollps && "bg-[#047857]"
        } rounded`}
      >
        <AiOutlineSetting className="text-[20px] ml-4"></AiOutlineSetting>
        <h2 className="text-[12px] ml-3">Settings</h2>
        <IoIosArrowDown
          onClick={() => setSettingsCollps(!settingsCollps)}
          className="ml-14"
        ></IoIosArrowDown>
      </div>
      <div className={` ml-3 ${settingsCollps ? "block" : "hidden"}`}>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <CgProfile className="text-[20px] ml-4"></CgProfile>
          <h2 className="text-[12px] ml-3">User</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <IoMdLock className="text-[20px] ml-4"></IoMdLock>
          <h2 className="text-[12px] ml-3">Role</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety className="text-[20px] ml-4"></MdOutlineHealthAndSafety>
          <h2 className="text-[12px] ml-3">Country</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety className="text-[20px] ml-4"></MdOutlineHealthAndSafety>
          <h2 className="text-[12px] ml-3">State</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety className="text-[20px] ml-4"></MdOutlineHealthAndSafety>
          <h2 className="text-[12px] ml-3">City</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety className="text-[20px] ml-4"></MdOutlineHealthAndSafety>
          <h2 className="text-[12px] ml-3">Yard</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety className="text-[20px] ml-4"></MdOutlineHealthAndSafety>
          <h2 className="text-[12px] ml-3">Port</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <BsStopwatch className="text-[20px] ml-4"></BsStopwatch>
          <h2 className="text-[12px] ml-3">Audit Log</h2>
        </div>
      </div>
    </div>
  );
};

export default SidebarSettings;
