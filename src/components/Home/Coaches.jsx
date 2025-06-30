import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Home.module.css";

const Coaches = () => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();

    const title = t("team.title");
    const details = t("promo.details");
    
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
        <div className={styles.teamContainer}>
            <motion.div 
                className={styles.titleWrap}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ willChange: "transform, opacity" }}
            >
                <h1 style={{ textAlign: "center" }} className="h1 text-shadow-white">{title}</h1>
            </motion.div>
            <div className={styles.teamItems}>
                <motion.div 
                    key={`team-${teamData[1].id}`} 
                    className={`${styles.teamItem} ${styles.shadow}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className={styles.teamItemContent}>
                        <img className={styles.teamItemImg} src={teamData[1].src} alt="player" />
                        <div className={styles.teamItemInfo}>
                            <h2 className="text-shadow-small">{teamData[1].name}</h2>
                            <GlowButton
                                bg="#c00"
                                glowColor="rgba(255, 255, 255, 0.26)"
                                text={details}
                                height="35px"
                                fontSize="18px"
                                shadowed={true}
                                onClick={() => navigate(`/coaches/${teamData[1].id}`)}
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className={styles.teamItem2}
                    initial={{ translateY: -50, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: .5 }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <img 
                        src="/appIcons/red-knights.svg" 
                        alt="logo" 
                        className={styles.knightIcon}
                    />
                </motion.div>
                <motion.div 
                    key={`team-${teamData[0].id}`} 
                    className={`${styles.teamItem} ${styles.shadow}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className={styles.teamItemContent}>
                        <img className={styles.teamItemImg} src={teamData[0].src} alt="player" />
                        <div className={styles.teamItemInfo}>
                            <h2 className="text-shadow-small">{teamData[0].name}</h2>
                            <GlowButton
                                bg="#c00"
                                glowColor="rgba(255, 255, 255, 0.26)"
                                text={details}
                                height="35px"
                                fontSize="18px"
                                shadowed={true}
                                onClick={() => navigate(`/coaches/${teamData[0].id}`)}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Coaches;
