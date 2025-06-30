import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { Languages } from "../Languages/Languages";
import { GlowButton } from "../UI/GlowButton";
import { BlockWithBorder } from "../UI/BlockWithBorder";
// import { ModelCanvas } from "../3D/ModelCanvas";
import { ParticleImage } from "../3D/ParticleImage";
import { RotatingObjectCanvas } from "../3D/RotatingObjectCanvas";

import styles from "./CoachPage.module.css";

export const CoachPage = () => {
    const { id } = useParams();
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const containerRef = useRef();

    const [showContent, setShowContent] = useState(false);

    const isLoading = useSelector((state) => state.settings.isLoading);

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
        <div className={styles.wrapper}>
            <div className={styles.headWrap2}>
                <ParticleImage onComplete={() => setShowContent(true)} imageUrl="/appIcons/red-knights.png" />
            </div>
            {showContent && <div ref={containerRef} className={styles.container}>
                <div className={styles.headContainer}>
                    <div className={styles.generalDataMobile}>
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
                                bg="#c00"
                                glowColor="rgba(255, 255, 255, 0.26)"
                                text={t("team.back")}
                                height="35px"
                                fontSize="14px"
                                shadowed={true}
                                onClick={() => navigate(-1)}
                            />
                        </motion.span>
                    </div>
                    <div className={styles.headWrap}>
                        <img src={`/coaches/${id}.png`} alt="coach" className={styles.coachImg} />
                        {/* <ModelCanvas 
                            coachId={id} 
                            scale={0.09}
                            position={[0, 0, 0]} 
                        /> */}
                    </div>
                </div>
                <motion.div 
                    className={styles.generalData}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: .7,
                        ease: "easeInOut",
                        delay: 7
                    }}
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
                        style={{ width: "50%" }}
                    >
                        <GlowButton
                            bg="#c00"
                            glowColor="rgba(255, 255, 255, 0.26)"
                            text={t("team.back")}
                            height="35px"
                            fontSize="14px"
                            shadowed={true}
                            onClick={() => navigate(-1)}
                        />
                    </motion.span>
                    <img src={`/coaches/${id}.png`} alt="coach" className={styles.coachImg} />
                </motion.div>
                <div className={styles.column}>
                    {!isLoading && <BlockWithBorder width={"100%"}>
                        <h2 className={styles.title}>{t("team.career")}</h2>
                    </BlockWithBorder>}
                    <div className={styles.items}>
                        {!isLoading && <motion.div 
                            className={styles.vertical} 
                            style={{
                                height: `${80 * coach.gameCareer.length + 82.5}px`
                            }}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                delay: 1.5,
                                duration: .7,
                                ease: "easeInOut"
                            }}
                        >
                            {Array.from({ length: coach.gameCareer.length }, (_, i) => (
                                <motion.div
                                    key={`vertical-gameCareer-${i}`}
                                    className={styles.lineItem}
                                    style={{ bottom: `${i * 80}px` }}
                                    initial={{ height: 0, scaleX: 0 }}
                                    animate={{ height: 40, scaleX: 1 }}
                                    transition={{
                                        delay: .3 * (coach.gameCareer.length - i) + 2.2,
                                        duration: .7,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>}
                        <div className={styles.cup}>
                            <RotatingObjectCanvas
                                path="/models/cup.obj"
                                scale={0.008}
                                rotation={[0, 0, 0]}
                                materialProps={{ color: "#fff", metalness: 1.5, roughness: 0.35 }}
                            />
                        </div>
                        {!isLoading && coach.gameCareer.map((c, i) => {
                            return (
                                <BlockWithBorder delayBeforeStart={i * 0.5 + 3} key={`career-${i}`} delay={0.6 * i}>
                                    <p className={styles.item}>{c}</p>
                                </BlockWithBorder>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.column}>
                    {!isLoading && <BlockWithBorder delayBeforeStart={1} width={"100%"}>
                        <h2 className={styles.title}>{t("team.education")}</h2>
                    </BlockWithBorder>}
                    <div className={styles.items}>
                        {!isLoading && <motion.div 
                            className={styles.vertical} 
                            style={{
                                height: `${80 * coach.education.length + 82.5}px`
                            }}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                delay: 2.5,
                                duration: .7,
                                ease: "easeInOut"
                            }}
                        >
                            {Array.from({ length: coach.education.length }, (_, i) => (
                                <motion.div
                                    key={`vertical-education-${i}`}
                                    className={styles.lineItem}
                                    style={{ bottom: `${i * 80}px` }}
                                    initial={{ height: 0, scaleX: 0 }}
                                    animate={{ height: 40, scaleX: 1 }}
                                    transition={{
                                        delay: .3 * (coach.education.length - i) + 3.2,
                                        duration: .7,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>}
                        <div className={styles.brain}>
                            <RotatingObjectCanvas
                                path="/models/brain.obj"
                                scale={0.12}
                                floatY
                                rotation={[-Math.PI / 2, 0, Math.PI / 0.27]}
                                materialProps={{ color: "#fff", metalness: 1.5, roughness: 0.35 }}
                            />
                        </div>
                        {!isLoading && coach.education.map((c, i) => {
                            return (
                                <BlockWithBorder delayBeforeStart={i * 0.5 + 3} key={`education-${i}`} delay={0.6 * i}>
                                    <p className={styles.item}>{c}</p>
                                </BlockWithBorder>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.column}>
                    {!isLoading && <BlockWithBorder delayBeforeStart={2} width={"100%"}>
                        <h2 className={styles.title}>{t("team.exp")}</h2>
                    </BlockWithBorder>}    
                    <div className={styles.items}>
                        {!isLoading && <motion.div 
                            className={styles.vertical} 
                            style={{
                                height: `${80 * coach.exp.length + 82.5}px`
                            }}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                delay: 3.5,
                                duration: .7,
                                ease: "easeInOut"
                            }}
                        >
                            {Array.from({ length: coach.exp.length }, (_, i) => (
                                <motion.div
                                    key={`vertical-exp-${i}`}
                                    className={styles.lineItem}
                                    style={{ bottom: `${i * 80}px` }}
                                    initial={{ height: 0, scaleX: 0 }}
                                    animate={{ height: 40, scaleX: 1 }}
                                    transition={{
                                        delay: .3 * (coach.exp.length - i) + 4.2,
                                        duration: .7,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>}
                        <div className={styles.stick}>
                            <RotatingObjectCanvas
                                path="/models/stick.obj"
                                scale={0.035}
                                floatY
                                rotation={[-Math.PI / 2, 0, Math.PI]}
                                materialProps={{ color: "#fff", metalness: 1.5, roughness: 0.35 }}
                            />
                        </div>
                        {!isLoading && coach.exp.map((c, i) => {
                            return (
                                <BlockWithBorder delayBeforeStart={i * 0.5 + 3} key={`exp-${i}`} delay={0.6 * i}>
                                    <p className={styles.item}>{c}</p>
                                </BlockWithBorder>
                            )
                        })}
                    </div>
                </div>
            </div>}
        </div>
    );
};
