import { useTranslation } from "react-i18next";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const Banner = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} className={styles.banner}>
            {isVisible && <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.icon}
                initial={{ translateX: -200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut"
                }}
            />}
            {isVisible && <motion.h1 
                className={`${styles.bannerTitle} h1 text-shadow-red`}
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut"
                }}
            >{t("promo.bannerTitle")}</motion.h1>}
            {isVisible && <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.icon}
                initial={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut"
                }}
            />}
        </div>
    )
};