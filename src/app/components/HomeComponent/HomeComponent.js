import React from "react";
import { Hind } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nanoid } from "nanoid";
import { useState } from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiWordpress,
  DiGit,
  DiGithubBadge,
  DiResponsive,
} from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaUniversalAccess } from "react-icons/fa";
import {
  SiOpenapiinitiative,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

let settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  loop: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1760,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HomeComponent() {
  const [skills, setSkills] = useState([
    { icon: <DiHtml5 />, title: "HTML5" },
    { icon: <DiCss3 />, title: "CSS3" },
    { icon: <IoLogoJavascript />, title: "javascript + ES6" },
    { icon: <SiTypescript />, title: "typescript" },
    { icon: <DiSass />, title: "SASS" },
    { icon: <VscJson />, title: "JSON" },
    { icon: <SiOpenapiinitiative />, title: "OPEN APIS" },
    { icon: <FaBootstrap />, title: "bootstrap 5" },
    { icon: <SiTailwindcss />, title: "tailwind css" },
    { icon: <DiReact />, title: "react" },
    { icon: <SiNextdotjs />, title: "next.js" },
    { icon: <SiFirebase />, title: "firebase" },
    { icon: <DiWordpress />, title: "wordpress" },
    { icon: <DiGit />, title: "git" },
    { icon: <DiGithubBadge />, title: "github" },
    { icon: <FaUniversalAccess />, title: "Accessibility" },
    { icon: <DiResponsive />, title: "Responsive design" },
  ]);
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(62deg, #EEF7FB 0% 50%, #48AFDb 0% 100%",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
          zIndex: "100",
        }}
      >
        <div className="container m-auto ">
          <div className="grid grid-cols-12 ">
            <div className=" bg-white  flex flex-col justify-center col-span-12 md:col-span-5  md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 md:py-0 py-20 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE]   text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-7xl md:text-6xl lg:text-7xl xl:text-8xl mt-5 md:mt-3">
                    I am Michael
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase text-md md:text-xs lg:text-xl ${hind.className}`}
                  >
                    Web Developer
                  </h2>

                  <Link
                    href="/#portfolio"
                    className={`inline-block bg-[#48AFDE] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  >
                    Projects
                  </Link>
                  <a
                    href="Michael_Bridgeman_Resume_6_24.pdf"
                    download="Michael_Bridgeman_Resume_6_24.pdf"
                    className={`ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#48AFDE] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            {/*implementing the profile image*/}
            <div className=" md:col-span-7 col-span-12 md:pt-[130px] pt-[50px] md:bg-transparent bg-[#d9eef7]">
              <div
                className="m-auto container"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  className="rounded-xl mx-auto block"
                  alt="Michael's Headshot"
                  src="/logos_and_photos/DSC06519-cropped_500px.webp"
                  decoding="async"
                  data-nimg="intrinsic"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "50%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="lg:py-10 py-10 md:py-6 cursor-all-scroll">
            <Slider {...settings}>
              {skills.map((skill) => {
                return (
                  <div
                    className="flex justify-center items-center h-12"
                    key={nanoid}
                  >
                    {React.cloneElement(skill.icon, {
                      size: 50, // Adjust size if needed
                      className:
                        "grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer",
                    })}
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
