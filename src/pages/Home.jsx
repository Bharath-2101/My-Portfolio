import React from "react";
import SideMenu from "../Sections/SideMenu";
import HeroSection from "../Sections/HeroSection";
import AboutMe from "../Sections/AboutMe";

const Home = () => {
  return (
    <div>
      <SideMenu />
      <HeroSection />
      <AboutMe />
      <div className="h-[100dvh] w-screen"></div>
    </div>
  );
};

export default Home;
