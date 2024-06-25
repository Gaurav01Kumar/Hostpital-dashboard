import React, { useState, useRef } from "react";

import { FaApple, FaGoogle } from "react-icons/fa";
import Input from "../components/shared/Form/Input";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginSidebar from "../components/specific/LoginSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VerifyOtp } from "../service/user.service";
import { redirect } from "react-router-dom";
const Verification = () => {
  
  const location = useLocation();

  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const errorToast = (message) => {
    return toast.error(message);
  };
  const successToast = (message) => {
    return toast.success(message);
  };
  const verfiyOtp = async () => {
    try {
      let converstedOtp = "";
      for (let i = 0; i < otp.length; i++) {
        converstedOtp += otp[i];
      }
      if(converstedOtp===""){
        
        return errorToast("Please enter otp")
      }
      //const 
      const response=await VerifyOtp(location.state.token,converstedOtp);
      if(response.status===200){
        successToast(response.message)
         redirect("/dashboard");
         return
      }
      if(response.status===409){
        redirect("/forgot-password")
       return  errorToast(response.message)
      }
    } catch (error) {
      console.log(error);
      return errorToast(error.message);
    }
  };

  return (
    <div className="h-full w-full bg-[#333333] text-white  flex flex-col-reverse sm:flex-row">
      <ToastContainer position="top-right" />
      <LoginSidebar
        boldText=""
        description="We care about your accound security."
      />
      <div className="h-full w-full sm:w-[70%] text-left flex justify-center items-center">
        <div className="p-2 w-[60%] mt-20">
          <h2 className="text-left text-xl sm:text-2xl my-5 font-semibold">
            Two-Step Verification{" "}
          </h2>

          <img
            src="https://cdn.iconscout.com/icon/premium/png-128-thumb/two-step-verification-5661105-4721078.png"
            className="h-[60px]"
          />
          <p>
            Please enter the OTP (one time password) to verify your account.{" "}
            <br /> A code has been sent to *****@gmail.com
          </p>

          <form className="mt-8">
            <div className="space-y-5">
              <div className="w-[100%]">
                <div className="otp-input">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className=" py-2 px-5 bg-blue-600 text-white rounded-[10px] cursor-pointer"
                onClick={verfiyOtp}
              >
                Continue
              </button>
            </div>
          </form>
          <div className="flex gap-2 items-center my-10">
            <div className="bg-gray-500 w-[100px] h-[3px]" />
            <span className=" text-xl text-slate-400">Or </span>
            <div className="bg-gray-500 h-[2px]  w-[200px]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 my-5">
            <button
              type="submit"
              className="flex gap-5 items-center
            cursor-pointer bg-blue-600 text-white rounded-[10px] py-[8px] px-5 "
            >
              <FaGoogle /> Log in with Google
            </button>
            <button
              type="submit"
              className="flex gap-5 items-center
            cursor-pointer bg-slate-500 text-white rounded-[10px] py-[8px] px-5 "
            >
              <FaApple />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
