import React from "react";
import SideMenu from "../Sections/SideMenu";
import HeroSection from "../Sections/HeroSection";

const Home = () => {
  return (
    <div>
      <SideMenu />
      <HeroSection />
      <div className="h-[100dvh] w-screen"></div>
    </div>
  );
};

export default Home;
