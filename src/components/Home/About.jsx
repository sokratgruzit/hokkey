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
            {play && <motion.h2
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut"
                }}
                className="h1 text-shadow"
                style={{ color: "white", width: "100%", textAlign: "start" }}
            >{t("promo.aboutUs")}</motion.h2>}
            <dic className={styles.sectionsWrap}>
                <div className={styles.section}>
                    {play && <motion.div 
                        className={styles.player}
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: .8,
                            ease: "easeInOut",
                            delay: .1
                        }}
                    >
                        <div className={styles.aboutImage} />
                    </motion.div>}
                </div>
                <div className={`${styles.section} ${styles.sectionContent}`}>
                    {play && <motion.p 
                        className={styles.sectionTitle}
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: .8,
                            ease: "easeInOut"
                        }}
                    >
                        <span className={styles.titleContent}>
                            {t("promo.aboutDescr")}
                        </span>
                    </motion.p>}
                    {play && <motion.p 
                        className={styles.sectionTitle}
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: .8,
                            ease: "easeInOut"
                        }}
                    >
                        <span className={styles.titleContent}>
                            {t("promo.listItem1")}
                        </span>
                    </motion.p>}
                    {play && <motion.p 
                        className={styles.sectionTitle}
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: .8,
                            ease: "easeInOut"
                        }}
                    >
                        <span className={styles.titleContent}>
                            {t("promo.listItem2")}
                        </span>
                    </motion.p>}
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
            </dic>
        </div>
    )
};