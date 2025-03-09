import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { GlowButton } from "../UI/GlowButton";

import "swiper/css";
import "swiper/css/free-mode";
import styles from "./Home.module.css";

const teamData = [
    {
        src: "/covers/boy1.webp",
        name: "Никитин Александр",
        number: 3,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Гречанников Матвей",
        number: 71,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Скляров Артем",
        number: 28,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Никитин Александр",
        number: 3,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Никитин Александр",
        number: 3,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Никитин Александр",
        number: 3,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Никитин Александр",
        number: 3,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    },
    {
        src: "/covers/boy1.webp",
        name: "Никитин Александр",
        number: 3,
        data: {
            birth: "30.10.2018",
            position: "Защитник",
            height: 170,
            weight: 50,
            hand: "Правый"
        }
    }
];

export const Team = () => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const dispatch = useDispatch();

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

    const handleOpenModal = (data) => {
        setModal({
            open: true,
            data
        });
    };

    return (
        <div ref={ref} className={styles.teamContainer}>
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
            {isVisible && (
                <motion.div 
                    className={styles.titleWrap}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                >
                    <h1>{t("team.title")}</h1>
                    <div style={{ position: "absolute", right: 0, bottom: "calc(50% - 17.5px)" }}>
                        <GlowButton
                            bg="#000"
                            glowColor="rgba(255, 255, 255, 0.26)"
                            text={t("team.btnText")}
                            height="35px"
                            fontSize="14px"
                            shadowed={true}
                            onClick={() => {
                                navigate("/team");
                                dispatch({
                                    type: "SET_ACTIVE_TAB",
                                    payload: "media"
                                });
                            }}
                        />
                    </div>
                </motion.div>
            )}
            <div className={styles.teamItems}>
                {teamData.map((item, i) => {
                    return (
                        <div key={`team-${i}`} onClick={() => handleOpenModal(item)} className={styles.teamItem}>
                            <img src={item.src} alt="player" />
                            <h2>{item.name}</h2>
                            <p>{item.number}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
