import React from "react";
import { useScrollContext } from "../contexts/ScrollBodyProvider";

function ScrollDownIcon() {
  const { scrollPercent } = useScrollContext();
  return (
    <div
      className={`absolute  animate__animated  animate__fadeInDown animate__fast animate__infinite animate__delay-4s transition-all duration-1000 ease-in-out z-1000 ${
        scrollPercent >= 25
          ? "bottom-[50px] right-[50px] "
          : "bottom-[50px] right-[50px] lg:bottom-containerLarge lg:left-2/4 "
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default ScrollDownIcon;
