import React, { useEffect, useState } from 'react';
import certify1 from '../assets/img/certify_1.png';
import certify2 from '../assets/img/certify_2.png';
import certify3 from '../assets/img/certify_3.png';
import certify4 from '../assets/img/certify_4.png';
import certify5 from '../assets/img/certify_5.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import Button from '../components/Button';
import HandSlideAnimation from '../components/HandSlideAnimation';

const certifyData = [
    {
        id: 1,
        image: certify1,
        href: 'https://www.hackerrank.com/certificates/5e7f9c83db41',
    },
    {
        id: 2,
        image: certify2,
        href: 'https://www.hackerrank.com/certificates/8a9e03a48bb6',
    },
    {
        id: 3,
        image: certify3,
        href: 'https://www.hackerrank.com/certificates/84c9d3087fe4',
    },
    {
        id: 4,
        image: certify4,
        href: 'https://www.hackerrank.com/certificates/07c7c9f99441',
    },
    {
        id: 5,
        image: certify5,
        href: 'https://fullstack.edu.vn/cert/zbjxm?fbclid=IwAR3A4K8zfHRP0RzhNqLcfaeTK8p4EuUhj9djxvG9R6hCQrHlDQhwhiVnnkA',
    },
];

function Contact() {
    const [isVisible, setVisible] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => setVisible(false), 6000);
        return () => {
            clearTimeout(id);
        };
    }, []);
    return (
        <>
            <div
                id="contact"
                className="w-full h-full flex flex-col xl:flex-row items-center justify-start overflow-hidden"
            >
                <div className="xl:w-[60%] xl:h-full w-full h-[60%] xl:border-r-2 border-b-2 border-primary ">
                    <div className="w-full h-[20%] border-b-2 border-primary font-bold sm:text-3xl text-xl flex items-center justify-center uppercase p-9">
                        <div className="w-full h-full flex items-center justify-center animate__animated animate__fadeInDown">
                            _Certifications
                        </div>
                    </div>
                    <div className="w-full h-[80%]  flex items-center justify-center overflow-hidden animate__animated animate__fadeIn animate__delay-1s ">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            spaceBetween={40}
                            className="mySwiper"
                        >
                            {certifyData.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <a
                                            className="w-full h-full bg-secondary flex items-center justify-center  relative z-10 "
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={item.image}
                                                alt="certify_james"
                                                className="w-[70%] h-full object-contain"
                                            />
                                            {isVisible && (
                                                <HandSlideAnimation color="#000" />
                                            )}
                                        </a>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className="xl:w-[40%] xl:h-full w-full h-[40%] flex xl:flex-col items-center justify-center animate__animated animate__fadeIn animate__delay-2s ">
                    <div className="w-full h-full xl:h-[70%] p-4  flex flex-col items-center justify-center gap-[20px] border-r-2  xl:border-b-2 border-primary">
                        <h3 className="w-full text-center  text-md sm:text-xl  ">
                            Thanks you for watching my portfolio. 🤗
                        </h3>
                        <h3 className="w-full text-center text-sm sm:text-md">
                            Find me on:
                        </h3>
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
                    </div>
                    <div className="w-full h-full xl:h-[30%] p-4  flex flex-col items-center justify-center gap-[10px]">
                        <Button>
                            <a
                                href="https://drive.google.com/file/d/1rEpOH8L531uMnir1xFJbit50WkNSGTkM/view?usp=sharing"
                                className=" w-[130px] flex items-center justify-center gap-[5px]"
                                target="_blank"
                                rel="noreferrer"
                                download
                            >
                                <span className=" uppercase text-xs">
                                    Download CV
                                </span>
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
                            </a>
                        </Button>
                        <Button>
                            <a
                                href="tel:+84902998513"
                                className=" w-[130px] flex items-center justify-center gap-[5px]"
                            >
                                <span className="uppercase text-xs">
                                    Call me
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </a>
                        </Button>
                        <Button>
                            <a
                                href="mailto:nguyenquangthien151095@gmail.com"
                                className="w-[130px] flex items-center justify-center gap-[5px]"
                            >
                                <span className="uppercase text-xs">
                                    Send Email
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                                    />
                                </svg>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
