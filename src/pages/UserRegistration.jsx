import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import {
  FaPlus,
  FaSearch,
  FaAlignJustify,
  FaCross,
  FaTimes,
} from "react-icons/fa";
import ShadowCard from "../components/shared/ShadowCard";
import Modal from "../components/Dialog/Modal";
import Billing from "../components/specific/Billing";

const UserRegistration = () => {
  const { toggle, isToogled } = useContext(SidebarContext);
  const [samplecollectorVisible, setSampleCollectorVisible] = useState(false);
  const [collectorVisible, setCollectorVisible] = useState(false);
  const [organisationVisible, setOrgansationVisible] = useState(false);
  const [openBilling, setOpenBilling] = useState(false);
  return (
    <div
      className={
        isToogled
          ? "w-[83%]   ml-0 sm:ml-[11%] mt-2 h-full px-2 py-5 transition-all duration-300"
          : " w-[90%]  sm:ml-[5%] px-5 h-full py-5 transition-all duration-300"
      }
    >
      {openBilling ? (
        <Billing onClose={()=>setOpenBilling(false)} />
      ) : (
        <>
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
            <h3 className=" font-bold text-[20px] text-slate-600">
              Register New Patient
            </h3>
          </div>

          <div className="w-[50%]  gap-1  my-5 flex items-center">
            <input
              type="text"
              placeholder="Search patient by phone number or name "
              className="px-5 shadow-md bg-white text-black py-1 rounded w-full "
            />
            <div className="p-2 bg-white shadow-sm text-slate-600">
              <FaSearch />
            </div>
          </div>

          <ShadowCard>
            <div className="flex justify-between px-10 py-3">
              <div className="w-[10%]">
                <h4>Patient Id</h4>
                <b>3490349</b>
              </div>
              <div className="w-[80%]">
                <div className="flex gap-10">
                  <div className="flex gap-10">
                    <div className="flex flex-col gap-3">
                      <p className="text-[18px] font-semibold text-slate-400">
                        Designation
                      </p>
                      <select className="border h-9 outline-none  border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[18px] font-semibold text-slate-600">
                        <b className="text-red-700">*</b>First Name{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Fist Name"
                        className=" border
                  rounded bg-white text-black shadow-md px-3 h-9 w-[250px] outline-none border-slate-500"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[18px] font-semibold text-slate-400">
                        Last Name{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className=" border
                  rounded bg-white text-black shadow-md px-3 h-9 w-[200px] outline-none border-slate-500"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 items-end">
                    <div className="flex flex-col gap-3">
                      <p className="text-[18px] font-semibold text-slate-400">
                        Phone Number
                      </p>
                      <select className="border h-9 w-[80px]  outline-none border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                        <option value="Mr.">+91</option>
                        <option value="Mrs.">+99</option>
                      </select>
                    </div>

                    <input
                      type="number"
                      placeholder="Phone Number"
                      className=" border
                  rounded bg-white  text-black shadow-md px-3 h-9 outline-none border-slate-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between my-2">
                    <div className="">
                      <span className="text-[18px] font-semibold text-slate-400">
                        <b className="text-red-700">*</b>Gender{" "}
                      </span>
                      <div className="flex gap-3 text-xl">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="ml-2"
                        />
                        Male
                        <input type="radio" name="gender" value="fmale" />
                        Female
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[18px] font-semibold text-slate-600">
                        EmailId{" "}
                      </span>
                      <input
                        type="email"
                        placeholder="Email Id"
                        className=" border
                  rounded bg-white text-black shadow-md px-3 h-9 w-[250px] outline-none border-slate-500"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-[18px] font-semibold text-slate-600">
                        Address{" "}
                      </span>
                      <textarea
                        type="text"
                        placeholder="Address"
                        cols={40}
                        rows={5}
                        className=" border
                  rounded bg-white text-black shadow-md px-3  outline-none border-slate-500"
                      />
                    </div>
                  </div>
                  <div className="flex -mt-11 gap-10 ">
                    <div className="flex flex-col gap-3">
                      <span className="text-[18px] font-semibold text-slate-600">
                        <b className="text-red-700">*</b> Age{" "}
                      </span>
                      <input
                        type="number"
                        placeholder="Age"
                        className=" border
                  rounded bg-white text-black shadow-md px-3 h-9 w-[250px] outline-none border-slate-500"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[18px] font-semibold text-slate-700">
                        Age Type
                      </p>
                      <select className="border h-9 w-[80px]  outline-none border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                        <option value="Mr.">Year</option>
                        <option value="Mrs.">Month</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between px-10 my-5">
              <div className="flex items-end gap-2 ">
                <div className="flex flex-col gap-3">
                  <p className="text-[18px] font-semibold text-slate-800">
                    Select Sample Collector{" "}
                    <span className="text-slate-400">(Optional)</span>
                  </p>
                  <select className="border h-9   outline-none border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                    <option value="#">Select Sample Collector</option>
                    <option value="Mr.">+91</option>
                    <option value="Mrs.">+99</option>
                  </select>
                </div>
                <div className="px-5 cursor-pointer py-2 bg-blue-600 text-white text-xl">
                  <FaPlus onClick={() => setSampleCollectorVisible(true)} />
                  <Modal
                    visible={samplecollectorVisible}
                    onClose={() => setSampleCollectorVisible(false)}
                    className="px-10"
                  >
                    <div className="mx-10 flex flex-col gap-7  py-10">
                      <h5 className="text-2xl ">Add Sample Collector</h5>
                      <div className="flex  gap-3">
                        <span className="text-[18px] font-semibold text-slate-600">
                          <b className="text-red-700">*</b> Name:{" "}
                        </span>
                        <input
                          type="text"
                          placeholder=" Name"
                          className=" border
                  rounded bg-white text-black shadow-md px-3 h-12 w-[250px] outline-none border-slate-500"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[18px] font-semibold text-slate-700">
                          <b className="text-red-700">*</b>Gender{" "}
                        </span>
                        <div className="flex gap-3 text-xl">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="ml-2"
                          />
                          Male
                          <input type="radio" name="gender" value="fmale" />
                          Female
                        </div>
                      </div>
                      <div className="flex  gap-3">
                        <span className="text-[18px] font-semibold text-slate-600">
                          <b className="text-red-700">*</b> Phone:{" "}
                        </span>
                        <input
                          type="number"
                          placeholder=" Phone Number"
                          className=" border
                  rounded bg-white text-black shadow-md px-3 h-12 w-[250px] outline-none border-slate-500"
                        />
                      </div>
                      <div className="flex  gap-3">
                        <span className="text-[18px] font-semibold text-slate-600">
                          Email:{" "}
                        </span>
                        <input
                          type="email"
                          placeholder="Email"
                          className=" border
                  rounded bg-white text-black shadow-md px-3 h-12 w-[250px] outline-none border-slate-500"
                        />
                      </div>
                    </div>
                    <button className="py-2 px-4 ml-[70%] bg-blue-600 text-white font-semibold">
                      Save
                    </button>
                  </Modal>
                </div>
              </div>
              <div className="flex items-end gap-2 ">
                <div className="flex flex-col gap-3">
                  <p className="text-[18px] font-semibold text-slate-800">
                    Select Organisation{" "}
                    <span className="text-slate-400">(Optional)</span>
                  </p>
                  <select className="border h-9   outline-none border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                    <option value="#">Select Organisation</option>
                    <option value="Mr.">+91</option>
                    <option value="Mrs.">+99</option>
                  </select>
                </div>
                <div className="px-5 cursor-pointer py-2 bg-blue-600 text-white text-xl">
                  <FaPlus onClick={() => setOrgansationVisible(true)} />
                  <Modal
                    visible={organisationVisible}
                    onClose={() => setOrgansationVisible(false)}
                    className="px-10"
                  >
                    <div className="mx-10 flex flex-col gap-7  py-10">
                      <h5 className="text-2xl ">Add Organisation</h5>
                      <div className="flex items-center gap-3">
                        <span className="text-[18px] font-semibold text-slate-700">
                          <b className="text-red-700">*</b>Refreal Types{" "}
                        </span>
                        <div className="flex gap-3 text-xl">
                          <input
                            type="radio"
                            name="gender"
                            value="doctor"
                            className="ml-2"
                          />
                          doctor
                          <input type="radio" name="gender" value="hospital" />
                          hospital
                        </div>
                      </div>
                      <div className="flex  gap-3">
                        <span className="text-[18px] font-semibold text-slate-600">
                          <b className="text-red-700">*</b> Name:{" "}
                        </span>
                        <input
                          type="text"
                          placeholder=" Name"
                          className=" border
                  rounded bg-white text-black shadow-md px-3 h-12 w-[250px] outline-none border-slate-500"
                        />
                      </div>

                      <div className="flex  gap-3">
                        <span className="text-[18px] font-semibold text-slate-600">
                          <b className="text-red-700">*</b> Degree:{" "}
                        </span>
                        <input
                          type="text"
                          placeholder=" Degree"
                          className=" border
                  rounded bg-white text-black shadow-md px-3 h-12 w-[250px] outline-none border-slate-500"
                        />
                      </div>
                      <div className="flex  gap-3">
                        <span className="text-[18px] font-semibold text-slate-600">
                          Complements%:{" "}
                        </span>
                        <input
                          type="text"
                          placeholder="Complement"
                          className=" border
                  rounded bg-white text-black shadow-md px-3 h-12 w-[250px] outline-none border-slate-500"
                        />
                      </div>
                    </div>
                    <button className="py-2 px-4 ml-[70%] bg-blue-600 text-white font-semibold">
                      Save
                    </button>
                  </Modal>
                </div>
              </div>
              <div className="flex items-end gap-2 ">
                <div className="flex flex-col gap-3">
                  <p className="text-[18px] font-semibold text-slate-800">
                    Select Collected at{" "}
                    <span className="text-slate-400">(Optional)</span>
                  </p>
                  <select className="border h-9   outline-none border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                    <option value="#">Select collected at </option>
                    <option value="Mr.">+91</option>
                    <option value="Mrs.">+99</option>
                  </select>
                </div>
                <div className="px-5 cursor-pointer py-2 bg-blue-600 text-white text-xl">
                  <FaPlus onClick={() => setCollectorVisible(true)} />
                  <Modal
                    visible={collectorVisible}
                    onClose={() => setCollectorVisible(false)}
                  >
                    <div className="mx-10 flex flex-col gap-10  py-10">
                      <h5 className="text-2xl ">Add Collected at</h5>
                      <div className="w-full">
                        <div className="flex justify-around gap-20">
                          <p className="text-2xl font-semibold">
                            By <br /> Default{" "}
                          </p>
                          <p className="text-xl font-semibold"> Address </p>
                          <p className="text-xl font-semibold"> Action </p>
                        </div>
                        <div className="   gap-10 ml-[30%] flex items-end justify-evenly">
                          <textarea
                            cols={20}
                            rows={3}
                            className="border
                  rounded bg-white text-black shadow-md px-3  outline-none border-slate-500"
                          ></textarea>
                          <button className="px-3 py-2 rounded  bg-blue-600 text-white ">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="flex justify-end my-10 ">
              <button
                className="px-3 py-2 rounded  bg-blue-600 text-white "
                onClick={() => setOpenBilling(true)}
              >
                Go to billing
              </button>
            </div>
          </ShadowCard>
        </>
      )}
    </div>
  );
};

export default UserRegistration;
