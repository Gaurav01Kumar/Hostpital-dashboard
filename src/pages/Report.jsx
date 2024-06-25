import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  FaTimes,
  FaAlignJustify,
  FaPrint,
  FaSearch,
  FaRupeeSign,
  FaPlus,
  FaCheck,
  FaChevronDown,
  FaCalendar,
} from "react-icons/fa";

const Report = () => {
  const { toggle, isToogled } = useContext(SidebarContext);
  return (
    <div
      className={
        isToogled
          ? "w-[83%]   ml-0 sm:ml-[11%] mt-2 h-full px-2 py-5 transition-all duration-300"
          : " w-[90%]  sm:ml-[5%] mt-0 px-5 h-full py-5 transition-all duration-300"
      }
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2 py-2">
          {isToogled ? (
            <FaTimes
              onClick={toggle}
              className="text-xl text-slate-700 cursor-pointer font-bold transition-all duration-200"
            />
          ) : (
            <FaAlignJustify
              onClick={toggle}
              className="text-xl text-slate-700 cursor-pointer font-bold transition-all duration-200"
            />
          )}{" "}
          <h3 className=" font-bold text-[20px] text-slate-800">
            Patients Lists
          </h3>
        </div>
        <div className="flex items-center gap-20 justify-between">
          <div className="flex items-center rounded gap-2 text-slate-700 text-xl font-se\ px-3 py-2 border border-slate-300 shadow-md">
            <FaPrint /> <p>WorkSheet</p>
          </div>
          <div className="bg-white shadow-md flex h-10 px-2 rounded items-center">
            <input
              type="text"
              placeholder="search Patients"
              className="h-full outline-none bg-transparent border-none text-slate-500"
            />
            <FaSearch className="text-slate-600 " />
          </div>
          <div className="bg-white shadow-md flex h-10 px-2 rounded items-center">
            <button className="flex items-center gap-2 bg-gray-200 px-3 text-slate-400 mx-1  rounded border  h-[80%]">
              All <FaTimes />{" "}
            </button>
            <input
              type="text"
              placeholder="search Patients"
              className="h-full outline-none bg-transparent border-none text-slate-500"
            />
            <FaChevronDown className="text-slate-600 " />
          </div>
          <div className="bg-white shadow-md flex h-10 px-2 rounded items-center">
            <DateRangePicker />
            <FaCalendar className="text-slate-500" />
          </div>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

const DataTable = () => {
  return (
    <div className=" my-10  w-full">
      <table className=" w-full text-center">
        <tr className="bg-gray-200 w-full h-16">
          <th></th>
          <th>Patient Id</th>
          <th>Patient Details</th>
          <th>Test</th>
          <th className="flex items-center justify-end mt-5">
            Amount in <FaRupeeSign />
          </th>
          <th className="w-[150px] ">Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tbody className="bg-white">
          <tr className="w-full h-14 text-xl text-slate-600">
            <td>
              <FaPlus />
            </td>
            <td>22123</td>
            <td>Gaurav</td>
            <td>Blood Test</td>
            <td className="flex items-end mt-4 justify-end">
              <FaRupeeSign /> 300
            </td>
            <td className="text-[18px] ml-10">22-04-2004 11:00 pm </td>
            <td className="px-4 flex flex-col items-center">
              <div className="bg-green-100 flex justify-center rounded shadow items-center gap-2 py-1 text-green-500 w-[140px]">
                <FaCheck />
                <span>Completed</span>
              </div>
              <div className="flex  gap-2 items-center">
                <FaPrint />0
              </div>
            </td>

            <td className="">
              <button className="py-1 bg-blue-600 text-white rounded px-6">
                Bill
              </button>
              <button className="py-1 ml-10 bg-blue-600 text-white rounded px-2">
                Print Report
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get human-readable month
  const monthIndex = startDate ? startDate.getMonth() : 0; // Check if startDate is defined
  const humanReadableMonth = monthNames[monthIndex];

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        maxDate={new Date().setDate(new Date().getDate() + 5)}
        placeholderText="Select a date between today and 5 days in the future"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        minDate={startDate}
        maxDate={new Date().setDate(startDate.getDate() + 5)}
        placeholderText="Select an end date"
      />
    </div>
  );
}

export default Report;
