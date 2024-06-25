import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", placeholder = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full flex flex-col">
      {label && (
        <label className="inline-block text-xl mb-1 pl-1 " htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`
      px-3 py-2 rounded-lg  bg-[#504f4f]
      outline-none focus:border-sky-400
      duration-200 border border-gray-200 w-full
     ${className}`}
        ref={ref}
        {...props}
        id={id}
        style={{ background: "#504f4f" }}
      />
    </div>
  );
});
export default Input;
