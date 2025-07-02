import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Home.module.css";

const Promo = () => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();

    const title = t("promo.title");
    const subTitle = t("promo.subTitle");
    const joinUs = t("promo.joinUs");

    const handleSignUp = () => {
        navigate("signup");
    };

    return (
        <div className={styles.promoContainer}>
            <div className={styles.layer} />
            <div className={styles.promoTextWrap}>
                <motion.h1
                    initial={{ translateY: -50, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                    className={`${styles.animatedText} h1 text-shadow`}
                >{title}</motion.h1>
                <motion.h2
                    initial={{ translateY: -50, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: .3
                    }}
                    className={`${styles.animatedText} text-shadow`}
                >{subTitle}</motion.h2>
            </div>
            <motion.span
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: .5
                }}
                className={styles.animatedBtn}
            >
                <GlowButton
                    bg="#c00"
                    glowColor="rgba(255, 255, 255, 0.26)"
                    text={joinUs}
                    height="35px"
                    fontSize="18px"
                    shadowed={true}
                    onClick={handleSignUp}
                />
            </motion.span>
        </div>
    )
};

export default Promo;