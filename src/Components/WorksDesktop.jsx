import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/WorksDesktop.module.scss";
import { Works } from "../Project Data";
import { Canvas } from "@react-three/fiber";
import WorksFloatingModel from "./WorksFloatingModel";
import gsap from "gsap";

const WorksDesktop = () => {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <div className={`${styles.Container} `}>
      <div
        onMouseLeave={() => setActiveProject(null)}
        className={`${styles.WorksListContainer}`}
      >
        <Stripe />
        {Works.map((work, index) => {
          return (
            <div
              key={index}
              className={`${styles.WorkContainer} w-[100%] pt-[20px] group `}
              onMouseOver={() => {
                setActiveProject(index);
              }}
              onClick={() => alert("Helllo")}
            >
              <div
                className={`${styles.TitlesContainer} w-[100%] flex items-center flex-row mb-[20px] px-[10%]`}
              >
                <span className="text-[64px] group-hover:opacity-40 group-hover:-translate-x-[20%] transition-all duration-800">
                  {work.title}
                </span>
                <span className="ml-auto group-hover:opacity-40 group-hover:translate-x-[20%] transition-all duration-800">
                  {work.Genre}
                </span>
              </div>
              <Stripe />
            </div>
          );
        })}
      </div>
      <div className={`${styles.CanvasContainer}`}>
        <Canvas>
          <WorksFloatingModel activeProject={activeProject} />
        </Canvas>
      </div>
    </div>
  );
};

const Stripe = () => (
  <div className="block w-[100%] h-[1px] bg-[#ffffff] opacity-30"></div>
);

export default WorksDesktop;
