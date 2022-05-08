import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useScrollContext } from "../contexts/ScrollBodyProvider";

function NavLinks({ className }) {
  const [active, setActive] = useState("Home");
  const { scrollPercent: scrollPosition } = useScrollContext();
  const pageHeight = document.body.clientHeight;
  const pageDetailHeight = pageHeight / navData.length;

  useEffect(() => {
    const currentScroll = (scrollPosition * pageHeight) / 100;

    if (currentScroll < pageDetailHeight) {
      setActive("Home");
    } else if (
      currentScroll >= pageDetailHeight &&
      currentScroll < pageDetailHeight * 2
    ) {
      setActive("About Me");
    } else if (
      currentScroll >= pageDetailHeight * 2 &&
      currentScroll < pageDetailHeight * 3
    ) {
      setActive("Project");
    } else {
      setActive("Contact");
    }
  }, [pageDetailHeight, pageHeight, scrollPosition]);

  const handleOnClickNav = useCallback(
    (title, href) => {
      setActive(title);
      switch (href) {
        case "#home":
          document.documentElement.scrollTop = 0;
          break;
        case "#about":
          document.documentElement.scrollTop = pageDetailHeight;
          break;
        case "#project":
          document.documentElement.scrollTop = pageDetailHeight * 2;
          break;
        case "#contact":
          document.documentElement.scrollTop = pageDetailHeight * 3;
          break;
        default:
          document.documentElement.scrollTop = 0;
      }
    },
    [pageDetailHeight]
  );
  return (
    <ul className={className}>
      {navData.map((nav, index) => {
        return (
          <li
            key={index}
            className={` py-2 px-4 rounded transition-all duration-300 ease-in-out w-[100px] flex items-center justify-center z-10 cursor-pointer  ${
              nav.title === active
                ? " text-primary font-bold"
                : "text-[#525252]"
            } `}
            onClick={(e) => {
              return handleOnClickNav(nav.title, nav.href);
            }}
          >
            <span className="uppercase text-xs w-full flex items-center justify-center pointer-events-none select-none">
              {nav.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(NavLinks);

const navData = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "Project",
    href: "#project",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
