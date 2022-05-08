import React, { useCallback, useState } from "react";
import NavLinks from "../components/NavLinks";
import HamburgerIcon from "../components/HamburgerIcon";
import { useViewPortContext } from "../contexts/ViewPortProvider";
import { useScrollContext } from "../contexts/ScrollBodyProvider";
import Portal from "../components/Portal";
import useClickOutSide from "../hooks/useClickOutSide";

function Header() {
  const coords = useViewPortContext();
  const { scrollPercent } = useScrollContext();
  const { show, setShow, nodeRef } = useClickOutSide();
  console.log("🚀 ~ show", show);
  const handleClickNavBar = useCallback(() => {
    setShow(true);
  }, [setShow]);

  return (
    <nav className=" bg-secondary bg-opacity-80 h-[10%] flex-shrink-0 w-full px-containerSmall  lg:px-[90px] py-[20px]  flex items-center justify-center relative z-9999">
      <div
        className="absolute h-[3px] bottom-0 left-0 z-10 bg-primary transition-all duration-200 ease-linear"
        style={{ width: `${scrollPercent}%` }}
      />
      <div className="absolute h-[3px] bottom-0 w-full left-0 z-2  bg-gray-400" />
      <div className="w-full flex items-center justify-between">
        <h1
          className="uppercase text-xl font-semibold cursor-pointer"
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
        >
          James Nguyen
        </h1>
        {coords <= 1023 ? (
          <>
            <HamburgerIcon
              handleClickNavBar={handleClickNavBar}
            ></HamburgerIcon>
            <Portal>
              {show && (
                <div
                  className={`animate__animated ${
                    show ? "animate__fadeInRight" : "animate__fadeOutRight"
                  } bg-secondary w-[40%] h-full fixed top-0 right-0 flex flex-col items-end justify-start p-5 transition-all duration-500 ease-in-out`}
                  ref={nodeRef}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setShow(false);
                    }}
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <NavLinks className="w-full flex flex-col items-start justify-start  gap-[30px] relative z-1"></NavLinks>
                </div>
              )}
            </Portal>
          </>
        ) : (
          <NavLinks className="flex items-center  gap-[30px] relative z-1"></NavLinks>
        )}
      </div>
    </nav>
  );
}

export default Header;
