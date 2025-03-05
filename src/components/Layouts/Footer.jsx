import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useIsVisible } from "react-is-visible";

import styles from "./Layout.module.css";

export const Footer = () => {
    const year = new Date().getFullYear();
    const { t } = useTranslation("common");
    const dispatch = useDispatch();
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    const handleActiveTab = (tab) => {
        dispatch({
            type: "SET_ACITVE_TAB",
            payload: tab
        });
    };

    return (
        <div ref={ref} className={styles.footerWrap}>
            {isVisible && <motion.div 
                className={styles.footerContainer}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    duration: .5
                }}
            >
                <Link 
                    to="/" className={styles.headerLink}
                    onClick={() => handleActiveTab("")}
                >
                    <img 
                        src="/appIcons/red-knights.svg" 
                        alt="logo" 
                        className={styles.logo}
                    />
                </Link>
                <div className={styles.footerSection}>
                    <h2>{t("promo.aboutUs")}</h2>
                    <Link 
                        to="/team" className={styles.footerLink}
                        onClick={() => handleActiveTab("team")}
                    >{t("header.team")}</Link>
                    <Link 
                        to="/media" className={styles.footerLink}
                        onClick={() => handleActiveTab("media")}
                    >{t("header.media")}</Link>
                    <Link 
                        to="/progam" className={styles.footerLink}
                        onClick={() => handleActiveTab("program")}
                    >{t("header.program")}</Link>
                </div>
                <div className={styles.footerSection}>
                    <h2>{t("footer.address")}</h2>
                    <p style={{ lineHeight: 1.6 }} className={styles.footerLink} dangerouslySetInnerHTML={{ __html: t("footer.addressDescr") }}></p>
                </div>
                <div className={styles.footerSection}>
                    <h2>{t("footer.contacts")}</h2>
                    <p style={{ lineHeight: 1.6 }} className={styles.footerLink} dangerouslySetInnerHTML={{ __html: t("footer.contactsDescr") }}></p>
                </div>
                <div className={styles.copyright}>
                    <p>{t("footer.copyright")}</p>
                    <span>&#169;</span>
                    <span>{year}</span>
                    <span>|</span>
                    <Link 
                        to="/policy" className={styles.footerLink}
                    >{t("footer.policy")}</Link>
                </div>
            </motion.div>}
        </div>
    )
};