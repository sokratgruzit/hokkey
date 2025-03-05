import { useTranslation } from "react-i18next";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { motion } from "framer-motion";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Home.module.css";

export const Promo = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} className={styles.promoContainer}>
            {isVisible && <motion.h1
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut"
                }}
            >{t("promo.title")}</motion.h1>}
            {isVisible && <motion.h2
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut",
                    delay: .1
                }}
            >{t("promo.subTitle")}</motion.h2>}
            {isVisible && <motion.span
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
                    text={t("promo.joinUs")}
                    height="35px"
                    fontSize="14px"
                    shadowed={true}
                    onClick={() => console.log("join us")}
                />
            </motion.span>}
        </div>
    )
}