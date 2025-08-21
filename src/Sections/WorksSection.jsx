import React, { useEffect, useState } from "react";
import styles from "./styles/WorksSection.module.scss";
import WorksDesktop from "../Components/WorksDesktop";
import Works from "../Components/Works";
import HeroSectionCurve from "../Components/HeroSectionCurve";

const WorksSection = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.MainContainer}`}>
      <div className={`${styles.MainTitle}`}>RECENT WORKS</div>
      {isDesktop ? <WorksDesktop /> : <Works />}
      <div
        className="w-full flex justify-center items-center"
        style={{ marginTop: `calc(clamp(4rem, 4.5vw, 5rem) + 60px)` }}
      >
        <div className={styles.AboutMeButton}>
          <span>
            ALL WORKS<sup className="opacity-50">11</sup>
          </span>
          {[...Array(4)].map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>

      <HeroSectionCurve
        fill="#FFFFFF"
        filterColor="rgba(255,255,255,0.7)"
        styles="xs:block hidden"
      />
    </div>
  );
};

export default WorksSection;
