import { motion } from "framer-motion";
import { useState } from "react";

import styles from "./Modal.module.css";

export const Modal = () => {
    const [modal, setModal] = useState({
        open: false,
        data: null
    });

    const handleCloseModal = () => {
        setModal({
            open: false,
            data: null
        });
    };

    return (
        <>
        {modal.open && <div onClick={handleCloseModal} className={styles.modalLayout} />}
            {modal.open && <motion.div 
                className={styles.modal}
                onClick={handleCloseModal}
                initial={{ sacle: 0 }}
                animate={{ scale: [0, 1] }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    duration: .5
                }}
            >
                <div className={styles.modalTitleWrap}>
                    <h2>{modal.data.name}</h2>
                    <p>{modal.data.number}</p>
                </div>
                <div className={styles.modalSeparator} />
                <p className={styles.modalBirth}>{`${t("team.birth")} ${modal.data.data.birth}`}</p>
                <div className={styles.modalSeparator} />
                <div className={styles.modalData}>
                    <div className={styles.dataP}>
                        <p>{t("team.height")}</p>
                        <p>{modal.data.data.height}</p>
                    </div>
                    <div className={styles.dataP}>
                        <p>{t("team.weight")}</p>
                        <p>{modal.data.data.weight}</p>
                    </div>
                    <div className={styles.dataP}>
                        <p>{t("team.hand")}</p>
                        <p>{modal.data.data.hand}</p>
                    </div>
                </div>
                <div className={styles.modalPosition}>
                    <p>{t("team.position")}</p>
                    <p>{modal.data.data.position}</p>
                </div>
                <motion.img 
                    src="/appIcons/red-knights.svg" 
                    alt="logo" 
                    className={styles.modalKnight}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1] }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        duration: .5,
                        delay: .25
                    }}
                />
            </motion.div>}
        </>
    )
};