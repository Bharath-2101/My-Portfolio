import React from "react";
import styles from "./styles/Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.LogoCon}>
      <svg viewBox="-12.5 -12.5 125 125" className={styles.LogoSVG}>
        <circle cx="50" cy="50" r="10" fill="white" />
        <rect x="10" y="28" height="16" width="16" />
        <rect x="28" y="10" height="16" width="16" />
        <rect x="74" y="28" height="16" width="16" />
        <rect x="56" y="10" height="16" width="16" />
        <rect x="74" y="56" height="16" width="16" />
        <rect x="56" y="74" height="16" width="16" />
        <rect x="10" y="56" height="16" width="16" />
        <rect x="28" y="74" height="16" width="16" />
        <line x1="50" x2="50" y1="18" y2="82" />
        <line x1="18" x2="82" y1="50" y2="50" />
        <line x1="18" x2="18" y1="38" y2="58" />
        <line x1="82" x2="82" y1="38" y2="58" />
        <line x1="38" x2="58" y1="18" y2="18" />
        <line x1="38" x2="58" y1="82" y2="82" />
      </svg>
    </div>
  );
};

export default Logo;
