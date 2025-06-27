import { useTranslation } from "react-i18next";
import { useIsVisible } from "react-is-visible";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const Banner = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const text = t("promo.bannerTitle");

    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (isVisible && !play) setPlay(true);
    }, [isVisible]);

    return (
        <div ref={ref} className={styles.banner}>
            {play && <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.icon}
                style={{ willChange: "transform, opacity" }}
                initial={{ translateX: -200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .3
                }}
            />}
            {play && <motion.h1 
                className={`${styles.bannerTitle} h1 text-shadow-red`}
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
                style={{ willChange: "transform, opacity" }}
            >{text}</motion.h1>}
            {play && <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.icon}
                style={{ willChange: "transform, opacity" }}
                initial={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .3
                }}
            />}
        </div>
    )
};