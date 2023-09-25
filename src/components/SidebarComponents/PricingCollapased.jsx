import { TbChartBar } from "react-icons/tb";
import {
  MdAddShoppingCart,
  MdOutlineHealthAndSafety,
  MdAttachMoney,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PricingCollapased = ({ sidebarOn, sidebarFocus }) => {
  const [collapsedPrice, setCollapsedPrice] = useState(false);

  return (
    <div className="">
      <div
        className={`ml-3 flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] ${
          collapsedPrice && "bg-[#047857]"
        } rounded`}
      >
        <MdAddShoppingCart
          className={`text-[20px] ${sidebarOn && !sidebarFocus ? "" : "ml-4"}`}
        ></MdAddShoppingCart>
        <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>Pricing</h2>
        <IoIosArrowDown
          onClick={() => setCollapsedPrice(!collapsedPrice)}
          className={` ${(sidebarOn && sidebarFocus) || !sidebarOn ? "ml-14" : ""} ${
            collapsedPrice ? "block" : "hidden"
          } cursor-pointer`}
        ></IoIosArrowDown>
        <MdOutlineKeyboardArrowRight
          onClick={() => setCollapsedPrice(!collapsedPrice)}
          className={`text-[20px] ${(sidebarOn && sidebarFocus) || !sidebarOn ? "ml-14" : ""} ${
            !collapsedPrice ? "block" : "hidden"
          } cursor-pointer`}
        ></MdOutlineKeyboardArrowRight>
      </div>
      <div
        className={` ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-3"} ${
          collapsedPrice ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <HiMiniPencilSquare
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
          ></HiMiniPencilSquare>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
            Towing Reate
          </h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <TbChartBar
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
          ></TbChartBar>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
            Shiping Rate
          </h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
          ></MdOutlineHealthAndSafety>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
            Clearance Rate
          </h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdAttachMoney
            className={`text-[20px]  ${sidebarOn && !sidebarFocus ? "mx-auto" : "ml-4"}`}
          ></MdAttachMoney>
          <h2 className={`text-[12px] ml-3 ${sidebarOn && !sidebarFocus && "hidden"}`}>
            Prince Inquiry
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PricingCollapased;
