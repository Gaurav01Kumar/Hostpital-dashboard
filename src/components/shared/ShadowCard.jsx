const ShadowCard = ({ children, className = "" }) => {
    return (
      <div
        className={`w-full h-full p-2 bg-white shadow-md shadow-slate-400 rounded-md ${className}`}
      >
        {children}
      </div>
    );
  };
  export default ShadowCard