import React, { useRef, useEffect } from "react";
import styles from "./styles/FooterSection.module.scss";
import { SocialMediaLinks } from "../Project Data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FooterSection = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={`${styles.MainTitle}`}>
        <span>LET’S CONNECT</span>
      </div>
      <div
        className={`${styles.SocialLinksCon} grid grid-cols-2 gap-10 sm:flex sm:flex-row sm:justify-evenly sm:items-center mt-[60px]`}
      >
        {SocialMediaLinks.map((mediaLinks, index) => (
          <div key={index} className={`${styles.LinkCon}`}>
            <span>{mediaLinks.title}</span>
            <span>{mediaLinks.title}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.FrameText}`}>
        <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center text-[#0B235D]">
          <span className="UnderlineEffect footerFont hover:scale-95 transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]">
            Hello@Bharath
          </span>
        </div>
        <img src="/images/Footerframe.svg" alt="frame" className="w-full" />
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Bharath. All rights reserved.
      </div>
    </div>
  );
};

export default FooterSection;
