import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const Trainings = () => {
    const { t } = useTranslation("common");
    const ref = useRef(null);

    const [play, setPlay] = useState(true);
    const [size, setSize] = useState({ x: 0, y: 0 });
    const [imgIndex, setImgIndex] = useState(0);

    const [imagePositions, setImagePositions] = useState(
        Array(4).fill({ top: 0, left: 0, opacity: 0 })
    );

    const images = [
        "/gallery/0.webp",
        "/gallery/1.webp",
        "/gallery/2.webp",
        "/gallery/3.webp",
    ];

    useEffect(() => {
        if (ref?.current) {
            setSize({
                x: ref.current.clientWidth,
                y: ref.current.clientWidth <= 600 && play ? 350 : ref.current.clientHeight
            });
        }
    }, [play]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImagePositions(Array(4).fill(null).map(() => ({
                top: Math.random() * size.y - size.y / 4,
                left: Math.random() * size.x - size.x / 4,
                opacity: 1
            })));

            setImgIndex(Math.floor(Math.random() * 4));
        }, 5000);

        return () => clearInterval(interval);
    }, [size]);

    const trainingsData = [
        { title: t("trainings.title"), text: "" },
        { title: t("trainings.title1"), text: t("trainings.text1") },
        { title: t("trainings.title2"), text: t("trainings.text2") },
        { title: t("trainings.title3"), text: t("trainings.text3") },
        { title: t("trainings.title4"), text: t("trainings.text4") },
        { title: t("trainings.title5"), text: t("trainings.text5") }
    ];

    return (
        <div 
            onClick={() => setPlay(!play)} 
            className={styles.trainingsContainer}
            style={{
                height: window.innerWidth <= 600 ? play ? size.y : size.y + 100 : size.y + 200
            }}
        >
            <div ref={ref} className={styles.items}>
                {trainingsData.map((item, i) => {
                    let centerPosition = [
                        { top: size.y / 2 - 125, left: size.x / 3 },
                        { top: size.y / 2 - 125, left: 0 },
                        { top: size.y / 2 - 125, left: -size.x / 3 },
                        { top: -(size.y / 2 - 125), left: size.x / 3 },
                        { top: -(size.y / 2 - 125), left: 0 },
                        { top: -(size.y / 2 - 125), left: -size.x / 3 }
                    ][i];

                    if (size.x <= 1024) {
                        centerPosition = [
                            { top: size.y / 2 - 125, left: size.x / 4 },
                            { top: size.y / 2 - 125, left: -size.x / 4 },
                            { top: 0, left: size.x / 4 },
                            { top: 0, left: -size.x / 4 },
                            { top: -(size.y / 2 - 125), left: size.x / 4 },
                            { top: -(size.y / 2 - 125), left: -size.x / 4 }
                        ][i];
                    }

                    if (size.x <= 600) {
                        centerPosition = [
                            { top: [10, 0], left: 0 },
                            { top: -260, left: 0 },
                            { top: -520, left: 0 },
                            { top: -780, left: 0 },
                            { top: -1040, left: 0 },
                            { top: -1300, left: 0 }
                        ][i];

                        if (!play) {
                            centerPosition = [
                                { top: [0, 10], left: 0 },
                                { top: 260, left: 0 },
                                { top: 520, left: 0 },
                                { top: 780, left: 0 },
                                { top: 1040, left: 0 },
                                { top: 1300, left: 0 }
                            ][i];
                        }
                    }

                    const targetPosition = { top: 0, left: 0 };

                    return (
                        <div key={`trainins-${i}`} className={styles.item}>
                            <motion.div
                                key={`animated-trainins-${i}`}
                                initial={centerPosition}
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
                {play && <motion.img
                    key={`image-${imgIndex}`}
                    src={images[imgIndex]}
                    alt={`Image ${imgIndex}`}
                    className={styles.floatingImage}
                    initial={{
                        top: Math.random() * size.y - size.y / 4,
                        left: Math.random() * size.x - size.x / 4,
                        opacity: 0
                    }}
                    animate={{
                        top: imagePositions[imgIndex]?.top,
                        left: imagePositions[imgIndex]?.left,
                        opacity: [0, 1, 0] 
                    }}
                    transition={{
                        duration: 5,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                    style={{
                        width: size.x,
                        height: size.x,
                        maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%)",
                        WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%)"
                    }}
                />}
            </div>
        </div>
    );
};
