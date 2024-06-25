import React from "react";
import {
  FaBell,
  FaCompress,
  FaEnvelope,
  FaSearch,
  FaSlidersH,
} from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";

const DashBoardHeader = () => {
  return (
    <div className="flex w-[100%] justify-around  items-center  py-5 px-2">
      <div className="flex items-center gap-10 w-full sm:w-[50%] ">
        <div className="bg-white shadow-md flex h-10 px-2 rounded items-center">
          <input
            type="text"
            placeholder="search here"
            className="h-full outline-none w-[400px] bg-transparent border-none text-slate-500"
          />
          <FaSearch className="text-slate-600" />
        </div>
        <button className="px-3 py-2 text-[15px] w-[100px] bg-white shadow-md rounded-[5px]">
          Quick Links
        </button>
      </div>
      <div className="flex w-full justify-around items-center  sm:w-[30%] ">
        <div className="flex gap-10">
          <div>
            <FaCompress className="text-2xl cursor-pointer hover:text-sky-600 text-slate-600" />
          </div>
          <div>
            <MdGTranslate className="text-2xl cursor-pointer hover:text-sky-600 text-slate-600" />
          </div>
          <div>
            <FaEnvelope className="text-2xl cursor-pointer hover:text-sky-600 text-slate-600" />
          </div>
          <div className="relative">
            <FaBell className="text-2xl cursor-pointer hover:text-sky-600 text-slate-600" />
            <div className="h-[8px] w-[8px] bg-green-500 rounded-full absolute -top-2 right-0"></div>
          </div>
        </div>
        <div className="flex ml-10 items-center gap-5">
          <div>
            <p className="text-[12px] font-semibold text-right text-slate-600">
              Username
            </p>
            <span className="text-[12px] text-slate-400 text-right">Admin</span>
          </div>
          <img
            className="h-[40px] w-[40px] rounded-full cursor-pointer"
            src="https://th.bing.com/th?id=OIP.mEma0ZcipymPAHIYoIuFiAHaJa&w=221&h=281&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          />
          <div>
            <FaSlidersH className="text-2xl cursor-pointer hover:text-sky-600 text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
