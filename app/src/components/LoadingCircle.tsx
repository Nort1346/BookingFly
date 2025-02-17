import React from "react";

const LoadingCircle: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div className={`${visible ? "flex" : "hidden"} justify-center items-center h-80`}>
      <svg
        className="mr-3 size-12 animate-spin"
        fill="none"
        color="white"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="31.4"
          strokeDashoffset="0"
        />
      </svg>
    </div>
  );
};

export default LoadingCircle;
