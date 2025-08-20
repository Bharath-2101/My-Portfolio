import React, { useEffect, useState } from "react";
import styles from "./styles/WorksSection.module.scss";
import WorksDesktop from "../Components/WorksDesktop";
import Works from "../Components/Works";

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
    </div>
  );
};

export default WorksSection;
