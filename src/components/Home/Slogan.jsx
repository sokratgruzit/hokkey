import { useTranslation } from "react-i18next";
import { useIsVisible } from "react-is-visible";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const Slogan = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const [play, setPlay] = useState(false);
    const [containerSize, setContainerSize] = useState(0);

    useEffect(() => {
        if (isVisible) setPlay(true);
    }, [isVisible]);

    useEffect(() => {
        if (ref?.current) {
            setContainerSize(ref?.current?.clientWidth);
        }
    }, [ref.current]);

    return (
        <div ref={ref} className={styles.sloganContainer}>
            {play && <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1.4
                }}
            >{t("slogan.top")}</motion.p>}
            {play && <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}
            >{t("slogan.titleTop")}</motion.h1>}
            {play && <motion.h1 
                className={styles.sloganTitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: .2
                }}
            >{t("slogan.titleBottom")}</motion.h1>}
            <img className={styles.knight} src="/appIcons/red-knights.svg" alt="Knight" />
            {play && <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1.4
                }}
            >{t("slogan.bottom")}</motion.p>}
            <div 
                className={styles.circleWrap}
                style={{ 
                    width: containerSize * .8, 
                    height: containerSize * .8,
                    position: "absolute",
                    left: `calc(50% - ${containerSize * .8 / 2}px)`,
                    top: "50%",
                    zIndex: 0
                }} 
            >
                <div className={styles.circle}></div>
                <img src="/appIcons/player.webp" alt="player" className={styles.p1} />
                <img src="/appIcons/player.webp" alt="player" className={styles.p2} />
            </div>
        </div>
    )
};