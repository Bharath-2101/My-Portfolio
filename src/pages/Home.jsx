import React, { useEffect } from "react";
import SideMenu from "../Sections/SideMenu";
import HeroSection from "../Sections/HeroSection";
import AboutMe from "../Sections/AboutMe";
import WorksSection from "../Sections/WorksSection";
import FooterSection from "../Sections/FooterSection";
import Loader from "../Components/Loader";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <WorksSection />
    </div>
  );
};

export default Home;
