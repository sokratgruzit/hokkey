import { useTranslation } from "react-i18next";

import styles from "./Program.module.css";

export const Program = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>{t("header.about")}</div>
    )
};