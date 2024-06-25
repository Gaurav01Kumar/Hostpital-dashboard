import React, { useContext } from "react";
import {
  FaAlignJustify,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaCloudMoonRain,
  FaDonate,
  FaFilter,
  FaMoon,
  FaRegMoon,
  FaShoppingCart,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { WiCloudyWindy, WiRainWind } from "react-icons/wi";
import { MdOutlineWbSunny, MdWaterDrop } from "react-icons/md";
import { SidebarContext } from "../context/SidebarContext";
import { RiLoopLeftLine } from "react-icons/ri";
import { dashBoardCardData } from "../constants";
import { working } from "../assets";
import ShadowCard from "../components/shared/ShadowCard";
const DashBoard = () => {
  const { toggle, isToogled } = useContext(SidebarContext);

  return (
    <div
      className={
        isToogled
          ? "w-[83%]  ml-0 sm:ml-[11%] mt-2 h-full px-2 transition-all duration-300"
          : " w-[99%] sm:ml-1 px-5 transition-all duration-300"
      }
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 py-2">
          {isToogled ? (
            <FaTimes
              onClick={toggle}
              className="text-xl text-slate-700 cursor-pointer font-bold"
            />
          ) : (
            <FaAlignJustify
              onClick={toggle}
              className="text-xl text-slate-700 cursor-pointer font-bold "
            />
          )}
          <p className="text-slate-700 font-semibold text-xl">DashBoard2</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center">
            <input
              type="text"
              className="bg-slate-200 border-none outline-none shadow-sm text-center p-1"
              placeholder="select Date"
            />
            <div className="bg-blue-900 p-2 rounded cursor-pointer text-white font-bold">
              <FaCalendarAlt />
            </div>
          </div>
          <div className="bg-blue-900 p-2 rounded cursor-pointer text-white font-bold">
            <RiLoopLeftLine />
          </div>
          <div className="bg-blue-900 p-2 rounded cursor-pointer text-white font-bold">
            <FaFilter />
          </div>
        </div>
      </div>
      <ShadowCard className="my-5 h-[130px] pt-10">
        <div className="flex justify-between px-10">
          <div className="flex  gap-4">
            <img
              className="h-[40px] w-[40px] rounded-full cursor-pointer"
              src="https://th.bing.com/th?id=OIP.mEma0ZcipymPAHIYoIuFiAHaJa&w=221&h=281&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            />
            <div>
              <p className="text-[15px] text-slate-400">Welcome to dashboard</p>
              <h4>Gaurav</h4>
              <p className="text-[15px] text-slate-400">System Admin</p>
            </div>
          </div>
          <div className="flex  justify-around gap-10">
            {dashBoardCardData.map((data) => (
              <div key={data.id} className="text-center">
                <h4 className="font-bold my-3 text-slate-500">{data.title}</h4>
                <p className="text-[15px] text-slate-400">{data.stats}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-3 py-1 bg-blue-900 text-white text-xl">
              Setting
            </button>
            <button className="px-3 py-1 bg-sky-600 text-white text-xl">
              My Chat
            </button>
          </div>
        </div>
      </ShadowCard>
      <div className="flex mt-10">
        <div
          className="bg-gradient-to-r from-slate-300 via-pink-700  to-pink-900  flex justify-around 
        rounded shadow-md py-5 px-5"
        >
          <div className="px-5">
            <h3 className="text-xl text-white font-bold">Pending Tasks!</h3>
            <p className="text-slate-200 text-[10px]">Deadline Tommorow</p>
            <ul className="text-white font-bold list-disc mx-5 my-4">
              <li>Seller payments</li>
              <li>Checkout payout</li>
            </ul>
          </div>
          <img src={working} alt="working image" className="h-[100px]" />
        </div>
        <div className="flex gap-5 mx-5">
          <ShadowCard>
            <div className="px-12 py-2 flex-col flex gap-3">
              <div className="flex gap-4 items-center">
                <FaShoppingCart className="text-blue-400 font-bold text-2xl " />
                <p className="text-xl font-semibold text-slate-700">Orders</p>
              </div>
              <p className="flex gap-4 items-center  text-xl font-semibold ">
                1,452{" "}
                <span className="text-blue-300">
                  <FaChevronUp />
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <div className="bg-green-800  w-[50px] text-white font-semibold  text-[10px] p-1 rounded">
                  +0.2 %
                </div>
                <p className="text-[12px] text-slate-400">From last Months</p>
              </div>
            </div>
          </ShadowCard>
          <ShadowCard>
            <div className="px-12 py-2 flex-col flex gap-3">
              <div className="flex gap-4 items-center">
                <FaDonate className="text-blue-400 font-bold text-2xl " />
                <p className="text-xl font-semibold text-slate-700">Profit</p>
              </div>
              <p className="flex gap-4 items-center  text-xl font-semibold ">
                $200{" "}
                <span className="text-red-300">
                  <FaChevronDown />
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <div className="bg-red-600  w-[40px] text-white font-semibold  text-[10px] p-1 rounded">
                  -5.4 %
                </div>
                <p className="text-[12px] text-slate-400">From last Months</p>
              </div>
            </div>
          </ShadowCard>
          <ShadowCard>
            <div className="px-12 py-2 flex-col flex gap-3">
              <div className="flex gap-4 items-center">
                <FaUser className="text-blue-400 font-bold text-2xl " />
                <p className="text-xl font-semibold text-slate-700">
                  Customers
                </p>
              </div>
              <p className="flex gap-4 items-center  text-xl font-semibold ">
                9845{" "}
                <span className="text-blue-300">
                  <FaChevronUp />
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <div className="bg-green-800 w-[40px] text-white font-semibold  text-[10px] p-1 rounded">
                  +25 %
                </div>
                <p className="text-[12px] text-slate-400">From last Months</p>
              </div>
            </div>
          </ShadowCard>
        </div>
      </div>
      {/* Weather report section */}
      <ShadowCard className="my-10">
        <div className="px-5 py-2">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Weather Report</h3>
            <p>Sydeny Austrilia</p>
          </div>
          <div className="flex justify-between px-0 sm:px-10 my-14">
            <div className="flex gap-5">
              <MdOutlineWbSunny className="text-8xl text-yellow-600" />
              <div>
                <h1 className="text-yellow-600 text-5xl my-2">
                  18 <sup>o</sup>C
                </h1>
                <p className="text-slate-400">
                  Yesterday{" "}
                  <b className="text-black">
                    24 <sup>o</sup>
                  </b>
                </p>
                <p className="text-slate-400">
                  Tomorrow{" "}
                  <b className="text-black">
                    22 <sup>o</sup>
                  </b>
                </p>
              </div>
            </div>
            <div className="flex  justify-around w-full sm:w-[70%] gap-10">
              <div className="flex flex-row sm:flex-col gap-10">
                <div className="flex gap-5 items-start ">
                  <MdOutlineWbSunny className="text-yellow-600 text-3xl" />
                  <div>
                    <b>Warm</b>
                    <p className="text-[12px] text-slate-500">Clear</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start ">
                  <MdWaterDrop className="text-blue-300 text-3xl" />
                  <div>
                    <b>58%</b>
                    <p className="text-[12px] text-slate-500">Clear</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col gap-10">
                <div className="flex gap-5 items-start ">
                  <FaRegMoon className="text-black text-3xl" />
                  <div>
                    <b>Night</b>
                    <p className="text-[12px] text-slate-500">Pleaseant</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start ">
                  <WiCloudyWindy className="text-black text-3xl" />
                  <div>
                    <b>17mph</b>
                    <p className="text-[12px] text-slate-500">Wind Speed</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col gap-10">
                <div className="flex gap-5 items-start ">
                  <WiRainWind className="text-black text-3xl" />
                  <div>
                    <b>Cloudy</b>
                    <p className="text-[12px] text-slate-500">Raining</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start ">
                  <FaCloudMoonRain className="text-black text-3xl" />
                  <div>
                    <b>29.5ml</b>
                    <p className="text-[12px] text-slate-500">Rainfall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShadowCard>
    </div>
  );
};

export default DashBoard;
