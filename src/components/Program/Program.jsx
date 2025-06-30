import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { BlockWithBorder } from "../UI/BlockWithBorder";
import { useWindowWidth } from "../../hooks/UseWindowWidth";

import styles from "./Program.module.css";

export const Program = () => {
    const [start, setStart] = useState(false);
    const [start2, setStart2] = useState(false);
    const [start3, setStart3] = useState(false);
    
    const width = useWindowWidth();
    const coef = width >= 768 ? 16 :  width >= 550 ? 10 : 6;
    const pad = width >= 768 ? 20 : 10;

    const { t } = useTranslation("common");
    const lineControls = useAnimation();

    const dirs = t("program.directions");
    const pro = t("program.pro");
    const hobby = t("program.hobby");
    const hobby1 = t("program.hobby1");
    const weOffer = t("program.weOffer");
    const fromZero = t("program.fromZero");
    const helping = t("program.helping");
    const study = t("program.study");
    const matches = t("program.matches");
    const stages = t("program.stages");
    const stage1Title = t("program.stage1Title");
    const stage1 = t("program.stage1");
    const stage12 = t("program.stage12");
    const stage13 = t("program.stage13");
    const stage2Title = t("program.stage2Title");
    const stage2 = t("program.stage2");
    const stage22 = t("program.stage22");
    const stage23 = t("program.stage23");

    const dirW = useMemo(() => dirs.length * coef + pad, [dirs, coef]);
    const offerW = useMemo(() => weOffer.length * coef + pad, [weOffer, coef]);
    const stagesW = useMemo(() => stages.length * coef + pad, [stages, coef]);
    const hobbyW = useMemo(() => {
        const maxLen = Math.max(hobby.length, pro.length);
        return maxLen * coef + pad;
    }, [hobby, pro, coef]);

    useEffect(() => {
        if (start) {
            lineControls.start({
                scaleY: 1,
                transition: {
                    duration: .7,
                    ease: "easeInOut",
                    delay: .7
                }
            });
        }
    }, [start]);

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.subSection}>
                    <BlockWithBorder onBorderAnimationEnd={() => setStart(true)} bg="#c00" h={45} width={dirW}>
                        <p className={styles.text}>{dirs}</p>
                    </BlockWithBorder>
                </div>
                <div className={styles.subSection}>
                    {start && <motion.div 
                        className={styles.line}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: .7,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div 
                            className={styles.line2} 
                            initial={{ scaleY: 0 }}
                            animate={lineControls}
                        />
                        <motion.div 
                            className={styles.line3} 
                            initial={{ scaleY: 0 }}
                            animate={lineControls}
                        />
                        <motion.div 
                            className={styles.line4} 
                            initial={{ scaleY: 0 }}
                            animate={lineControls}
                        />
                    </motion.div>}
                    <div className={styles.subList}>
                        <motion.div 
                            className={styles.line5}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                duration: .7,
                                ease: "easeInOut",
                                delay: 5.5
                            }} 
                        />
                        <BlockWithBorder delayBeforeStart={3.5} bg="#c00" h={45} width={hobbyW}>
                            <p className={styles.text}>{hobby}</p>
                        </BlockWithBorder>
                        <BlockWithBorder delayBeforeStart={6} bg="#c00" width={hobbyW}>
                            <p className={styles.text2}>{hobby1}</p>
                        </BlockWithBorder>
                    </div>
                    <BlockWithBorder delayBeforeStart={3.5} bg="#c00" h={45} width={hobbyW}>
                        <p className={styles.text}>{pro}</p>
                    </BlockWithBorder>
                </div>
            </div>
            <div style={{ background: "#000", gap: 40 }} className={styles.section}>
                {start2 && <motion.div 
                    className={styles.line6}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div 
                        className={styles.line8} 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: .7,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </motion.div>}
                <motion.div 
                    className={styles.line7} 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        duration: .7,
                        ease: "easeInOut",
                        delay: 2.5
                    }}
                />
                <div className={styles.subSection}>
                    <BlockWithBorder onBorderAnimationEnd={() => setStart2(true)} h={45} width={offerW}>
                        <p className={styles.text}>{weOffer}</p>
                    </BlockWithBorder>
                </div>
                <div style={{ gap: 60 }} className={styles.subSection}>
                    <BlockWithBorder delayBeforeStart={3} width={hobbyW}>
                        <p 
                            className={styles.text2}
                            dangerouslySetInnerHTML={{ __html: fromZero }}
                        />
                    </BlockWithBorder>
                    <BlockWithBorder delayBeforeStart={3} width={hobbyW}>
                        <p 
                            className={styles.text2}
                            dangerouslySetInnerHTML={{ __html: helping }}
                        />
                    </BlockWithBorder>
                </div>
                <div style={{ gap: 60 }} className={styles.subSection}>
                    <BlockWithBorder delayBeforeStart={3} width={hobbyW}>
                        <p 
                            className={styles.text2}
                            dangerouslySetInnerHTML={{ __html: study }}
                        />
                    </BlockWithBorder>
                    <BlockWithBorder delayBeforeStart={3} width={hobbyW}>
                        <p 
                            className={styles.text2}
                            dangerouslySetInnerHTML={{ __html: matches }}
                        />
                    </BlockWithBorder>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.subSection}>
                    <BlockWithBorder onBorderAnimationEnd={() => setStart3(true)} bg="#c00" h={45} width={stagesW}>
                        <p className={styles.text}>{stages}</p>
                    </BlockWithBorder>
                </div>
                <div style={{ gap: 60, alignItems: "center" }} className={styles.subSection}>
                    <BlockWithBorder delayBeforeStart={2.5} h={45} bg="#c00" width={hobbyW}>
                        <p className={styles.text3}>{stage1Title}</p>
                    </BlockWithBorder>
                    <div style={{ flexDirection: "column", width: hobbyW }} className={styles.subSection2}>
                        {start3 && <motion.div 
                            className={styles.line10}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div 
                                className={styles.line11} 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",
                                    delay: 2.5
                                }}
                            />
                            <motion.div 
                                className={styles.line12} 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",
                                    delay: 2.5
                                }}
                            />
                            <motion.div 
                                className={styles.line13} 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",
                                    delay: 2.5
                                }}
                            />
                        </motion.div>}
                        <BlockWithBorder delayBeforeStart={4.7} bg="#c00" width="100%">
                            <p 
                                className={styles.text2}
                                dangerouslySetInnerHTML={{ __html: stage1 }}
                            />
                        </BlockWithBorder>
                        <BlockWithBorder delayBeforeStart={4.7} bg="#c00" width="100%">
                            <p 
                                className={styles.text2}
                                dangerouslySetInnerHTML={{ __html: stage12 }}
                            />
                        </BlockWithBorder>
                        <BlockWithBorder delayBeforeStart={4.7} bg="#c00" width="100%">
                            <p 
                                className={styles.text2}
                                dangerouslySetInnerHTML={{ __html: stage13 }}
                            />
                        </BlockWithBorder>
                    </div>
                </div>
                <div style={{ gap: 60, alignItems: "center" }} className={styles.subSection}>
                    <BlockWithBorder delayBeforeStart={4} h={45} bg="#c00" width={hobbyW}>
                        <p className={styles.text3}>{stage2Title}</p>
                    </BlockWithBorder>
                    <div style={{ flexDirection: "column", width: hobbyW }} className={styles.subSection2}>
                        {start3 && <motion.div 
                            className={styles.line14}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <motion.div 
                                className={styles.line15} 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",
                                    delay: 3
                                }}
                            />
                            <motion.div 
                                className={styles.line16} 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",
                                    delay: 3
                                }}
                            />
                            <motion.div 
                                className={styles.line17} 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: .7,
                                    ease: "easeInOut",
                                    delay: 3
                                }}
                            />
                        </motion.div>}
                        <BlockWithBorder delayBeforeStart={5.7} bg="#c00" width="100%">
                            <p 
                                className={styles.text2}
                                dangerouslySetInnerHTML={{ __html: stage2 }}
                            />
                        </BlockWithBorder>
                        <BlockWithBorder delayBeforeStart={5.7} bg="#c00" width="100%">
                            <p 
                                className={styles.text2}
                                dangerouslySetInnerHTML={{ __html: stage22 }}
                            />
                        </BlockWithBorder>
                        <BlockWithBorder delayBeforeStart={5.7} bg="#c00" width="100%">
                            <p 
                                className={styles.text2}
                                dangerouslySetInnerHTML={{ __html: stage23 }}
                            />
                        </BlockWithBorder>
                    </div>
                </div>
            </div>
        </div>
    );
};
