import { useTranslation } from "react-i18next";

import styles from "./Media.module.css";

export const Media = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>{t("header.about")}</div>
    )
};