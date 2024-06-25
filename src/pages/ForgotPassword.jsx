import React, { useState } from "react";

import { FaApple, FaGoogle } from "react-icons/fa";
import Input from "../components/shared/Form/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginSidebar from "../components/specific/LoginSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OtpGenrate } from "../service/user.service";
const ForgotPassord = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setErro] = useState("");
  const errorToast = (message) => {
    return toast.error(message);
  };
  const successToast = (message) => {
    return toast.success(message);
  };
  const login = async (data) => {
    setErro("");
    try {
      const response = await OtpGenrate(data.email);
      if (response.status === 409) {
        return errorToast(response.message);
      }
      if (response.status === 200) {
        successToast("otp Sent success");
        return navigate("/verification", {
          state: { token: response.data.token, otp: response.data.token },
        });
      }
    } catch (error) {
      errorToast(error.message);
    }
  };
  return (
    <div className="h-full w-full bg-[#333333] text-white  flex flex-col-reverse sm:flex-row">
      <ToastContainer position="top-right" />
      <LoginSidebar
        boldText="Don't Worry"
        description="We are here help you to recover your password."
      />
      <div className="h-full w-full sm:w-[70%] text-left flex justify-center items-center">
        <div className="p-2 w-[60%] mt-20">
          <p className="text-white sm:text-xl h-full">
            Return to{" "}
            <span
              className="text-blue-700 cursor-pointer decoration-slice"
              style={{ textDecoration: "underline" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
          <h2 className="text-left text-xl sm:text-2xl my-5 font-semibold">
            Forgot password?{" "}
          </h2>
          <p className="text-slate-400 ">
            Enter the email address and mobile number associated with <br />{" "}
            your account
          </p>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <div className="w-[100%]">
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPattern: (value) => {
                        /^\w+([.-]?w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address";
                      },
                    },
                  })}
                  className="bg-transparent shadow-md  border-none w-full  sm:w-[60%]"
                />
                {errors.email?.type === "required" && (
                  <p role="alert text-red-700" className="text-red-500 text-xl">
                    Email is required
                  </p>
                )}
              </div>

              <button
                type="submit"
                className=" py-2 px-5 bg-blue-600 text-white rounded-[10px] cursor-pointer"
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

export default ForgotPassord;
