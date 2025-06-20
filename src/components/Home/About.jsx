import { useTranslation } from "react-i18next";
import { useIsVisible } from "react-is-visible";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const About = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (isVisible) setPlay(true);
    }, [isVisible]);

    return (
        <div ref={ref} className={styles.aboutContainer}>
            <div className={styles.section}>
                {play && <motion.h2
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut"
                    }}
                    className="h1"
                >{t("promo.aboutUs")}</motion.h2>}
                {play && <motion.div 
                    className={styles.player}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut",
                        delay: .1
                    }}
                ></motion.div>}
            </div>
            <div className={styles.section}>
                {play && <motion.p 
                    className={styles.sectionTitle}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut"
                    }}
                >{t("promo.aboutDescr")}</motion.p>}
                {play && <motion.p 
                    className={styles.sectionTitle}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut"
                    }}
                >{t("promo.listItem1")}</motion.p>}
                {/* {play && <motion.div 
                    className={styles.list}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut",
                        delay: .1
                    }}
                >
                    <p>{t("promo.listItem1")}</p>
                    <p>{t("promo.listItem2")}</p>
                    <p>{t("promo.listItem3")}</p>
                </motion.div>} */}
                {/* {play && <motion.div 
                    className={styles.stats}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut",
                        delay: .2
                    }}
                >
                    <div className={styles.statsItem}>
                        <p>800+</p>
                        <span>{t("promo.stats1")}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <p>40+</p>
                        <span>{t("promo.stats2")}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <p>20+</p>
                        <span>{t("promo.stats3")}</span>
                    </div>
                </motion.div>} */}
            </div>
        </div>
    )
};