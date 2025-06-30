import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

const About = () => {
    const { t } = useTranslation("common");

    const title = t("promo.aboutUs");
    const text1 = t("promo.aboutDescr");
    const text2 = t("promo.listItem1");
    const text3 = t("promo.listItem2");

    return (
        <div className={styles.aboutContainer}>
            <motion.h2
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
                className="h1 text-shadow"
                style={{ color: "white", width: "100%", textAlign: "start", willChange: "transform, opacity" }}
            >{title}</motion.h2>
            <div className={styles.sectionsWrap}>
                <motion.div 
                    className={`${styles.section} ${styles.shadow}`}
                    initial={{ translateY: -50, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    style={{ willChange: "transform, opacity" }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: .3
                    }}
                >
                    <div className={styles.player}>
                        <div className={styles.aboutImage} />
                    </div>
                </motion.div>
                <div className={`${styles.section} ${styles.sectionContent}`}>
                    <motion.p 
                        className={styles.sectionTitle}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        style={{ willChange: "transform, opacity" }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: .5
                        }}
                    >
                        <span className={styles.titleContent}>
                            {text1}
                        </span>
                    </motion.p>
                    <motion.p 
                        className={styles.sectionTitle}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        style={{ willChange: "transform, opacity" }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: .7
                        }}
                    >
                        <span className={styles.titleContent}>
                            {text2}
                        </span>
                    </motion.p>
                    <motion.p 
                        className={styles.sectionTitle}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        style={{ willChange: "transform, opacity" }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: .9
                        }}
                    >
                        <span className={styles.titleContent}>
                            {text3}
                        </span>
                    </motion.p>
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
        </div>
    )
};

export default About;