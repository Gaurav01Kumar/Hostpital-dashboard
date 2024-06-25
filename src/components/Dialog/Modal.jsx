import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ visible, onClose, className = "", children }) => {
  return (
    <div
      className={
        visible
          ? "w-screen h-screen transition-all duration-700   shadow-md bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center "
          : "hidden"
      }
    >
      <div
        className={`${className} text-black p-2  relative bg-white shadow-md rounded-sm `}
      >
        <FaTimes
          className="text-slate-400 w-10 text-4xl cursor-pointer absolute  right-5 top-2"
          onClick={onClose}
        />{" "}
        {visible}
        {children}
      </div>
    </div>
  );
};

export default Modal;
