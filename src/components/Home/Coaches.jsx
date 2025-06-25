import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

const teamData = [
    {
        src: "/coaches/coach1.png",
        name: "Никитин Александр",
        id: "zaharov"
    },
    {
        src: "/coaches/coach1.png",
        name: "Гречанников Матвей",
        id: "zaharov2"
    },
];

export const Coaches = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} className={styles.teamContainer}>
            {isVisible && (
                <motion.div 
                    className={styles.titleWrap}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                >
                    <h1 style={{ textAlign: "center" }} className="h1 text-shadow-white">{t("team.title")}</h1>
                </motion.div>
            )}
            <div className={styles.teamItems}>
                <Link to={`/coaches/${teamData[0].id}`} key={`team-${teamData[0].id}`} className={styles.teamItem}>
                    <div className={styles.teamItemContent}>
                        <img className={styles.teamItemImg} src={teamData[0].src} alt="player" />
                        <div className={styles.teamItemInfo}>
                            <h2 className="text-shadow-small">{teamData[0].name}</h2>
                            <img 
                                src="/appIcons/red-knights.svg" 
                                alt="logo" 
                                className={styles.knightIcon}
                            />
                        </div>
                    </div>
                </Link>
                <div className={styles.teamItem2}>
                    <div className={styles.teamItemContent2}>
                        <p>{t("trainings.info1")}</p>
                        <p>{t("trainings.info2")}</p>
                        <p>{t("trainings.info3")}</p>
                        <p>{t("trainings.info4")}</p>
                        <p>{t("trainings.info5")}</p>
                    </div>
                </div>
                <Link to={`/coaches/${teamData[1].id}`} key={`team-${teamData[1].id}`} className={styles.teamItem}>
                    <div className={styles.teamItemContent}>
                        <img className={styles.teamItemImg} src={teamData[1].src} alt="player" />
                        <div className={styles.teamItemInfo}>
                            <h2 className="text-shadow-small">{teamData[1].name}</h2>
                            <img 
                                src="/appIcons/red-knights.svg" 
                                alt="logo" 
                                className={styles.knightIcon}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
