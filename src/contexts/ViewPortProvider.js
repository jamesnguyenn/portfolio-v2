import React, { createContext, useContext, useEffect, useState } from "react";

const viewPortContext = createContext();

function ViewPortProvider({ children }) {
  const [coords, setCoords] = useState(document.body.clientWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setCoords(document.body.clientWidth);
  };

  return (
    <viewPortContext.Provider value={coords}>
      {children}
    </viewPortContext.Provider>
  );
}

export default ViewPortProvider;

export const useViewPortContext = () => {
  const coords = useContext(viewPortContext);
  return coords;
};
