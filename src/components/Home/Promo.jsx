import { useTranslation } from "react-i18next";
import { useIsVisible } from "react-is-visible";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Home.module.css";

export const Promo = () => {
    const { t } = useTranslation("common");
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const navigate = useNavigate();

    const title = t("promo.title");
    const subTitle = t("promo.subTitle");
    const joinUs = t("promo.joinUs");

    const [play, setPlay] = useState(false);

    const handleSignUp = () => {
        navigate("signup");
    };

    useEffect(() => {
        if (isVisible && !play) setPlay(true);
    }, [isVisible]);

    return (
        <div ref={ref} className={styles.promoContainer}>
            <div className={styles.layer} />
            {play && <motion.h1
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut"
                }}
                style={{ textAlign: "center", willChange: "transform, opacity" }}
                className="h1 text-shadow"
            >{title}</motion.h1>}
            {play && <motion.h2
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .3
                }}
                style={{ width: "70%", textAlign: "center", willChange: "transform, opacity" }}
                className="text-shadow"
            >{subTitle}</motion.h2>}
            {play && <motion.span
                style={{ willChange: "transform, opacity" }}
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .5
                }}
            >
                <GlowButton
                    bg="#d2002a"
                    glowColor="rgba(255, 255, 255, 0.26)"
                    text={joinUs}
                    height="35px"
                    fontSize="18px"
                    shadowed={true}
                    onClick={handleSignUp}
                />
            </motion.span>}
        </div>
    )
}