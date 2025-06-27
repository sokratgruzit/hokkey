import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
        <span className={styles.loader} />
    </div>
  );
};
