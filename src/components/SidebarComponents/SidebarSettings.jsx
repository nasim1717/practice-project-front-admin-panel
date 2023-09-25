import { useState } from "react";
import { MdOutlineHealthAndSafety, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoMdLock } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsStopwatch } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const SidebarSettings = ({ sidebarOn, sidebarFocus }) => {
  const [settingsCollps, setSettingsCollps] = useState(false);

  return (
    <div className="">
      <div
        className={`ml-3 flex items-center mt-3 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] ${
          settingsCollps && "bg-[#047857]"
        } rounded`}
      >
        <AiOutlineSetting
          className={`text-[20px] ${sidebarOn && !sidebarFocus ? "" : "ml-4"} `}
        ></AiOutlineSetting>
        <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Settings</h2>
        <IoIosArrowDown
          onClick={() => setSettingsCollps(!settingsCollps)}
          className={` ${(sidebarOn && sidebarFocus) || !sidebarOn ? "ml-14" : ""} ${
            settingsCollps ? "block" : "hidden"
          } cursor-pointer`}
        ></IoIosArrowDown>
        <MdOutlineKeyboardArrowRight
          onClick={() => setSettingsCollps(!settingsCollps)}
          className={` ${(sidebarOn && sidebarFocus) || !sidebarOn ? "ml-14" : ""} text-[20px] ${
            !settingsCollps ? "block" : "hidden"
          } cursor-pointer`}
        ></MdOutlineKeyboardArrowRight>
      </div>
      <div
        className={` ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-3"} ml-3 ${
          settingsCollps ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <CgProfile
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></CgProfile>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>User</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <IoMdLock
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></IoMdLock>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Role</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></MdOutlineHealthAndSafety>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Country</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></MdOutlineHealthAndSafety>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>State</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></MdOutlineHealthAndSafety>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>City</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></MdOutlineHealthAndSafety>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Yard</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></MdOutlineHealthAndSafety>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Port</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <BsStopwatch
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
          ></BsStopwatch>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
            Audit Log
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SidebarSettings;
