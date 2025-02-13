import { useTranslation } from "react-i18next";

import styles from "./Team.module.css";

export const Team = () => {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>{t("header.about")}</div>
    )
};