import React, { useState } from "react";

import { FaApple, FaGoogle } from "react-icons/fa";
import Input from "../components/shared/Form/Input";
import { redirect, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginSidebar from "../components/specific/LoginSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginService } from "../service/user.service";
const Login = () => {
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
    try {
      const response = await loginService(data.email, data.password);

      if (response.status === 200) {
        successToast(response.message);
        return navigate("/dashboard");
      }
      if (response.status === 403) {
        return errorToast(response.message);
      }
    } catch (error) {
      setErro(error.message);
    }
  };
  return (
    <div className="h-full w-full bg-[#333333] text-white  flex flex-col-reverse sm:flex-row">
      <ToastContainer position="top-right" />
      <LoginSidebar
        boldText="Welcome"
        description="We are glad to see you again!"
      />
      <div className="h-full w-full sm:w-[70%] text-left flex justify-center items-center">
        <div className="p-2 w-[60%] mt-20">
          <p className="text-white sm:text-xl h-full">
            Not a member?{" "}
            <span
              className="text-blue-700 cursor-pointer decoration-slice"
              style={{ textDecoration: "underline" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
          <h2 className="text-left text-xl sm:text-2xl my-5 font-semibold">
            Log In to Your Account{" "}
          </h2>
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
            cursor-pointer bg-slate-600 text-white rounded-[10px] py-[8px] px-5 "
            >
              <FaApple />
            </button>
          </div>
          <span className="mx-20 text-xl text-slate-400">Or </span>

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
                  className="bg-transparent shadow-md bg-[#504f4f] border-none w-full  sm:w-[60%]"
                />
                {errors.email?.type === "required" && (
                  <p role="alert text-red-700" className="text-red-500 text-xl">
                    Email is required
                  </p>
                )}
                <a
                  href="/forgot-password"
                  className="ml-[40%] mt-2 text-blue-500 "
                  style={{ textDecoration: "underline" }}
                >
                  Forgot Password
                </a>
              </div>
              <Input
                label="Password  "
                placeholder="Enter your password"
                type="password"
                {...register("password", { required: true })}
                className="bg-transparent shadow-md bg-[#504f4f] border-none w-full sm:w-[60%]"
              />
              {errors.password?.type === "required" && (
                <p role="alert " className="text-red-500 text-xl ">
                  Password is required
                </p>
              )}
              <button
                type="submit"
                className=" py-2 px-5 bg-blue-600 text-white rounded-[10px] cursor-pointer"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
