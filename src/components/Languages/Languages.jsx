import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { countries } from "../../constants/countries";

import styles from "./Languages.module.css";

export const Languages = () => {
  const language = useSelector((state) => state.settings.language);
  const languageModal = useSelector((state) => state.settings.languageModal);

  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (loc) => {
    const selectedLanguage = countries.find((i) => i.lang === loc);

    if (!selectedLanguage) {
      console.warn("Language not found:", loc);
      return;
    }

    void i18n.changeLanguage(selectedLanguage.lang);

    dispatch({
      type: "SET_CHOOSEN_LANGUAGE",
      payload: selectedLanguage,
    });

    dispatch({
      type: "SET_LANGUAGE_MODAL",
      payload: false,
    });

    localStorage.setItem("lang", loc);
  };

  const handleOpenModal = () => {
    dispatch({
      type: "SET_LANGUAGE_MODAL",
      payload: true,
    });
  };

  // Защита на случай, если language ещё не загружен
  if (!language) {
    return null; // Или какой-то скелетон/заглушка
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpenModal} className={styles.activeLang}>
        <div className={styles.lang}>{language.langFull}</div>
        <img alt={language.lang} src={language.flag} className={styles.langImg} />
      </div>
      {languageModal && (
        <motion.div
          className={styles.langs}
          initial={{
            opacity: 0,
            translateY: -50,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 150,
          }}
        >
          {countries.map((country) => (
            <div
              key={country.lang}
              onClick={() => handleLanguageChange(country.lang)}
              className={styles.activeLang2}
              style={{
                background: language.lang === country.lang ? "rgba(0,0,0,.7)" : "transparent",
              }}
            >
              <div
                className={styles.lang}
                style={{ color: language.lang === country.lang ? "white" : "black" }}
              >
                {country.langFull}
              </div>
              <img alt={country.lang} src={country.flag} className={styles.langImg} />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
