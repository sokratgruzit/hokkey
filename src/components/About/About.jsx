import { useTranslation } from "react-i18next";

import styles from "./About.module.css";

export const About = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>{t("header.about")}</div>
    )
};