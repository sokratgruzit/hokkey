import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

export const Profits = () => {
    const { t } = useTranslation("common");

    const profitsData = [
        {
            title: t("profits.profitTitle1"),
            text: t("profits.profitText1"),
            src: "/covers/boy1.webp"
        },
        {
            title: t("profits.profitTitle2"),
            text: t("profits.profitText2"),
            src: "/gallery/0.webp"
        },
        {
            title: t("profits.profitTitle3"),
            text: t("profits.profitText3"),
            src: "/gallery/1.webp"
        },
        {
            title: t("profits.profitTitle4"),
            text: t("profits.profitText4"),
            src: "/gallery/2.webp"
        },
        {
            title: t("profits.profitTitle5"),
            text: t("profits.profitText5"),
            src: "/gallery/3.webp"
        },
        {
            title: t("profits.profitTitle6"),
            text: t("profits.profitText6"),
            src: "/covers/boy1.webp"
        }
    ];

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleHover = (index) => {
        setHoveredItem(index);
    };

    return (
        <div 
            className={styles.profitsContainer}
        >
            <h1>{t("profits.title")}</h1>
            <div className={styles.profits}>
                {profitsData.map((item, i) => {
                    return (
                        <div 
                            key={`profit-${i}`} 
                            className={styles.profitItem}
                        >
                            <div 
                                className={styles.layout} 
                                onMouseEnter={() => handleHover(i)}
                                onMouseLeave={() => setHoveredItem(null)}
                            />
                            <motion.h2
                                initial={{ translateX: hoveredItem === i ? 0 : -1000 }}
                                animate={{ translateX: hoveredItem === i ? -1000 : 0}}
                                transition={{ duration: .25, ease: "easeIn" }}
                            >{item.title}</motion.h2>
                            <p
                                style={{
                                    color: hoveredItem === i ? "#c00" : "#768aa1"
                                }}
                            >
                                {item.text}
                                <span 
                                    className={styles.hiddenTitle}
                                    style={{
                                        transform: hoveredItem === i ? "translateY(0)" : "translateY(30px)",
                                        opacity: hoveredItem === i ? 1 : 0,
                                        
                                    }}
                                >{item.title}</span>
                            </p>
                            <motion.img 
                                src={item.src} 
                                alt="Profit image" 
                                initial={{ 
                                    translateY: hoveredItem === i ? "100%" : 0,
                                    opacity: hoveredItem === i ? 0 : 1
                                }}
                                animate={{ 
                                    translateY: hoveredItem === i ? 0 : "100%",
                                    opacity: hoveredItem === i ? 1 : 0
                                }}
                                transition={{ 
                                    duration: .25, 
                                    delay: .3,
                                    ease: "easeIn"
                                }}
                            />
                            <span
                                style={{
                                    color: hoveredItem === i ? "#c00" : "#768aa1"
                                }}
                            >{`(${i + 1})`}</span>
                            <motion.div 
                                className={styles.line} 
                                initial={{ translateX: hoveredItem === i ? "-150%" : 0 }}
                                animate={{ translateX: hoveredItem === i ? 0 : "-150%" }}
                                transition={{ duration: hoveredItem === i ? .6 : .3, ease: "easeIn", delay: hoveredItem === i ? .25 : 0 }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};