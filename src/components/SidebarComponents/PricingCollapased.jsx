import { TbChartBar } from "react-icons/tb";
import { MdAddShoppingCart, MdOutlineHealthAndSafety, MdAttachMoney } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const PricingCollapased = () => {
  const [collapsedPrice, setCollapsedPrice] = useState(false);

  return (
    <div className="">
      <div
        className={`ml-3 flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] ${
          collapsedPrice && "bg-[#047857]"
        } rounded`}
      >
        <MdAddShoppingCart className="text-[20px] ml-4"></MdAddShoppingCart>
        <h2 className="text-[12px] ml-3">Pricing</h2>
        <IoIosArrowDown
          onClick={() => setCollapsedPrice(!collapsedPrice)}
          className="ml-7"
        ></IoIosArrowDown>
      </div>
      <div className={` ml-3 ${collapsedPrice ? "block" : "hidden"}`}>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <HiMiniPencilSquare className="text-[20px] ml-4"></HiMiniPencilSquare>
          <h2 className="text-[12px] ml-3">Towing Reate</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <TbChartBar className="text-[20px] ml-4"></TbChartBar>
          <h2 className="text-[12px] ml-3">Shiping Rate</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdOutlineHealthAndSafety className="text-[20px] ml-4"></MdOutlineHealthAndSafety>
          <h2 className="text-[12px] ml-3">Clearance Rate</h2>
        </div>
        <div className="flex items-center mt-5 mx-[10px] py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
          <MdAttachMoney className="text-[20px] ml-4"></MdAttachMoney>
          <h2 className="text-[12px] ml-3">Prince Inquiry</h2>
        </div>
      </div>
    </div>
  );
};

export default PricingCollapased;
