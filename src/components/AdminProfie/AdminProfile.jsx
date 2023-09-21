import adminPic from "../../assets/adminpic.jpg";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { MdOutlineLightMode } from "react-icons/md";

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState(false);

  return (
    <>
      <div>
        <div className={` ${adminProfile ? "px-2" : ""}`}>
          <div
            onClick={() => setAdminProfile(!adminProfile)}
            className="flex gap-2 items-center bg-[#047857] pl-4 pt-3 pb-2 rounded"
          >
            <img src={adminPic} alt="" className="w-[32px] h-[34px] rounded-md" />
            <div className="leading-[16px]  font-bold text-[#d1d5db]">
              <h2 className="text-[13px]">izharulhak</h2>
              <h2 className="text-[10px] decoration-dotted underline">Mastar Admin</h2>
            </div>
          </div>
          <div className={adminProfile ? "block" : "hidden"}>
            {/* profile */}
            <div className="flex items-center  my-3 py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
              <CgProfile className="text-[20px] ml-3"></CgProfile>
              <h2 className="text-[12px] ml-3">Profile</h2>
            </div>
            {/* rounded */}
            <div className="flex items-center  my-3 py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
              <MdOutlineLightMode className="text-[20px] ml-3"></MdOutlineLightMode>
              <h2 className="text-[12px] ml-3">Light Mode</h2>
            </div>
          </div>
        </div>
        <div className={adminProfile ? "block" : "hidden"}>
          <hr className=" border-[#047857]  border-[1px]  mb-2" />
          <div className="px-2">
            <div className="flex items-center  my-3 py-2 text-[#f1f5f9] font-bold hover:bg-[#047857] rounded">
              <HiArrowRightOnRectangle className="text-[20px] ml-3"></HiArrowRightOnRectangle>
              <h2 className="text-[12px] ml-3">Logout</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
