import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import SliderDetail from "../components/SliderDetail";
import netflixClone from "../assets/img/netflix_clone.jpg";
import weatherApp from "../assets/img/weather_app.jpg";
import unplashApp from "../assets/img/unplash_app.jpg";
import todoApp from "../assets/img/todo_app.jpg";
// Import Swiper styles

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Project() {
  return (
    <>
      <div
        id="about"
        className="w-full h-full flex flex-col lg:flex-row relative "
      >
        <div className="w-full h-[20%] lg:w-[20%] lg:h-full lg:border-r-2 text-center p-4 flex flex-col items-center justify-center border-b-2 border-primary uppercase gap-[10px]">
          <div className="font-bold text-3xl animate__animated animate__fadeInDown">
            _Project
          </div>
          <p className="text-xs animate__animated animate__fadeIn animate__delay-1s">
            Just to give an overall idea what I am capable of, some of my
            projects are included here.
          </p>
        </div>

        <div className="w-full h-[80%] lg:w-[80%] lg:h-full flex flex-wrap cursor-grab animate__animated animate__fadeIn animate__delay-2s">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projectData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <SliderDetail
                    className="w-full h-full cursor-pointer"
                    urlBackground={`url(${item.image})`}
                    title={item.title}
                    href={item.href}
                  >
                    <strong>{item.desc.feature.title}</strong>
                    {item.desc.feature.desc}
                    <br />
                    <strong>{item.desc.technologies.title}</strong>
                    {item.desc.technologies.desc}
                  </SliderDetail>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default memo(Project);

const projectData = [
  {
    id: 1,
    title: "Unsplash Photo App",
    image: unplashApp,
    href: "https://jamesnguyenn.github.io/unplash-photo/",
    desc: {
      feature: {
        title: "Features:",
        desc: "A photo library application. Its a fun project, tried to explore and implement hooks, react-router, context-API, search photo, keep photo you've liked",
      },
      technologies: {
        title: "Technologies:",
        desc: "ReactJS, React Router V6, Context API, Unsplash Data API",
      },
    },
  },
  {
    id: 2,
    title: "Netflix Clone Page",
    image: netflixClone,
    href: "https://netflix-clone-ab852.web.app/",
    desc: {
      feature: {
        title: "Features:",
        desc: "Clone Homepage of Netflix with display data scroll width",
      },
      technologies: {
        title: "Technologies:",
        desc: "ReactJS (Hooks), Context API, Firebase , TMDB Data API",
      },
    },
  },
  {
    id: 3,
    title: "Weather App",
    image: weatherApp,
    href: "https://jamesnguyenn.github.io/weather-app/",
    desc: {
      feature: {
        title: "Features:",
        desc: "Get information about your current weather. Search another location weather, Dark/Light theme mode.",
      },
      technologies: {
        title: "Technologies:",
        desc: "ReactJS(Hooks), React Router V6, Styled Components, Material UI Icons, Context, Axios, OpenWeather API.",
      },
    },
  },
  {
    id: 4,
    title: "Todo App",
    image: todoApp,
    href: "https://jamesnguyenn.github.io/todoapp-v2/",
    desc: {
      feature: {
        title: "Features:",
        desc: "This App have CRUD todo jobs using everyday, and also have search & filter jobs features ",
      },
      technologies: {
        title: "Technologies:",
        desc: "ReactJS (Hooks), Redux(Redux Tookit)",
      },
    },
  },
];
