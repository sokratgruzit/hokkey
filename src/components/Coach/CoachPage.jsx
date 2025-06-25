import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useRef } from "react";

import Coach from "../3D/Coach";
import { Languages } from "../Languages/Languages";
import { GlowButton } from "../UI/GlowButton";
import { BlockWithBorder } from "../UI/BlockWithBorder";

import styles from "./CoachPage.module.css";

export const CoachPage = () => {
    const { id } = useParams();
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const containerRef = useRef();

    const coaches = {
        shakarov: {
            name: t("team.shakarov"),
            expTime: new Date().getFullYear() - 2016,
            gameCareer: [
                t("careerShakarov.0"),
                t("careerShakarov.1"),
                t("careerShakarov.2"),
                t("careerShakarov.3"),
                t("careerShakarov.4"),
                t("careerShakarov.5"),
                t("careerShakarov.6"),
            ],
            exp: [
                t("expShakarov.0"),
                t("expShakarov.1"),
                t("expShakarov.2"),
                t("expShakarov.3"),
            ],
            education: [
                t("educationShakarov.0"),
                t("educationShakarov.1"),
                t("educationShakarov.2"),
                t("educationShakarov.3"),
            ]
        },
        matuhov: {
            name: t("team.matuhov"),
            expTime: new Date().getFullYear() - 1995,
            gameCareer: [
                t("careerMatuhov.0"),
                t("careerMatuhov.1"),
                t("careerMatuhov.2"),
                t("careerMatuhov.3"),
                t("careerMatuhov.4"),
                t("careerMatuhov.5"),
            ],
            exp: [
                t("careerMatuhov.0"),
                t("careerMatuhov.1"),
                t("careerMatuhov.2"),
                t("careerMatuhov.3"),
                t("careerMatuhov.4"),
            ],
            education: [
                t("careerMatuhov.0"),
                t("careerMatuhov.1"),
                t("careerMatuhov.2"),
                t("careerMatuhov.3"),
            ]
        }
    };

    const coach = coaches[id];

    return (
        <div className={styles.container}>
            <div ref={containerRef} className={styles.content}>
                <motion.div 
                    className={styles.generalData}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.1}
                >
                    <div className={styles.dataItem}>
                        <span>{t("team.lang")}</span> 
                        <Languages />
                    </div>
                    <div className={styles.dataItem}>
                        <span>{t("team.fullName")}</span> 
                        <span>{coach.name}</span>
                    </div>
                    <div className={styles.dataItem}>
                        <span>{t("team.expText")}</span> 
                        <span>{coach.expTime}</span>
                    </div>
                    <motion.span
                        initial={{ translateY: -50, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: .8,
                            ease: "easeInOut",
                            delay: .2
                        }}
                    >
                        <GlowButton
                            bg="#d2002a"
                            glowColor="rgba(255, 255, 255, 0.26)"
                            text={t("team.back")}
                            height="35px"
                            fontSize="14px"
                            shadowed={true}
                            onClick={() => navigate(-1)}
                        />
                    </motion.span>
                </motion.div>
                <div className={styles.titles}>
                    <BlockWithBorder width={"calc(100% / 3)"}>
                        <h2 className={styles.title}>{t("team.career")}</h2>
                    </BlockWithBorder>
                    <BlockWithBorder width={"calc(100% / 3)"}>
                        <h2 className={styles.title}>{t("team.education")}</h2>
                    </BlockWithBorder>
                    <BlockWithBorder width={"calc(100% / 3)"}>
                        <h2 className={styles.title}>{t("team.exp")}</h2>
                    </BlockWithBorder>    
                </div>
                <div className={styles.descriptions}>
                    <div className={styles.items}>
                        <div className={styles.vertical} />
                        {coach.gameCareer.map((c, i) => {
                            return (
                                <BlockWithBorder key={`career-${i}`} delay={0.6 * i}>
                                    <p className={styles.item}>{c}</p>
                                </BlockWithBorder>
                            )
                        })}
                    </div>
                    <div className={styles.items}>
                        <div className={styles.vertical} />
                        {coach.education.map((c, i) => {
                            return (
                                <BlockWithBorder key={`education-${i}`} delay={0.6 * i}>
                                    <p className={styles.item}>{c}</p>
                                </BlockWithBorder>
                            )
                        })}
                    </div>
                    <div className={styles.items}>
                        <div className={styles.vertical} />
                        {coach.exp.map((c, i) => {
                            return (
                                <BlockWithBorder key={`exp-${i}`} delay={0.6 * i}>
                                    <p className={styles.item}>{c}</p>
                                </BlockWithBorder>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Coach coachId={id} />
        </div>
    );
};
