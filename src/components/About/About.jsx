import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./About.module.css";

export const About = () => {
    const { t } = useTranslation("common");

    const title = t("header.about");
    const info1 = t("trainings.info1");
    const info2 = t("trainings.info2");
    const info3 = t("trainings.info3");
    const info4 = t("trainings.info4");
    const info5 = t("trainings.info5");

    return (
        <div className={styles.container}>
            <motion.h1
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
                style={{ textAlign: "start", willChange: "transform, opacity" }}
                className="h1 text-shadow"
            >{title}</motion.h1>
            <motion.p 
                className={`text-shadow-small ${styles.p}`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .3
                }}
                style={{ textAlign: "start", willChange: "transform, opacity" }}
            >{info1}</motion.p>
            <motion.p 
                className={`text-shadow-small ${styles.p}`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .6
                }}
                style={{ textAlign: "start", willChange: "transform, opacity" }}
            >{info2}</motion.p>
            <motion.p 
                className={`text-shadow-small ${styles.p}`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .9
                }}
                style={{ textAlign: "start", willChange: "transform, opacity" }}
            >{info3}</motion.p>
            <motion.p 
                className={`text-shadow-small ${styles.p}`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.2
                }}
                style={{ textAlign: "start", willChange: "transform, opacity" }}
            >{info4}</motion.p>
            <motion.p 
                className={`text-shadow-small ${styles.p}`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.5
                }}
                style={{ textAlign: "start", willChange: "transform, opacity" }}
            >{info5}</motion.p>
            <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.knightIcon}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: .2 }}
                transition={{ duration: 1, ease: "easeInOut", delay: .5 }}
                style={{ willChange: "transform, opacity" }}
            />
        </div>
    )
};