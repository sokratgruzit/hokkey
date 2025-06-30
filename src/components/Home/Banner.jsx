import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

const Banner = () => {
    const { t } = useTranslation("common");

    const text = t("promo.bannerTitle");

    return (
        <div className={styles.banner}>
            <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.icon}
                style={{ willChange: "transform, opacity" }}
                initial={{ translateX: -200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .3
                }}
            />
            <motion.h1 
                className={`${styles.bannerTitle} h1 text-shadow-red`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
                style={{ willChange: "transform, opacity" }}
            >{text}</motion.h1>
            <motion.img 
                src="/appIcons/red-knights.svg" 
                alt="logo" 
                className={styles.icon}
                style={{ willChange: "transform, opacity" }}
                initial={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .3
                }}
            />
        </div>
    )
};

export default Banner;