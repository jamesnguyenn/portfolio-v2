import React, { memo } from "react";

function HamburgerIcon({ handleClickNavBar }) {
  return (
    <>
      <button
        type="button"
        className="w-[30px] h-[20px] flex flex-col items-center justify-center  cursor-pointer overflow-hidden relative z-[200] "
        onClick={handleClickNavBar}
      >
        <div
          className={` transition-all duration-300 w-full h-[2px] bg-primary absolute  pointer-events-none`}
        />
        <div
          className={`transition-all duration-300 w-full h-[2px] bg-primary absolute top-[1%] pointer-event-none`}
        />
        <div
          className={`transition-all duration-300 w-full h-[2px] bg-primary absolute bottom-[1%] pointer-event-none `}
        />
      </button>
    </>
  );
}

export default memo(HamburgerIcon);
