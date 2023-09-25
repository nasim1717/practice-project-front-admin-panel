import { BiFullscreen } from "react-icons/bi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  return (
    <div className="navbar  shadow-4xl rounded-xl ">
      <div className="flex-1 ">
        <a className=" text-[14px] font-medium text-gray-400 ">Galaxy Shipping</a>
      </div>
      <div className="flex gap-x-5">
        <div className=" btn btn-ghost btn-circle flex items-center">
          <h1 data-tooltip-id="my-tooltip-1">
            <MdOutlineLightMode className="text-[23px] text-gray-400"></MdOutlineLightMode>
          </h1>
          <ReactTooltip
            id="my-tooltip-1"
            className="mt-2 btn bg-[#f8fafc] capitalize"
            place="bottom"
            variant="white"
            content="Dark / Light Mode"
          />
        </div>
        <div className="btn btn-ghost btn-circle flex items-center">
          <div className="rounded-md">
            <LiaFlagUsaSolid className="text-[33px] text-red-400 "></LiaFlagUsaSolid>
          </div>
        </div>
        <div className="btn btn-ghost btn-circle flex items-center">
          <BiFullscreen
            data-tooltip-id="my-tooltip-2"
            className="text-[23px] font-bold text-gray-400"
          ></BiFullscreen>
          <ReactTooltip
            id="my-tooltip-2"
            className="mt-2 btn bg-[#f8fafc] capitalize"
            place="bottom"
            variant="white"
            content="Full Scrren"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge bg-red-500 text-[14px] text-[#f8fafc] p-[8px] badge-xs indicator-item">
                0
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge bg-red-500 text-[14px] text-[#f8fafc] p-[8px] badge-xs indicator-item">
              0
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
