import React from "react";
import styles from "./styles/Hamburger.module.scss";
import useStore from "../Hooks/useStore";
import { useGSAP } from "@gsap/react";

const Hamburger = () => {
  const { hamburgerClick, changeHamburgerClick } = useStore();

  return (
    <div
      onClick={changeHamburgerClick}
      className={`${styles.HamburgerCon} ${
        hamburgerClick ? styles.active : ""
      }`}
    >
      <span />
      <span />
    </div>
  );
};

export default Hamburger;
