import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaInbox,
  FaTimes,
  FaSearch,
  FaRupeeSign,
} from "react-icons/fa";
import ShadowCard from "../shared/ShadowCard";

const Billing = ({ onClose }) => {
  const [openInvoice, setOpenInvoice] = useState(false);

  return (
    <>
      {openInvoice ? (
        <Invoice onClose={() => setOpenInvoice(false)} />
      ) : (
        <ShadowCard className="border-[4px]">
          <div className="py-2 px-4 flex items-center justify-between">
            <p className="text-xl font-semibold text-slate-900">Billing</p>
            <FaTimes
              className="cursor-pointer text-2xl text-slate-400"
              onClick={onClose}
            />
          </div>
          <div className="flex px-4 my-4 gap-10">
            <div className="w-[20%]">
              <p className="text-xl text-slate-500 font-semibold underline">
                Personal Details
              </p>
              <div className="my-10">
                <p className="text-xl font-semibold ">Test Name</p>
                <p className="text-xl font-semibold  my-2">2002030</p>
                <div className="flex gap-5 my-2">
                  <div>
                    <p className="text-xl font-semibold text-slate-400">
                      Gender
                    </p>
                    <span className=" font-semibold text-slate-800">Male</span>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-slate-400">Age</p>
                    <span className=" font-semibold text-slate-800">
                      23 years
                    </span>
                  </div>
                </div>
                <p className="text-xl font-semibold text-slate-400">
                  Contact Number
                </p>
              </div>
              <div className="my-2">
                <p className=" font-semibold text-slate-400">Billing Date</p>
                <div className="shadow px-2 my-2 bg-white border flex items-center justify-between gap-2">
                  <input
                    type="text"
                    name=""
                    className="h-full py-2 outline-none border-none  "
                    value="22-04-21 11:07pm"
                    readOnly
                  />
                  <FaCalendarAlt className=" font-semibold text-slate-400" />
                </div>
                <p className=" font-semibold text-slate-400 my-2">
                  Sample collector
                </p>
                <div className="shadow px-2 my-2 bg-white border flex items-center justify-between gap-2">
                  <input
                    type="text"
                    name=""
                    className="h-full py-2 outline-none border-none  "
                    value=""
                    readOnly
                  />
                </div>
                <p className=" font-semibold text-slate-400 my-2">
                  Collected at
                </p>
                <div className="shadow px-2 my-2 bg-white border flex items-center justify-between gap-2">
                  <input
                    type="text"
                    name=""
                    className="h-full py-2 outline-none border-none  "
                    value=""
                    readOnly
                  />
                </div>
                <p className=" font-semibold text-slate-400 my-2">
                  Organisation
                </p>
                <div className="shadow px-2 my-2 bg-white border flex items-center justify-between gap-2">
                  <input
                    type="text"
                    name=""
                    className="h-full py-2 outline-none border-none font-semibold "
                    value="Self"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="w-[80%] h-full ">
              <DataTable />

              <div className="flex items-center justify-center my-10 ">
                <div className="bg-white shadow-md  flex h-10  rounded items-center">
                  <input
                    type="text"
                    placeholder="search by Test Name or Test code "
                    className="h-full px-3 outline-none w-[400px] bg-transparent  border-sky-400 border-[2px] text-slate-500"
                  />
                  <FaSearch className="text-slate-600 h-10  border-slate-400 border w-14 py-1 text-[12px]" />
                </div>
                <select className="border h-10  text-xl font-semibold  outline-none border-slate-400 rounded bg-white shadow-md px-3 py-[2px]">
                  <option value="#">Tests</option>
                  <option value="Mr.">Medical </option>
                  <option value="Mrs.">Blood Test</option>
                </select>
              </div>

              <div className="flex my-20 gap-5">
                <ShadowCard>
                  <div className="flex gap-2 items-center">
                    <div>
                      <label for="discount" className="text-xl ">
                        Discount(%){" "}
                        <span className="text-slate-500">(Optional)</span>{" "}
                      </label>
                      <input
                        type="number"
                        name=""
                        id="discount"
                        placeholder="0"
                        className=" px-3 outline-none bg-white shadow border h-10 text-slate-500"
                        value=""
                      />
                    </div>
                    <div>
                      <label
                        for="discount"
                        className="text-xl flex items-center "
                      >
                        Discount ( <FaRupeeSign className="text-[12px]" />){" "}
                        <span className="text-slate-500">(Optional)</span>{" "}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        name=""
                        id="discount"
                        className=" px-3 outline-none  bg-white shadow border h-10 text-slate-500"
                        value=""
                      />
                    </div>
                  </div>
                  <ShadowCard className="my-5">
                    <div className="flex items-center justify-between text-xl text-slate-600 px-4">
                      <p>Amount</p>
                      <p>0</p>
                    </div>
                  </ShadowCard>
                  <ShadowCard className="my-5">
                    <div className="flex items-center justify-between text-xl text-slate-600 px-4">
                      <p>Discount</p>
                      <p>0</p>
                    </div>
                  </ShadowCard>
                  <ShadowCard className="my-10">
                    <div className="flex items-center justify-between text-xl text-slate-800 px-4">
                      <p>Total Amount</p>
                      <p>0.0</p>
                    </div>
                  </ShadowCard>
                </ShadowCard>
                <ShadowCard>
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="h-14 p-2" />
                    <p className="text-xl ">Due Payment</p>
                  </div>
                  <div>
                    <p className="text-xl ">Paid Amount</p>
                    <input
                      type="text"
                      className="h-10 w-full my-4 p-2 text-xl rounded-sm bg-gray-200"
                      value={"0.0"}
                    />
                  </div>
                  <ShadowCard className="my-5">
                    <div className="flex items-center justify-between text-xl  px-10">
                      <p>Due Amount</p>
                      <p>0</p>
                    </div>
                  </ShadowCard>
                </ShadowCard>
                <ShadowCard>
                  <h4 className="py-2 text-xl px-3">Payment Method</h4>
                  <div className="flex items-center justify-around gap-2">
                    <PaymentModeButton title={"Cash"} />
                    <PaymentModeButton title={"UPI"} />
                    <PaymentModeButton title={"Card"} />
                  </div>
                </ShadowCard>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-10 ">
            <button
              className="px-3 py-2 rounded  bg-slate-400 text-black "
              onClick={() => setOpenInvoice(true)}
            >
              Register and Print Bill
            </button>
            
          </div>
        </ShadowCard>
      )}
    </>
  );
};

// component for the Inovice Generate
const Invoice = ({ onClose }) => {
  const printBill = () => {
    window.print();
  };
  return (
    
    <ShadowCard className="border">
      <div className="py-2 px-4 flex items-center justify-between">
        <p className="text-xl font-semibold text-slate-900">Bill</p>
        <FaTimes
          className="cursor-pointer text-2xl text-slate-400"
          onClick={onClose}
        />
      </div>
      <div className="px-20 ">
        <div className="flex justify-between my-10">
          <h3 className="text-3xl font-semibold">Malhotra janch Kendra</h3>
          <div>
            <p className="my-2  text-slate-400">Mobile No. 9183739338</p>
            <p className="text-slate-500">Praksh@gmail.com</p>
          </div>
        </div>
        <hr className="h-1 bg-slate-700" />
        <div className="my-10">
          <div className="flex justify-between my-10">
            <div>
              <h3 className="text-2xl font-semibold">Invoice-cum-receipt</h3>
              <p className="my-2  text-slate-400">Bill Id: RE5</p>
              <p className="text-slate-500">Name:Mr.Test Kumar</p>
              <p className="text-slate-500">Age/Gender:32 years / Male</p>
            </div>

            <div>
              <p className="my-2  text-slate-400">
                Bill date: 21/04/2020 11:07 am
              </p>
              <p className="text-slate-500">Refred by: Self</p>
              <p className="text-slate-500">Payment type: Cash</p>
            </div>
          </div>
          <div className="bg-slate-700 text-white px-10 py-3 flex justify-between">
            <h4 className="text-xl ">Test Description</h4>
            <p className="text-xl ">Amount</p>
          </div>
          <ShadowCard className="py-2">
            <div className="flex items-center justify-between text-xl text-slate-600 px-4">
              <p>Complete Blood Count (CBC)</p>
              <p>200.0</p>
            </div>
          </ShadowCard>
          <div className="flex justify-end">
            <div className=" w-[400px] ">
              <div className="flex my-2 items-center justify-between text-xl text-slate-900 px-4">
                <p>Total</p>
                <p className="flex items-center ">
                  <FaRupeeSign className="text-[14px]" /> 200.0
                </p>
              </div>
              <div className="flex items-center justify-between text-xl text-slate-600 px-4">
                <p>Payment Made</p>
                <p className="flex items-center text-green-600 ">
                  <FaRupeeSign className="text-[14px]" /> 200.0
                </p>
              </div>
              <div className="flex items-center justify-between text-xl bg-slate-300 my-1 py-3 text-slate-600 px-4">
                <p>Balance Due</p>
                <p className="flex items-center text-green-600 ">
                  <FaRupeeSign className="text-[14px]" /> 0.0
                </p>
              </div>
              <p className="text-right text-xl text-slate-600 my-3">
                Total In words: Two hundred Only
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <PaymentModeButton title={"Enter Result"} handleMethod={onclose} />
          <div className="flex gap-3">
            <PaymentModeButton title={"Send"} />
            <PaymentModeButton
              title={"Print"}
              handleMethod={printBill}
              className={"bg-blue-700  text-white"}
            />
          </div>
        </div>
      </div>
    </ShadowCard>
  );
};

const data = [];

const PaymentModeButton = ({ className, title, props, handleMethod }) => {
  return (
    <button
      onClick={handleMethod}
      className={`${className} py-2 bg-whit shadow-md rounded text-2xl px-5 border hover:border-sky-400`}
      {...props}
    >
      {title}
    </button>
  );
};
const DataTable = () => {
  return (
    <table className="w-full h-full ">
      <thead className="border-collapse w-full h-14 rounded bg-gray-200 text-xl font-bold  ">
        <td className="ml-10">Sr.NO</td>
        <td colSpan={40}>Test/Packages</td>
        <td>Price</td>
        <td>Action</td>
      </thead>
      {data.length > 0 ? (
        <tbody className="w-full ">
          <tr className="">
            <td>1</td>
          </tr>
        </tbody>
      ) : (
        <div className="my-10  flex items-center flex-col ml-[300px] ">
          <FaInbox className="text-6xl text-slate-400" />
          <p className="text-slate-400">No data</p>
        </div>
      )}
    </table>
  );
};
export default Billing;
