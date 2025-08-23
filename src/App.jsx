import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects.jsx";
import Layout from "./Sections/Layout";
import Loader from "./Components/Loader.jsx";

gsap.registerPlugin(MorphSVGPlugin, SplitText, ScrollTrigger, DrawSVGPlugin);

const App = () => {
  const isTablet = window.innerWidth > 768;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: isTablet,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [isTablet]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="works" element={<Projects />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
