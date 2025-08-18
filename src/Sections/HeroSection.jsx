import React, { useRef } from "react";
import HoverGrid from "../Components/HoverGrid";
import styles from "./styles/HeroSection.module.scss";
import ArrowSvg from "../Components/ArrowSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const refs = {
    mainTitle: useRef(),
    subTextTop: useRef(),
    subTextBottom: useRef(),
    connect: useRef(),
  };

  useGSAP(() => {
    const textSplits = {
      mainTitle: new SplitText(refs.mainTitle.current, {
        type: "chars words",
        mask: "chars",
      }),
      subTextTop: new SplitText(refs.subTextTop.current, {
        type: "words",
        mask: "words",
      }),
      subTextBottom: new SplitText(refs.subTextBottom.current, {
        type: "words",
        mask: "words",
      }),
    };

    gsap
      .timeline()
      .from(textSplits.mainTitle.chars, {
        duration: 0.9,
        yPercent: 100,
        rotate: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "back",
      })
      .from(textSplits.subTextTop.words, {
        duration: 0.4,
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "back",
      })
      .from(textSplits.subTextBottom.words, {
        duration: 0.4,
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "back",
      })
      .from(refs.connect.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 0.9,
        ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      });

    gsap.to(textSplits.mainTitle.chars, {
      duration: 2,
      delay: 1.5,
      repeatDelay: 1,
      stagger: 0.3,
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      repeat: -1,
      color: "transparent",
      yoyo: true,
      yoyoEase: "cubic-bezier(0.76, 0, 0.24, 1)",
    });
    return () => {
      Object.values(textSplits).forEach((split) => split.revert());
    };
  }, []);

  const heroSectionClasses = `${styles.HeroSectionCon} grid-rows-[2fr_5fr] sm:grid-rows-[2fr_3fr]`;

  return (
    <div className={styles.MainContainer}>
      <HoverGrid />
      <div className={heroSectionClasses}>
        <div ref={refs.mainTitle} className={styles.HeroSectionTitle}>
          BHARATH KUMAR
        </div>
        <div className="grid h-full grid-rows-2 sm:grid-rows-1 sm:grid-cols-[3fr_2fr]">
          <div className="flex justify-center sm:items-center">
            <div className="flex flex-col gap-10 font-light">
              <ArrowSvg />
              <div className="flex flex-col">
                <span
                  ref={refs.subTextTop}
                  className={styles.HeroSectionSubTitle}
                >
                  Full Stack
                </span>
                <span
                  ref={refs.subTextBottom}
                  className={styles.HeroSectionSubTitle}
                >
                  Developer & Designer
                </span>
              </div>
            </div>
          </div>
          <div className="h-full flex justify-center items-center">
            <div ref={refs.connect} className={styles.ContactButton}>
              <span className="opacity-50">CONNECT</span>
              {[...Array(4)].map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
