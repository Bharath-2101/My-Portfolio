import React, { useEffect } from "react";
import SideMenu from "../Sections/SideMenu";
import HeroSection from "../Sections/HeroSection";
import AboutMe from "../Sections/AboutMe";
import WorksSection from "../Sections/WorksSection";
import FooterSection from "../Sections/FooterSection";

const Home = () => {
  return (
    <div>
      <SideMenu />
      <HeroSection />
      <AboutMe />
      <WorksSection />
      <FooterSection />
      {/* <div className="h-[100dvh] w-screen"></div> */}
    </div>
  );
};

export default Home;
