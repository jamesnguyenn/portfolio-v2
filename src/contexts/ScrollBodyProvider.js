import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ScrollContext = createContext();

function ScrollBodyProvider({ children }) {
  const [scrollPercent, setScrollPercent] = useState(window.scrollY);
  const scrollPercentPrevious = useRef(0);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollPercentPrevious.current = scrollPercent;
  }, [scrollPercent]);

  const handleScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (Math.floor(window.scrollY) / total) * 100;
    setScrollPercent(Math.floor(percent));
  };

  const scrollPercentData = {
    scrollPercent,
    scrollPercentPrevious,
  };

  return (
    <ScrollContext.Provider value={scrollPercentData}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollBodyProvider;

export const useScrollContext = () => {
  const scrollPercent = useContext(ScrollContext);
  return scrollPercent;
};
