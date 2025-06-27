import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef, useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

import styles from "./Home.module.css";

export const Coaches = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const [play, setPlay] = useState(false);
    
    useEffect(() => {
        if (isVisible && !play) setPlay(true);
    }, [isVisible]);

    const title = t("team.title");
    const info1 = t("trainings.info1");
    const info2 = t("trainings.info2");
    const info3 = t("trainings.info3");
    const info4 = t("trainings.info4");
    const info5 = t("trainings.info5");

    const teamData = [
        {
            src: "/coaches/shakarov.png",
            name: t("team.shortShakarov"),
            id: "shakarov"
        },
        {
            src: "/coaches/matuhov.png",
            name: t("team.shortMatuhov"),
            id: "matuhov"
        },
    ];

    return (
        <div ref={ref} className={styles.teamContainer}>
            {play && (
                <motion.div 
                    className={styles.titleWrap}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <h1 style={{ textAlign: "center" }} className="h1 text-shadow-white">{title}</h1>
                </motion.div>
            )}
            <div className={styles.teamItems}>
                <Link to={`/coaches/${teamData[0].id}`} key={`team-${teamData[0].id}`} className={styles.teamItem}>
                    {play && <motion.div 
                        className={styles.teamItemContent}
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: .3 }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <img className={styles.teamItemImg} src={teamData[0].src} alt="player" />
                        <div className={styles.teamItemInfo}>
                            <h2 className="text-shadow-small">{teamData[0].name}</h2>
                            <img 
                                src="/appIcons/red-knights.svg" 
                                alt="logo" 
                                className={styles.knightIcon}
                            />
                        </div>
                    </motion.div>}
                </Link>
                {play && <motion.div 
                    className={styles.teamItem2}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: .5 }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className={styles.teamItemContent2}>
                        <p>{info1}</p>
                        <p>{info2}</p>
                        <p>{info3}</p>
                        <p>{info4}</p>
                        <p>{info5}</p>
                    </div>
                </motion.div>}
                <Link to={`/coaches/${teamData[1].id}`} key={`team-${teamData[1].id}`} className={styles.teamItem}>
                    {play && <motion.div 
                        className={styles.teamItemContent}
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: .7 }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <img className={styles.teamItemImg} src={teamData[1].src} alt="player" />
                        <div className={styles.teamItemInfo}>
                            <h2 className="text-shadow-small">{teamData[1].name}</h2>
                            <img 
                                src="/appIcons/red-knights.svg" 
                                alt="logo" 
                                className={styles.knightIcon}
                            />
                        </div>
                    </motion.div>}
                </Link>
            </div>
        </div>
    );
};
