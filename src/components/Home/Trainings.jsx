import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Home.module.css";

const Trainings = () => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();

    const title = t("trainings.title");
    const joinUs = t("promo.joinUs");

    const trainingsData = [
        { title: t("trainings.title1"), text: t("trainings.text1") },
        { title: t("trainings.title2"), text: t("trainings.text2") },
        { title: t("trainings.title3"), text: t("trainings.text3") },
        { title: t("trainings.title4"), text: t("trainings.text4") },
    ];

    return (
        <div className={styles.trainingsContainer}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                className={`${styles.itemContent2} ${styles.shadow}`}
                style={{ willChange: "transform, opacity" }}
            >
                <h2 className={styles.trainingsTitle2}>
                    {title}
                </h2>
                <img src="/appIcons/red-knights.svg" alt="Knight" />
                <GlowButton
                    bg="#c00"
                    glowColor="rgba(255, 255, 255, 0.26)"
                    text={joinUs}
                    height="35px"
                    fontSize="18px"
                    shadowed={true}
                    onClick={() => navigate("signup")}
                />
            </motion.div>
            <div className={styles.items}>
                {trainingsData.map((item, i) => {
                    return (
                        <div key={`trainins-${i}`} className={styles.item}>
                            <motion.div
                                key={`animated-trainins-${i}`}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    delay: i * 0.05 + .5
                                }}
                                className={`${styles.itemContent} ${styles.shadow}`}
                                style={{
                                    background: "#FFF",
                                    zIndex: trainingsData.length - i,
                                    border: "2px solid #768aa1",
                                    willChange: "transform, opacity"
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
            </div>
        </div>
    );
};

export default Trainings;
