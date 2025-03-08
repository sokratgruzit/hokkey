import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const Trainings = () => {
    const { t } = useTranslation("common");
    const ref = useRef(null);

    const [play, setPlay] = useState(true);
    const [size, setSize] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        if (ref?.current) {
            setSize({
                x: ref?.current?.clientWidth,
                y: ref?.current?.clientHeight
            });
        }
    }, [ref.current]);

    const trainingsData = [
        { title: t("trainings.title"), text: "" },
        { title: t("trainings.title1"), text: t("trainings.text1") },
        { title: t("trainings.title2"), text: t("trainings.text2") },
        { title: t("trainings.title3"), text: t("trainings.text3") },
        { title: t("trainings.title4"), text: t("trainings.text4") },
        { title: t("trainings.title5"), text: t("trainings.text5") }
    ];

    return (
        <div onClick={() => setPlay(!play)} className={styles.trainingsContainer}>
            <div ref={ref} className={styles.items}>
                {trainingsData.map((item, i) => {
                    const centerPosition = [
                        { top: size.y / 2 - 125, left: size.x / 3 },       
                        { top: size.y / 2 - 125, left: 0 },      
                        { top: size.y / 2 - 125, left: -size.x / 3 },    
                        { top: -(size.y / 2 - 125), left: size.x / 3 },     
                        { top: -(size.y / 2 - 125), left: 0 },   
                        { top: -(size.y / 2 - 125), left: -size.x / 3 }    
                    ][i];

                    const targetPosition = { top: 0, left: 0 };

                    return (
                        <div key={`trainins-${i}`} 
                            className={styles.item}
                        >
                            <motion.div
                                key={`animated-trainins-${i}`}
                                initial={centerPosition}  // **Starts in the center**
                                animate={play ? centerPosition : targetPosition}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                }}
                                className={`${styles.itemContent} ${i === 0 ? styles.shadow : ""}`}
                                style={{
                                    background: i === 0 ? "#768aa1" : "#FFF",
                                    zIndex: trainingsData.length - i,
                                    border: "2px solid #768aa1"
                                }}
                            >
                                <h2 className={i > 0 ? styles.trainingsTitle : styles.trainingsTitle2}>
                                    {item.title}
                                </h2>
                                {i > 0 && <p>{item.text}</p>}
                                {i > 0 && <span>{i}</span>}
                                {i === 0 && <img src="/appIcons/red-knights.svg" alt="Knight" />}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
