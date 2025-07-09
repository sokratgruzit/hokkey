import { useTranslation } from "react-i18next";

import styles from "./Policy.module.css";

export const Policy = () => {
    const { t } = useTranslation("common");

    const title = t("policy.title");
    const t1 = t("policy.1");
    const t1a = t("policy.1a");
    const t11 = t("policy.11");
    const t12 = t("policy.12");
    const t2 = t("policy.2");
    const t21 = t("policy.21");
    const t22 = t("policy.22");
    const t23 = t("policy.23");
    const t24 = t("policy.24");
    const t25 = t("policy.25");
    const t26 = t("policy.26");
    const t27 = t("policy.27");
    const t28 = t("policy.28");
    const t29 = t("policy.29");
    const t210 = t("policy.210");
    const t211 = t("policy.211");
    const t212 = t("policy.212");
    const t213 = t("policy.213");
    const t214 = t("policy.214");
    const t3 = t("policy.3");
    const t31 = t("policy.31");
    const t32 = t("policy.32");
    const t4 = t("policy.4");
    const t41 = t("policy.41");
    const t42 = t("policy.42");
    const t43 = t("policy.43");
    const t5 = t("policy.5");
    const t51 = t("policy.51");
    const t52 = t("policy.52");
    const t53 = t("policy.53");
    const t54 = t("policy.54");
    const t55 = t("policy.55");
    const t56 = t("policy.56");
    const t57 = t("policy.57");
    const t6 = t("policy.6");
    const t6a = t("policy.6a");
    const t7 = t("policy.7");
    const t71 = t("policy.71");
    const t72 = t("policy.72");
    const t73 = t("policy.73");
    const t74 = t("policy.74");
    const t75 = t("policy.75");
    const t76 = t("policy.76");
    const t77 = t("policy.77");
    const t8 = t("policy.8");
    const t8a = t("policy.8a");
    const t81 = t("policy.81");
    const t82 = t("policy.82");
    const t83 = t("policy.83");
    const t84 = t("policy.84");
    const t8b = t("policy.8b");
    const t85 = t("policy.85");
    const t86 = t("policy.86");
    const t87 = t("policy.87");
    const t88 = t("policy.88");
    const t89 = t("policy.89");
    const t9 = t("policy.9");
    const t91 = t("policy.91");
    const t92 = t("policy.92");
    const t10 = t("policy.10");
    const t101 = t("policy.101");
    const t102 = t("policy.102");
    const t011 = t("policy.011");
    const t011a = t("policy.011a");
    const t012 = t("policy.012");
    const t0121 = t("policy.0121");
    const t0122 = t("policy.0122");
    const t0123 = t("policy.0123");

    return (
        <div className={styles.container}>
            <div className={`h1 text-shadow ${styles.title}`}>{title}</div>
            <div className={styles.section}>
                <div className={styles.text}><span>1.</span> {t1}</div>
                <div style={{ marginLeft: 40 }} className={styles.text}>{t1a}</div>
                <div className={styles.text}><span>1.1.</span> {t11}</div>
                <div className={styles.text}>
                    <span>1.2.</span>
                    <p dangerouslySetInnerHTML={{ __html: t12 }} />
                </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>2.</span> {t2}</div>
                <div className={styles.text}><span>2.1.</span> {t21}</div>
                <div className={styles.text}><span>2.2.</span> {t22}</div>
                <div className={styles.text}>
                    <span>2.3.</span>
                    <p dangerouslySetInnerHTML={{ __html: t23 }} />
                </div>
                <div className={styles.text}><span>2.4.</span> {t24}</div>
                <div className={styles.text}><span>2.5.</span> {t25}</div>
                <div className={styles.text}><span>2.6.</span> {t26}</div>
                <div className={styles.text}><span>2.7.</span> {t27}</div>
                <div className={styles.text}>
                    <span>2.8.</span>
                    <p dangerouslySetInnerHTML={{ __html: t28 }} />
                </div>
                <div className={styles.text}><span>2.9.</span> {t29}</div>
                <div className={styles.text}>
                    <span>2.10.</span>
                    <p dangerouslySetInnerHTML={{ __html: t210 }} />
                </div>
                <div className={styles.text}><span>2.11.</span> {t211}</div>
                <div className={styles.text}><span>2.12.</span> {t212}</div>
                <div className={styles.text}><span>2.13.</span> {t213}</div>
                <div className={styles.text}><span>2.14.</span> {t214}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>3.</span> {t3}</div>
                <div className={styles.text}>
                    <span>3.1.</span>
                    <p dangerouslySetInnerHTML={{ __html: t31 }} />
                </div>
                <div className={styles.text}>
                    <span>3.2.</span>
                    <p dangerouslySetInnerHTML={{ __html: t32 }} />
                </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>4.</span> {t4}</div>
                <div className={styles.text}>
                    <span>4.1.</span>
                    <p dangerouslySetInnerHTML={{ __html: t41 }} />
                </div>
                <div className={styles.text}>
                    <span>4.2.</span>
                    <p dangerouslySetInnerHTML={{ __html: t42 }} />
                </div>
                <div className={styles.text}><span>4.3.</span> {t43}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>5.</span> {t5}</div>
                <div className={styles.text}><span>5.1.</span> {t51}</div>
                <div className={styles.text}><span>5.2.</span> {t52}</div>
                <div className={styles.text}><span>5.3.</span> {t53}</div>
                <div className={styles.text}><span>5.4.</span> {t54}</div>
                <div className={styles.text}><span>5.5.</span> {t55}</div>
                <div className={styles.text}><span>5.6.</span> {t56}</div>
                <div className={styles.text}><span>5.7.</span> {t57}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>6.</span> {t6}</div>
                <div style={{ marginLeft: 40 }} className={styles.text}>{t6a}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>7.</span> {t7}</div>
                <div className={styles.text}><span>7.1.</span> {t71}</div>
                <div className={styles.text}><span>7.2.</span> {t72}</div>
                <div className={styles.text}><span>7.3.</span> {t73}</div>
                <div className={styles.text}><span>7.4.</span> {t74}</div>
                <div className={styles.text}><span>7.5.</span> {t75}</div>
                <div className={styles.text}><span>7.6.</span> {t76}</div>
                <div className={styles.text}><span>7.7.</span> {t77}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>8.</span> {t8}</div>
                <div style={{ marginLeft: 40 }} className={styles.text}>{t8a}</div>
                <div className={styles.text}><span>8.1.</span> {t81}</div>
                <div className={styles.text}><span>8.2.</span> {t82}</div>
                <div className={styles.text}>
                    <span>8.3.</span>
                    <p dangerouslySetInnerHTML={{ __html: t83 }} />
                </div>
                <div className={styles.text}><span>8.4.</span> {t84}</div>
                <div style={{ marginLeft: 40, border: "2px dotted white", padding: 5 }} className={styles.text}>
                    <p dangerouslySetInnerHTML={{ __html: t8b }} />
                </div>
                <div className={styles.text}><span>8.5.</span> {t85}</div>
                <div className={styles.text}><span>8.6.</span> {t86}</div>
                <div className={styles.text}><span>8.7.</span> {t87}</div>
                <div className={styles.text}><span>8.8.</span> {t88}</div>
                <div className={styles.text}><span>8.9.</span> {t89}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>9.</span> {t9}</div>
                <div className={styles.text}><span>9.1.</span> {t91}</div>
                <div className={styles.text}><span>9.2.</span> {t92}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>10.</span> {t10}</div>
                <div className={styles.text}><span>10.1.</span> {t101}</div>
                <div className={styles.text}><span>10.2.</span> {t102}</div>
            </div>
            <div className={styles.separator} />
            <div className={styles.section}>
                <div className={styles.text}><span>11.</span> {t011}</div>
                <div style={{ marginLeft: 40 }} className={styles.text}>{t011a}</div>
            </div>
            <div className={styles.section}>
                <div className={styles.text}><span>12.</span> {t012}</div>
                <div className={styles.text}>
                    <span>12.1.</span>
                    <p dangerouslySetInnerHTML={{ __html: t0121 }} />
                </div>
                <div className={styles.text}><span>12.2.</span> {t0122}</div>
                <div className={styles.text}>
                    <span>12.3.</span>
                    <p dangerouslySetInnerHTML={{ __html: t0123 }} />
                </div>
            </div>
        </div>
    )
};