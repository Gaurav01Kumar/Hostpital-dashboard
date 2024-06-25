import React from "react";
import Logo from "../shared/Logo";
const LoginSidebar = ({boldText="",description=""}) => {
  return (
    <div className="login_background w-full sm:w-[30%] py-7 px-10">
      <Logo />
      <h2 className="my-7 text-[40px]  font-thin">
        <b>{boldText} , </b>{ description}
      </h2>
    </div>
  );
};

export default LoginSidebar;
