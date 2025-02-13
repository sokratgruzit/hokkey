import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Languages } from "../Languages/Languages";

import styles from "./Layout.module.css";

export const Header = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.headerLink}>Logo</Link>
            <Link to="/about" className={styles.headerLink}>{t("header.about")}</Link>
            <Link to="/team" className={styles.headerLink}>{t("header.team")}</Link>
            <Link to="/media" className={styles.headerLink}>{t("header.media")}</Link>
            <Link to="/program" className={styles.headerLink}>{t("header.program")}</Link>
            <Languages />
        </div>
    )
};