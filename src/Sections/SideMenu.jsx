import React, { useRef } from "react";
import Hamburger from "../Components/Hamburger";
import { NavLinks, SocialMedia } from "../Project Data";
import styles from "./styles/SideMenu.module.scss";
import useStore from "../Hooks/useStore";
import SideMenuCurve from "../Components/SideMenuCurve";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideMenu = () => {
  const sideMenuRef = useRef();
  const { currentPage, setCurrentPage, hamburgerClick } = useStore();
  useGSAP(() => {
    if (hamburgerClick) {
      gsap.to(sideMenuRef.current, {
        xPercent: 0,
        x: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
    } else {
      gsap.to(sideMenuRef.current, {
        xPercent: 100,
        x: 100,
        duration: 0.8,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
    }
  }, [hamburgerClick]);
  return (
    <>
      <Hamburger />
      <div
        ref={sideMenuRef}
        className="h-[100vh] w-[100vw] xs:w-[400px] fixed top-0 right-0 bg-[#485e97] flex flex-col transform md:translate-x-[calc(400px+100px)] translate-x-[calc(100vw+100px)]"
      >
        <SideMenuCurve />
        <div className="h-[clamp(4em+60px,5.5vw+60px,5em+60px)] w-full flex items-center justify-center relative">
          <span className="text-[20px] text-[#fff] opacity-40">Navigation</span>
          <span className="h-[1px] w-[80%] bg-[#4a4a4a] absolute bottom-0 left-[10%]" />
        </div>

        <div className="flex-1 grid grid-rows-[10fr_3fr]">
          <div className="flex flex-col justify-evenly items-center">
            {NavLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => setCurrentPage(link.title)}
                className="text-[42px] font-[600] relative group cursor-pointer"
              >
                <span className="opacity-60 relative z-10">{link.title}</span>
                <span
                  className={`
      h-[5px] w-[120%] bg-red-900 absolute top-1/2 -left-[10%] rounded-full 
      transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-left z-10
      ${currentPage === link.title ? "scale-x-100" : "scale-x-0"} 
      group-hover:scale-x-100
    `}
                />
              </a>
            ))}
          </div>
          <div className="flex flex-row pt-[40px] md:pt-0 md:items-center justify-evenly relative text-[#fff]">
            <span className="h-[1px] w-[80%] bg-[#4a4a4a] absolute top-[0%] left-[10%]" />
            {SocialMedia.map((media, index) => (
              <a key={index} className="text-[12px]">
                <span className="UnderlineEffect opacity-40">
                  {media.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
