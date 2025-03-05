import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { motion } from "framer-motion";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Home.module.css";

export const About = () => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} className={styles.aboutContainer}>
            <div className={styles.section}>
                {isVisible && <motion.h2
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut"
                    }}
                >{t("promo.aboutUs")}</motion.h2>}
                {isVisible && <motion.div 
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
            <div style={{ alignItems: "flex-start" }} className={styles.section}>
                {isVisible && <motion.p 
                    className={styles.sectionTitle}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut"
                    }}
                >{t("promo.aboutDescr")}</motion.p>}
                {isVisible && <motion.div 
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
                </motion.div>}
                {isVisible && <motion.div 
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
                </motion.div>}
                {isVisible && <motion.span
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: .8,
                        ease: "easeInOut",
                        delay: .3
                    }}
                >
                    <GlowButton
                        bg="#000"
                        glowColor="rgba(255, 255, 255, 0.26)"
                        text={t("promo.more")}
                        height="35px"
                        fontSize="14px"
                        shadowed={true}
                        onClick={() => navigate("/about")}
                    />
                </motion.span>}
            </div>
        </div>
    )
};