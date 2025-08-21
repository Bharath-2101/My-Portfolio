import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const HeroSectionCurve = ({ fill, filterColor, styles }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth * 2 : 0,
    height: 300,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const newWidth = window.innerWidth * 2;
      if (Math.abs(newWidth - dimensions.width) > 50) {
        gsap.set(containerRef.current, { opacity: 0 });

        setDimensions((prev) => ({
          ...prev,
          width: newWidth,
        }));

        setTimeout(() => {
          ScrollTrigger.refresh();
          gsap.to(containerRef.current, {
            opacity: 1,
            duration: 0.3,
            onComplete: () => {
              if (animationRef.current) {
                animationRef.current.progress(
                  ScrollTrigger.getById("curveTrigger")?.progress || 0
                );
              }
            },
          });
        }, 100);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions.width]);

  useGSAP(() => {
    if (!pathRef.current) return;
    if (animationRef.current) {
      animationRef.current.kill();
    }

    animationRef.current = gsap.to(pathRef.current, {
      morphSVG: `M0 0 L${dimensions.width} 0 Q${dimensions.width / 2} 30 0 0`,
      ease: "cubic-bezier(0.76, 0, 0.24, 1)",
      immediateRender: false,
    });

    const trigger = ScrollTrigger.create({
      id: "curveTrigger",
      trigger: containerRef.current,
      start: "top 70%",
      end: "top 20%",
      scrub: true,
      animation: animationRef.current,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (animationRef.current) {
          animationRef.current.progress(self.progress);
        }
      },
    });

    return () => {
      trigger?.kill();
    };
  }, [dimensions.width]);

  return (
    <div
      ref={containerRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        bottom: -dimensions.height + 0.5,
        left: -dimensions.width * 0.25,
      }}
      className={`${styles} absolute z-10 pointer-events-none`}
    >
      <svg className="h-full w-full" fill={fill} preserveAspectRatio="none">
        <path
          ref={pathRef}
          d={`M0 0 L${dimensions.width} 0 Q${dimensions.width / 2} ${
            dimensions.height * 2
          } 0 0`}
          filter={`drop-shadow(0px 8px 6px ${filterColor})`}
        />
      </svg>
    </div>
  );
};

export default React.memo(HeroSectionCurve);
