import React from "react";
import Header from "./Header";

function Main({ children }) {
  return (
    <>
      <Header></Header>
      <div className="h-[90%] flex items-start justify-start overflow-x-auto  snap-mandatory snap-x">
        {children}
      </div>
    </>
  );
}

export default Main;
