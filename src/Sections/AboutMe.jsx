import React from "react";
import styles from "./styles/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={`${styles.Container}`}>
      {/* MainTitle */}
      <div className={`${styles.MainTitle}`}>ABOUT ME</div>
      <div className={styles.AboutMeButton}>
        <span>ABOUT ME</span>
        {[...Array(4)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div
        className={` ${styles.SubContainer} flex flex-col md:flex-row gap-[30px] md:gap-0`}
      >
        <div className={`${styles.SubMainTitle} flex-3`}>
          For me, design, code, and interaction are more than skills.They are
          tools to shape stories, solve problems, and leave a lasting impact.
        </div>
        <div
          className={`${styles.SubSubTitle} flex-2 w-[50%] px-[5vw] md:px-[2vw]`}
        >
          <div className="md:w-[70%] ">
            The combination of my passion for design, code & interaction
            positions me in a unique place .
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
