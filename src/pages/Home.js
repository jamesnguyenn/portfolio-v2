import React, { useEffect, useRef, useState } from "react";
import imgHome from "../assets/img/home_image.jpg";
import { useScrollContext } from "../contexts/ScrollBodyProvider";
import { useViewPortContext } from "../contexts/ViewPortProvider";

function Home() {
  const coords = useViewPortContext();
  const { scrollPercent, scrollPercentPrevious } = useScrollContext();

  const [title, setTitle] = useState("");
  const [timeouts, setTimeouts] = useState([]);

  const handleTyping = () => {
    const text = "_My name is Thien Nguyen";
    let result = "";
    let i = 0;
    let speed = 30;
    function typeWriter() {
      if (i < text.length) {
        result += text.charAt(i);
        i++;
        setTimeouts([...timeouts, setTimeout(typeWriter, speed)]);
      }
      setTitle(result);
    }
    typeWriter();
  };
  useEffect(() => {
    setTimeouts(...[setTimeout(handleTyping, 1000)]);
    return () => {
      for (let index in timeouts) {
        clearTimeout(timeouts[index]);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    //  Homepage
    <>
      <div
        id="home"
        className="w-full h-full flex flex-col lg:flex-row items-center justify-center snap-start"
      >
        <div
          className={`lg:w-[60%] lg:h-full w-full h-[40%] flex lg:items-end items-end justify-between ${
            coords <= 1023 || scrollPercent >= 20 ? "border-r-0" : "border-r-2"
          }  border-primary  lg:p-containerLarge p-containerSmall transition-all duration-300 ease-in-out`}
        >
          <div className="w-[70%]  flex flex-col items-start justify-start gap-[10px]   ">
            <h2
              className={`sm:text-xl text-md leading-relaxed animate__animated  relative animate__animated animate__fadeIn  animate__fast select-none transition-all duration-500 ease-in-out 
              ${
                scrollPercent >= 5 &&
                scrollPercentPrevious.current < scrollPercent
                  ? "animate__fadeOut"
                  : "animate__fadeIn opacity-1 visible"
              }`}
            >
              Hello There !, 👋
            </h2>
            <h3
              className={`sm:text-3xl text-xl leading-relaxed font-bold select-none animate__animated ${
                scrollPercent >= 10 &&
                scrollPercentPrevious.current < scrollPercent
                  ? "animate__fadeOut"
                  : "animate__fadeIn opacity-1 visible"
              } `}
            >
              <code>{title}</code> <span className="animate_typing" />
            </h3>
            <h4
              className={`sm:text-md text-xs animate__animated  select-none ${
                scrollPercent >= 15 &&
                scrollPercentPrevious.current < scrollPercent
                  ? "animate__bounceOut"
                  : "animate__bounceIn animate__fast animate__delay-2s opacity-1 visible"
              } `}
            >
              I'm Front End Developer
            </h4>

            <div
              className={`flex items-center justify-start w-full animate__animated } ${
                scrollPercent >= 20 &&
                scrollPercentPrevious.current < scrollPercent
                  ? "animate__lightSpeedOutRight"
                  : "animate__lightSpeedInRight animate__fast animate__delay-3s"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/james-nguyen-8157b8179/"
                target="_blank"
                rel="noreferrer"
                className="w-[30px] h-[30px]"
              >
                <i className="fab fa-linkedin text-gray-500 hover:text-primary transition-all duration-500 ease-in-out " />
              </a>
              <a
                id="profile-link"
                href="https://github.com/jamesnguyenn"
                target="_blank"
                rel="noreferrer"
                className="w-[30px] h-[30px]"
              >
                <i className="fab fa-github text-gray-500 hover:text-primary transition-all duration-500 ease-in-out" />
              </a>
              <a
                href="https://www.facebook.com/LaoTo95/"
                target="_blank"
                rel="noreferrer"
                className="w-[30px] h-[30px]"
              >
                <i className="fab fa-facebook text-gray-500 hover:text-primary transition-all duration-500 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`lg:w-[40%] lg:h-full w-full h-[60%] animate__animated  animate__fast ${
            scrollPercent > 23 && scrollPercentPrevious.current < scrollPercent
              ? "animate__fadeOut"
              : "animate__fadeIn"
          }`}
        >
          <img
            src={imgHome}
            alt="home_james_portfolio"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
