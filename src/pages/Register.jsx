import React, { useState } from "react";

import { FaApple, FaGoogle } from "react-icons/fa";
import Input from "../components/shared/Form/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginSidebar from "../components/specific/LoginSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterService } from "../service/user.service";
const Register = () => {
  const navigate = useNavigate();
  const [isChecked, setIsCheked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const errorToast = (message) => {
    return toast.error(message);
  };
  const successToast = (message) => {
    return toast.success(message);
  };

  const login = async (data) => {
    try {
      if(isChecked===false){
        return errorToast("Please checked the terms and conditon")
      }
      const response = await RegisterService(
        data.fullname,
        data.email,
        data.password
      );

      if (response.status === 409) {
        errorToast(response.message);
        return;
      }
      if (response.status === 201) {
        navigate("/dashboard")
        return successToast(response.message);
      }
    } catch (error) {
      return errorToast(error.message);
    }
  };
  return (
    <div className="h-full w-full bg-[#333333] text-white  flex flex-col-reverse sm:flex-row">
      <ToastContainer position="top-right" />
      <LoginSidebar
        boldText="Welcome "
        description="Looks like you'r new here!"
      />
      <div className="h-full w-full sm:w-[70%] text-left flex justify-center items-center">
        <div className="p-2 w-[60%]  mt-20">
          <p className="text-white sm:text-xl h-full">
            Already a member?{" "}
            <span
              className="text-blue-700 cursor-pointer decoration-slice"
              style={{ textDecoration: "underline" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
          <h2 className="text-left text-xl sm:text-2xl my-5 font-semibold">
            Register Your Account{" "}
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 my-5">
            <button
              type="submit"
              className="flex gap-5 items-center
          cursor-pointer bg-blue-600 text-white rounded-[10px] py-[8px] px-5 "
            >
              <FaGoogle /> Register in with Google
            </button>
            <button
              type="submit"
              className="flex gap-5 items-center
          cursor-pointer bg-slate-600 text-white rounded-[10px] py-[8px] px-5 "
            >
              <FaApple />
            </button>
          </div>
          <span className="mx-20 text-xl text-slate-400">Or </span>

          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Full Name  "
                placeholder="Enter your Full Name"
                type="text"
                {...register("fullname", { required: true })}
                className="bg-transparent shadow-md bg-gray-600 border-none w-full sm:w-[60%]"
              />
              {errors.fullname?.type === "required" && (
                <p role="alert text-red-700" className="text-red-500 text-xl">
                  Fullname is required
                </p>
              )}
              <Input
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) => {
                      /^\w+([.-]?w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address";
                    },
                  },
                })}
                className="bg-transparent shadow-md bg-[#504f4f] border-none w-full  sm:w-[60%]"
              />
              {errors.email?.type === "required" && (
                <p role="alert text-red-700" className="text-red-500 text-xl">
                  Email is required
                </p>
              )}
              <Input
                label="Password  "
                placeholder="Enter your password"
                type="password"
                {...register("password", { required: true })}
                className="bg-transparent shadow-md bg-[#504f4f] border-none w-full sm:w-[60%]"
              />
              {errors.password?.type === "required" && (
                <p role="alert text-red-700" className="text-red-500 text-xl">
                  Fullname is required
                </p>
              )}
              <div className="flex  w-full sm:w-[45%] ">
                <Input
                  type="checkbox"
                  className="bg-[#504f4f] w-[20px] mx-0  "
                  onClick={()=>setIsCheked(!isChecked)}
                />

                <p className="text-[12px]  -ml-10 sm:w-[700px]">
                  I agree to accept
                  <span
                    className="text-blue-700 cursor-pointer decoration-slice"
                    style={{ textDecoration: "underline" }}
                  >
                    Terms
                  </span>
                  and
                  <span
                    className="text-blue-700 cursor-pointer decoration-slice"
                    style={{ textDecoration: "underline" }}
                  >
                    conditons
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className=" py-2 px-5 bg-blue-600 text-white rounded-[10px] cursor-pointer"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
