import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById("root"));
}

export default Portal;
