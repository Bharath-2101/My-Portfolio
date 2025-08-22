import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import FooterSection from "./FooterSection";

const Layout = () => {
  return (
    <>
      <SideMenu />
      <main>
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
};

export default Layout;
