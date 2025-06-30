import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Languages } from "../Languages/Languages";

import styles from "./Layout.module.css";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    const activeTab = useSelector(state => state.settings.activeTab);

    const { t } = useTranslation("common");
    const lastScrollY = useRef(0);
    const headerRef = useRef(null);
    const dispatch = useDispatch();

    const handleActiveTab = (tab) => {
        dispatch({
            type: "SET_ACITVE_TAB",
            payload: tab
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            dispatch({
                type: "SET_LANGUAGE_MODAL",
                payload: false
            });

            setIsSticky(currentScrollY > 50);
            setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isSticky && scrollDirection === "up") {
            headerRef.current.style.transform = "translateY(0px)";
        } else if (isSticky && scrollDirection === "down") {
            headerRef.current.style.transform = "translateY(-100px)";
        } else {
            headerRef.current.style.transform = "translateY(0px)";
        }
    }, [scrollDirection, isSticky]);

    return (
        <div ref={headerRef} className={styles.headerContainer}>
            <Link 
                to="/" className={styles.headerLink}
                onClick={() => handleActiveTab("")}
            >
                <motion.img 
                    src="/appIcons/red-knights.svg" 
                    alt="logo" 
                    className={styles.logo}
                    initial={{ translateY: -200 }}
                    animate={{ translateY: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 1,
                        delay: .5
                    }}
                />
            </Link>
            <div className={styles.linkWrap}>
                <Link 
                    to="/about" 
                    className={`${styles.headerLink} ${activeTab === "about" ? "text-shadow-small" : null}`}
                    onClick={() => handleActiveTab("about")}
                    style={{
                        color: activeTab === "about" ? "#c00" : "#fff"
                    }}
                >{t("header.about")}</Link>
                {/* <Link 
                    to="/media" 
                    className={`${styles.headerLink} ${activeTab === "media" ? "text-shadow-small" : null}`}
                    onClick={() => handleActiveTab("media")}
                    style={{
                        color: activeTab === "media" ? "#c00" : "#fff"
                    }}
                >{t("header.media")}</Link> */}
                <Link 
                    to="/program" 
                    className={`${styles.headerLink} ${activeTab === "program" ? "text-shadow-small" : null}`}
                    onClick={() => handleActiveTab("program")}
                    style={{
                        color: activeTab === "program" ? "#c00" : "#fff"
                    }}
                >{t("header.program")}</Link>
            </div>
            <Languages />
        </div>
    )
};