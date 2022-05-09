import React from "react";
import { useViewPortContext } from "../contexts/ViewPortProvider";
import imageAbout from "../assets/img/about_image.jpg";
import { useScrollContext } from "../contexts/ScrollBodyProvider";

function About() {
  const coords = useViewPortContext();
  const { scrollPercent, scrollPercentPrevious } = useScrollContext();

  return (
    //AboutPage
    <>
      <div
        id="about"
        className="w-full h-full flex flex-col lg:flex-row items-center justify-between snap-start overflow-hidden"
      >
        {coords > 1023 && (
          <div
            className={`w-[30%] h-full animate__animated  overflow-hidden border-r-2 border-primary select-none  ${
              scrollPercent >= 48 &&
              scrollPercentPrevious.current < scrollPercent
                ? " animate__fadeOut"
                : "opacity-1 visible animate__fadeIn"
            } `}
          >
            <img
              src={imageAbout}
              alt="about_james_portfolio"
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
        <div
          className={`lg:w-[70%] w-full h-full   animate__animated  select-none  ${
            scrollPercent >= 48 && scrollPercentPrevious.current < scrollPercent
              ? " animate__fadeOut"
              : "opacity-1 visible animate__fadeIn animate__fast animate__delay-1s"
          } `}
        >
          <div
            className={`w-full h-[70%] border-b-2 border-primary flex items-center`}
          >
            <div className="xl:w-[20%] w-[30%] h-full border-r-2 border-primary flex items-center justify-center ">
              <h3
                className={`-rotate-90 uppercase  whitespace-nowrap  font-bold sm:text-3xl text-xl select-none transition-all duration-400 ease-in-out  `}
              >
                About Me_
              </h3>
            </div>
            <div className="xl:w-[80%] w-[70%] h-full ">
              <ul className=" w-full h-full flex flex-col items-start justify-center gap-[5px] p-[40px] overflow-hidden">
                {skillData.map((item) => {
                  return (
                    <li
                      className="list-disc  text-xs md:text-md lg:text-lg "
                      key={item.id}
                    >
                      {item.skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full h-[30%] flex items-center justify-center md:p-containerSmall p-4 text-sm md:text-md lg:text-lg leading-relaxed over ">
            With the passion is to be an Front End Engineer ( UI/UX design,
            programing languages, develope interesting features... ). I
            continuously updating my skill sets, fixing knowledge base and
            solving problems, intends to progress rapidly with greater
            responsibilities.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
const skillData = [
  {
    id: 1,
    skill:
      "Strong hand-coding ability of vanilla JavaScript(ES5/ES6/ESNext), ReactJS (Hooks, Redux/Redux-Toolkit), HTML5, CSS3, SASS, BOOTSTRAP, TAILWINDS, MATERIAL UI.",
  },
  { id: 2, skill: "Solid understanding of latest web technologies." },
  {
    id: 3,
    skill: "Write well organised, efficient and reusable code.",
  },
  { id: 4, skill: "Experience working with Git (GitHub)." },
  {
    id: 5,
    skill:
      "Agile methodologies, robust team player with excellent attention to details.",
  },
  { id: 6, skill: "Exceptionally motivated, passionate and adaptable." },
  {
    id: 7,
    skill:
      "Willing to experiment and learn, out of the box thinker and humorous person.",
  },
  {
    id: 8,
    skill:
      "Decent verbal and written communication skills in both English and Vietnamese.",
  },
  {
    id: 9,
    skill: "Strong about reading and search documentation on Google.",
  },
];
