import React from "react";
import certify1 from "../assets/img/certify_1.png";
import certify2 from "../assets/img/certify_2.png";
import certify3 from "../assets/img/certify_3.png";
import certify4 from "../assets/img/certify_4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import Button from "../components/Button";

const certifyData = [
  {
    id: 1,
    image: certify1,
    href: "https://fullstack.edu.vn/cert/zbjxm?fbclid=IwAR3A4K8zfHRP0RzhNqLcfaeTK8p4EuUhj9djxvG9R6hCQrHlDQhwhiVnnkA",
  },
  {
    id: 2,
    image: certify2,
    href: "https://www.hackerrank.com/certificates/8a9e03a48bb6",
  },
  {
    id: 3,
    image: certify3,
    href: "https://www.hackerrank.com/certificates/84c9d3087fe4",
  },
  {
    id: 4,
    image: certify4,
    href: "https://www.hackerrank.com/certificates/07c7c9f99441",
  },
];

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full h-full flex flex-col xl:flex-row items-center justify-start "
      >
        <div className="xl:w-[60%] xl:h-full w-full h-[70%] xl:border-r-2 border-b-2 border-primary ">
          <div className="w-full h-[10%] xl:h-[20%] border-b-2 border-primary font-bold text-2xl sm:text-3xl flex items-center justify-center uppercase ">
            <div className="w-full h-full flex items-center justify-center animate__animated animate__fadeInDown ">
              _Certifications
            </div>
          </div>
          <div className="w-full h-[90%] xl:h-[80%]  flex items-center justify-center overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {certifyData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <a
                      className="w-full h-full bg-secondary flex items-center justify-center  relative z-10"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={item.image}
                        alt="certify_james"
                        className="w-[70%] h-[70%] object-contain"
                      />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="xl:w-[40%] xl:h-full w-full h-[30%] flex flex-col items-center justify-center gap-[15px] animate__animated animate__fadeIn animate__delay-2s p-2">
          <h3 className="w-full text-center  text-md sm:text-xl  ">
            Thanks you for watching my portfolio. 🤗
          </h3>
          <h3 className="w-full text-center text-sm sm:text-md">Find me on:</h3>
          <div className="w-full text-center flex items-center justify-center gap-[10px] text-2xl">
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
          <Button>
            <span className="uppercase text-xs">Dowload My CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;
