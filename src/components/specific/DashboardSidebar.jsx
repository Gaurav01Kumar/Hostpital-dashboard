import React, { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { FaCode, FaNeos } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  MdFormatListBulleted,
  MdOutlineSecurity,
  MdStorage,
} from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
const DashboardSidebar = () => {
  const { isToogled } = useContext(SidebarContext);
  console.log(isToogled)

  return (
    <div
      className={
        isToogled
          ? " fixed transition-all duration-300 top-14.1 sidebar left-5 sm:w-[130px] rounded-[20px] xs:max-w-[240px] w-[240px]  px-4  bg-blue-900  py-3 h-[90%]   z-30 "
          : "xs:max-w-[0px]  hidden  fixed left-0 transition-all duration-500"
      }
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col items-center my-2">
          <div className="border-blue-400">
            <FaNeos className="bg-white w-[30px] text-xl text-center text-blue-800 font-bold" />
          </div>
          <h1 className="text-white font-bold text-[20px] my-1">NEPTUNE</h1>
        </div>
        <Link
          className="flex flex-col text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/dashboard"}
        >
          <AiOutlineDashboard className="text-2xl font-bold " />
          <p>Dashboard</p>
        </Link>
        <Link
          className="flex flex-col w-[100px] text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/dashboard/registration"}
        >
          <MdStorage className="text-2xl font-bold " />
          <p>Registration</p>
        </Link>
        <Link
          className="flex flex-col w-[100px] text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/dashboard/report"}
        >
          <MdOutlineSecurity className="text-2xl font-bold " />
          <p>Report</p>
        </Link>
        <Link
          className="flex flex-col w-[100px] text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/"}
        >
          <RiPagesFill className="text-2xl font-bold " />
          <p>Other pages</p>
        </Link>
        <Link
          className="flex flex-col w-[100px] text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/"}
        >
          <FaCode className="text-2xl font-bold " />
          <p>Basic UI</p>
        </Link>
        <Link
          className="flex flex-col w-[100px] text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/"}
        >
          <FaCode className="text-2xl font-bold " />
          <p> UI Element</p>
        </Link>
        <Link
          className="flex flex-col w-[100px] text-white hover:bg-slate-500 p-2 active:bg-slate-500 items-center text-center"
          to={"/"}
        >
          <MdFormatListBulleted className="text-2xl font-bold " />
          <p>Basic UI</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
