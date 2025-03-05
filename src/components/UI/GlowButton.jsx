import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

import styles from "./GlowButton.module.css";

export const GlowButton = ({
  bg,
  glowColor,
  whiteSpace,
  text,
  label,
  width,
  height,
  onClick,
  flag,
  flagStyle,
  fontSize,
  bgWidth,
  style,
  shadowed,
  id
}) => {
  const controls = useAnimation();

  const handleGlowClick = (e) => {
    controls.start({
      scale: [1, 0.75, 1],
      transition: { duration: 0.2, ease: "easeInOut" },
    });

    // Execute the onClick function
    if (onClick) {
      setTimeout(() => {
        onClick(e);
      }, 300);
    }
  };

  return (
    <motion.div
      className={styles.buttonWrap}
      style={{ width, height, ...style }}
      animate={controls}
      onClick={handleGlowClick}
    >
      <div id={id} className={styles.btnLayout}></div>
      {label && <p>{label}</p>}
      <div
        className={styles.button}
        style={{
          background: bg,
          height,
          width: bgWidth,
          border: shadowed ? "1px solid #59657B" : "1px solid #000",
          boxShadow: shadowed ? "0px 1px 1px 0px #000" : "none",
        }}
      >
        <p style={{ fontSize }}>{text}</p>
        <div
          className={styles.glow}
          style={{ backgroundColor: glowColor }}
        ></div>
        {whiteSpace && <div className={styles.whiteSpace}></div>}
        {flag && (
          <img
            alt="flag"
            src={flag}
            className={styles.flag}
            style={flagStyle}
          />
        )}
      </div>
    </motion.div>
  );
};
