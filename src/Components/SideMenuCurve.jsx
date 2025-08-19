import React, { useState, useEffect, useRef } from "react";
import useStore from "../Hooks/useStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideMenuCurve = () => {
  const isDesktop = window.innerWidth >= 900;
  const pathRef = useRef();
  const { hamburgerClick, height } = useStore();
  const Curveheight = isDesktop ? window.innerHeight : height;

  useGSAP(() => {
    if (hamburgerClick) {
      gsap.to(pathRef.current, {
        morphSVG: final,
        duration: 0.8,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
    } else {
      gsap.to(pathRef.current, {
        morphSVG: inital,
        duration: 0.8,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });
    }
  }, [hamburgerClick]);
  const inital = `M100 0 L100 ${Curveheight} Q-100 ${Curveheight / 2} 100 0`;
  const final = `M100 0 L100 ${Curveheight} Q100 ${Curveheight / 2} 100 0`;

  return (
    <svg
      style={{ height: `${Curveheight}px`, width: "100px" }}
      className="absolute top-0 left-[-99px]"
    >
      <path ref={pathRef} d={inital} fill="#485e97" />
    </svg>
  );
};

export default SideMenuCurve;
