import React from "react";
import styles from "./styles/Works.module.scss";
import { mobileWorks } from "../Project Data";

const Works = () => {
  return (
    <div className={`${styles.Container}`}>
      <div
        className={`${styles.CardsHolder} grid-cols-1 sm:grid-cols-2 gap-[80px] sm:gap-[clamp(10px, 2.5vw, 25px);]`}
      >
        {mobileWorks.map((Project, index) => (
          <div key={index} className={`${styles.Card}`}>
            <div className={`${styles.CardImgCon}`}>
              <img src={Project.image} alt="" className={`${styles.CardImg}`} />
            </div>
            <div className={`${styles.CardDesc}`}>
              <div className={styles.MainTitle}>
                <span className="">{Project.title}</span>
              </div>
              <Stripe />
              <div className={`${styles.SubTitleCon}`}>
                <div>
                  <span className="text-left">{Project.Genre}</span>
                </div>
                <div>
                  <span className="text-right">2004</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Stripe = () => (
  <div className="block w-[100%] h-[1px] bg-[#121212] opacity-30"></div>
);

export default Works;
