import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ArrowSvg = () => {
  useGSAP(() => {
    gsap.to(".rects", {
      opacity: 0,
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      stagger: 0.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <svg
      viewBox="0 0 24 21"
      fill="none"
      className=" h-[40px] w-[40px] rotate-45"
    >
      <rect y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="3" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="6" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="9" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="12" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="15" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="21" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="18" y="9" width="3" className="rects" height="3" fill="white" />
      <rect x="18" y="12" width="3" className="rects" height="3" fill="white" />
      <rect x="18" y="6" width="3" className="rects" height="3" fill="white" />
      <rect x="15" y="15" width="3" className="rects" height="3" fill="white" />
      <rect x="15" y="3" width="3" className="rects" height="3" fill="white" />
      <rect x="12" y="18" width="3" className="rects" height="3" fill="white" />
      <rect x="12" width="3" className="rects" height="3" fill="white" />
    </svg>
  );
};

export default ArrowSvg;
