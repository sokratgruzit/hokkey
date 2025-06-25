import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "react-is-visible";

import styles from "./Home.module.css";

export const Trainings = () => {
    const { t } = useTranslation("common");
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const trainingsData = [
        { title: t("trainings.title1"), text: t("trainings.text1") },
        { title: t("trainings.title2"), text: t("trainings.text2") },
        { title: t("trainings.title3"), text: t("trainings.text3") },
        { title: t("trainings.title4"), text: t("trainings.text4") },
    ];

    return (
        <div ref={ref} className={styles.trainingsContainer}>
            {isVisible && <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: .5
                }}
                className={`${styles.itemContent2} ${styles.shadow}`}
            >
                <h2 className={styles.trainingsTitle2}>
                    {t("trainings.title")}
                </h2>
                <img src="/appIcons/red-knights.svg" alt="Knight" />
            </motion.div>}
            {isVisible && <div className={styles.items}>
                {trainingsData.map((item, i) => {
                    return (
                        <div key={`trainins-${i}`} className={styles.item}>
                            <motion.div
                                key={`animated-trainins-${i}`}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    delay: i * 0.05 + .5
                                }}
                                className={`${styles.itemContent} ${styles.shadow}`}
                                style={{
                                    background: "#FFF",
                                    zIndex: trainingsData.length - i,
                                    border: "2px solid #768aa1"
                                }}
                            >
                                <h2 className={styles.trainingsTitle}>
                                    {item.title}
                                </h2>
                                <p>{item.text}</p>
                                <span>{i + 1}</span>
                            </motion.div>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
};
