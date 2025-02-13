import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { countries } from "../../constants/countries";

import styles from "./Languages.module.css";

export const Languages = () => {
    const language = useSelector(state => state.settings.language);
    const languageModal = useSelector(state => state.settings.languageModal);

    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    const handleLanguageChange = (loc) => {
        let language = countries.find(i => i.lang === loc);

        void i18n.changeLanguage(language.lang);

        dispatch({
            type: "SET_CHOOSEN_LANGUAGE",
            payload: language
        });

        dispatch({
            type: "SET_LANGUAGE_MODAL",
            payload: false
        });

        localStorage.setItem("lang", loc);
    };

    const handleOpenModal = () => {
        dispatch({
            type: "SET_LANGUAGE_MODAL",
            payload: true
        });
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpenModal} className={styles.activeLang}>
                <div className={styles.lang}>{language.langFull}</div>
                <img alt={language.lang} src={language.flag} className={styles.langImg} />
            </div>
            {languageModal && <motion.div 
                className={styles.langs}
                initial={{
                    opacity: 0,
                    translateY: -50
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    duration: .3,
                    type: "spring",
                    stiffness: 150
                }}
            >
                {countries.map(country => {
                    return (
                        <div style={{ background: language.lang === country.lang ? "rgba(0,0,0,.7)" : "transparent" }} onClick={() => handleLanguageChange(country.lang)} key={country.lang} className={styles.activeLang2}>
                            <div style={{ color: language.lang === country.lang ? "white" : "black" }} className={styles.lang}>{country.langFull}</div>
                            <img alt={country.lang} src={country.flag} className={styles.langImg} />
                        </div>
                    )
                })}
            </motion.div>}
        </div>
    )
};