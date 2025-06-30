import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./Home.module.css";

const News = () => {
    const { t } = useTranslation("common");

    const newsData = [
        {
            src: "/gallery/0.webp",
            title: t("promo.newsTitle"),
            descr: t("promo.newsText"),
            date: "23.2.25"
        },
        {
            src: "/gallery/1.webp",
            title: t("promo.newsTitle"),
            descr: t("promo.newsText"),
            date: "23.2.25"
        },
        {
            src: "/gallery/2.webp",
            title: t("promo.newsTitle"),
            descr: t("promo.newsText"),
            date: "23.2.25"
        }
    ];

    return (
        <div className={styles.newsContainer}>
            <motion.div 
                className={styles.titleWrap}
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            >
                <h1 className="h1 text-shadow" style={{ color: "white", textAlign: "start" }}>{t("promo.news")}</h1>
            </motion.div>
            <div className={styles.newsWrap}>
                {newsData.map((item, i) => {
                    return (
                        <motion.div 
                            key={i} 
                            className={styles.newsItem}
                            initial={{ translateY: 50, opacity: 0 }}
                            whileInView={{ translateY: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * (i + 1)}}
                        >
                            <img src={item.src} alt="news image" />
                            <div className={styles.textBlock}>
                                <h2>{item.title}</h2>
                                <p>{item.descr}</p>
                                <span>{item.date}</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
};

export default News;