import React, { memo } from "react";

function Button({ children, style }) {
  return (
    <button
      type="button"
      className="px-5 py-3 bg-primary rounded text-secondary text-sm cursor-pointer border border-transparent hover:bg-transparent hover:text-primary hover:border hover:border-primary transition-all duration-500 ease-in-out flex items-center justify-center gap-[5px]"
      style={style}
    >
      {children}
    </button>
  );
}

export default memo(Button);
