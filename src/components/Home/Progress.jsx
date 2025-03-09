import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

const points = Array.from({ length: 13 });
const TOTAL_DEGREES = 360;
const SEGMENT_DEGREES = TOTAL_DEGREES / points.length;

export const Progress = () => {
    const { t } = useTranslation("common");
    const ref = useRef();

    const [containerSize, setContainerSize] = useState(0);
    const [progress, setProgress] = useState(0);
    const [current, setCurrent] = useState(0);

    const handleClick = (index) => {
        let step = 7.5;

        if (index > 3) step = 7.6;
        if (index > 7) step = 7.7;
        
        if (index < 12) {
            const newProgress = index * step; 
            animateProgress(progress, newProgress);
            setProgress(newProgress);
        } else {
            animateProgress(progress, 100);
            setProgress(100);
        }
    };

    const animateProgress = (prev, current) => {
        let duration = 50;

        if (prev > 50 || current > 50) duration = 10;

        let step = prev;
        const interval = setInterval(() => {
            step += 1;
            setCurrent(step);
        
            if (step >= current) {
                clearInterval(interval);
                setCurrent(current);
            }
        }, duration);  
    };

    useEffect(() => {
        setContainerSize(window.innerWidth);

        const handleResize = () => {
            setContainerSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const radius = containerSize / 2 - 20; 
    const coef = window.innerWidth <= 768 ? 200 : 400;

    return (
        <div ref={ref} className={styles.progressContainer}>
            <div className={styles.titleWrap}>
                <h1>{t("progress.title")}</h1>
                <div className={styles.descr}>
                    <h2>{t("progress.descr")}</h2>
                    <p>{t("progress.annotation")}</p>
                </div>
            </div>
            <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.svgKnight}
                style={{
                    width: containerSize / 2,
                    height: containerSize / 2,
                    bottom: `calc(50% - ${containerSize / 4 + (window.innerWidth <= 768 ? 150 : 90)}px)`,
                    left: `calc(50% - ${containerSize / 4}px)`
                }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                    opacity: progress / 100, 
                    scale: [1, .9, 1]
                }}
                transition={{
                    opacity: {
                        duration: .5,
                    },
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            />
            <svg transform="rotate(-60)" width={containerSize} height={containerSize} viewBox={`0 0 ${containerSize + coef} ${containerSize + coef}`}>
                <circle
                    cx={containerSize / 2 + coef / 2}
                    cy={containerSize / 2 + coef / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(0,0,0,.3)"
                    strokeWidth="5"
                />
                <motion.circle
                    cx={containerSize / 2 + coef / 2}
                    cy={containerSize / 2 + coef / 2}
                    r={radius}
                    fill="none"
                    stroke="#d2002a"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * radius}
                    strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * radius}
                    initial={{ strokeDashoffset: 2 * Math.PI * radius }}
                    animate={{ strokeDashoffset: (1 - progress / 100) * 2 * Math.PI * radius }}
                    transition={{ duration: 0.5 }} 
                />
                {points.map((_, index) => {
                    const angle = SEGMENT_DEGREES * (index + 1) - 29; // Adjust angle for correct positioning
                    const x = containerSize / 2 + coef / 2 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = containerSize / 2 + coef / 2 + radius * Math.sin((angle * Math.PI) / 180);
                    const text = t(`progress.p${index + 1}`);
                    let step = 7.5;

                    if (index > 3) step = 7.6;
                    if (index > 7) step = 7.7;

                    let textPos = {
                        x: 0,
                        y: -40,
                        r: 62.5
                    };

                    if (index === 1) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: 34
                        };
                    }

                    if (index === 2) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: 6
                        };
                    }

                    if (index === 3) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: -21.5
                        };
                    }

                    if (index === 4) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: -49
                        };
                    }

                    if (index === 5) {
                        textPos = {
                            x: 50,
                            y: 60,
                            r: -77
                        };
                    }

                    if (index === 6) {
                        textPos = {
                            x: -50,
                            y: 60,
                            r: -104.5
                        };
                    }

                    if (index === 7) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: -132
                        };
                    }

                    if (index === 8) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: -161
                        };
                    }

                    if (index === 9) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: 172.5
                        };
                    }

                    if (index === 10) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: 145
                        };
                    }

                    if (index === 11) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: 117
                        };
                    }

                    if (index === 12) {
                        textPos = {
                            x: 0,
                            y: -40,
                            r: 89
                        };
                    }

                    return (
                        <g key={index} onClick={() => handleClick(index)} cursor="pointer">
                            <circle cx={x} cy={y} r={index * step <= progress ? "20" : "10"} fill="#d2002a" />
                            <text
                                x={x + textPos.x}
                                y={y + textPos.y}
                                textAnchor="middle"
                                fontSize={index < 12 ? window.innerWidth <= 768 ? "1rem" : "1.5rem" : "3rem"}
                                fill={index < 12 ? "#FFF" : "#d2002a"}
                                transform={`rotate(${angle + textPos.r} ${x} ${y})`}
                            >
                                {index < 12
                                    ? `${t(text)} (${((index + 1) * step).toFixed(0)}%)`
                                    : `${t(text)} (${current.toFixed(0)}%)`}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};
