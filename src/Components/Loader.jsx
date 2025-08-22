import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import styles from "./styles/Loader.module.scss";

const Loader = () => {
  const loader = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "cubic-bezier(0.76, 0, 0.24, 1)" },
    });

    const paths = gsap.utils.toArray(".paths");

    paths.forEach((path) => {
      tl.from(path, { drawSVG: "0%" }, ">");
    });
    tl.to(loader.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.5,
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
    });
  });
  return (
    <div
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      ref={loader}
      className={`${styles.Container} h-[100dvh] flex-col sm:flex-row`}
    >
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M1.42578 52.5744 C8.21302 40.3672 8.36293 21.0534 1.42578 9.32227 C48.3456 -10.4502 136.131 6.23323 84.6706 46.3957 C164.89 126.721 -82.5759 111.274 31.6976 46.3955 C77.1025 21.0631 36.9937 13.6477 33.2098 34.038 C27.1541 66.6648 25.6428 89.0301 46.8336 83.4691 C83.1565 76.0535 70.2914 38.3629 29.4258 63.0774"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M33.8867 67.6113 L33.8869 99.7422 C-21.1987 107.775 16.6213 19.4159 1 3.35059 C39.6421 -5.48537 36.3534 10.5804 33.8869 51.546 C39.6419 25.0382 63.4849 25.0385 67.5958 50.7427 C65.6466 91.4196 62.3579 107.485 101 98.6478 C85.3787 82.5841 123.199 -5.77481 68.1131 2.25783 L68.1133 34.3887"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M92.9665 57.6797 C90.0352 79.757 95.6656 93.7534 100.999 98.1638 C65.8395 100.928 61.7635 92.6462 60.834 73.873 C51.1671 70.8482 45.8538 70.5248 36.7354 73.8724 C35.1374 83.5473 34.9868 88.8762 36.7342 98.1635 C12.6351 104.641 -7.44735 101.402 4.6017 73.873 C15.7263 45.7492 18.2589 22.8634 12.6357 1.00195 C68.4564 5.12325 93.8109 9.15154 92.9671 33.3873 C92.1643 52.8211 67.9512 65.776 68.8682 33.3887 C31.9138 2.62018 37.5381 84.3993 68.8665 44.7247"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M11.4022 26.7501 C-22.1958 -16.5458 159.984 -5.8983 71.1328 63.6597 C79.2089 84.8748 83.081 88.5024 101 97.7295 C55.4547 108.376 50.9749 92.0511 41.2686 62.9502 C33.2309 75.3955 31.285 83.0002 33.8024 97.7293 C-7.26188 101.988 -3.52941 86.373 11.4037 40.9473 C20 14.4999 64.5 31 41.2689 55.1428 C20.9994 35.5002 63 11.5 65.9999 40.0002"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M92.9665 57.6797 C90.0352 79.757 95.6656 93.7534 100.999 98.1638 C65.8395 100.928 61.7635 92.6462 60.834 73.873 C51.1671 70.8482 45.8538 70.5248 36.7354 73.8724 C35.1374 83.5473 34.9868 88.8762 36.7342 98.1635 C12.6351 104.641 -7.44735 101.402 4.6017 73.873 C15.7263 45.7492 18.2589 22.8634 12.6357 1.00195 C68.4564 5.12325 93.8109 9.15154 92.9671 33.3873 C92.1643 52.8211 67.9512 65.776 68.8682 33.3887 C31.9138 2.62018 37.5381 84.3993 68.8665 44.7247"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M43.3674 67.2891 C34.3482 64.6514 34.7224 47.8722 35.5215 17.5723 C35.5 32.5 31.9994 35.5 51.2136 34.1446 C-19.3994 35.8018 9.63053 23.3726 1 1 C92.7974 6.79943 108.489 -12.2581 98.2896 34.1475 C83.6835 31.9915 76.6555 31.802 66.9062 34.1448 C65.428 66.7629 63.3258 88.2179 70.0435 100.434 C38.6591 102.091 33.9526 102.091 32.3818 71.4326"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="aspect-square w-[15.5%] xs:w-[8%]"
        viewBox="0 0 102 102"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M33.8867 67.6113 L33.8869 99.7422 C-21.1987 107.775 16.6213 19.4159 1 3.35059 C39.6421 -5.48537 36.3534 10.5804 33.8869 51.546 C39.6419 25.0382 63.4849 25.0385 67.5958 50.7427 C65.6466 91.4196 62.3579 107.485 101 98.6478 C85.3787 82.5841 123.199 -5.77481 68.1131 2.25783 L68.1133 34.3887"
          stroke="black"
          className="paths"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Loader;
