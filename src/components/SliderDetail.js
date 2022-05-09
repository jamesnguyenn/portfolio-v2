import React, { memo } from "react";
import Button from "./Button";

function SliderDetail({
  href,
  title = "",
  children,
  className = "",
  urlBackground = "",
  positionImage = "top center",
  buttonText = "Check more...",
}) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: urlBackground,
        backgroundRepeat: "no-repeat",
        backgroundPosition: positionImage,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-black -z-1 opacity-30" />
      <a
        className="projects-item text-secondary w-full h-full flex items-end justify-end p-4 relative z-10"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="lg:w-[35%] w-full project-body flex flex-col items-start justify-start gap-[20px] p-5 bg-secondary bg-opacity-90 text-black rounded-lg pointer-events-none">
          <div className="project-title">
            <h5 className="lg:text-2xl text-lg font-bold uppercase">{title}</h5>
          </div>
          <div className="project-desc text-left flex flex-col items-start justify-center gap-[5px] text-xs">
            {children}
          </div>
          <Button style={{ width: "100%" }}>
            <span>{buttonText}</span>
          </Button>
        </div>
      </a>
    </div>
  );
}

export default memo(SliderDetail);
