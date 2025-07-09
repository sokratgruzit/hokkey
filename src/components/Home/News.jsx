import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

const News = () => {
    const { t } = useTranslation("common");

    const t1 = t("news.1");
    const t2 = t("news.2");
    const t3 = t("news.3");
    const t4 = t("news.4");
    const t5 = t("news.5");
    const t6 = t("news.6");

    return (
        <div className={styles.newsContainer}>
            <motion.h1 
                className={`${styles.bannerTitle} h1 text-shadow-red`}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            >
                {t1}
            </motion.h1>
            <p className={styles.newsDescr}>{t2}</p>
            <div className={styles.newsWrap}>
                <div className={styles.newsItem}>
                    <h2>{t3}</h2>
                    <p>{t4}</p>
                </div>
                <div className={styles.newsItem}>
                    <h2>{t5}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t6 }} />  
                </div>
            </div>
        </div>
    )
};

export default News;