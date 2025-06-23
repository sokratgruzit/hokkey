import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { GlowButton } from "../UI/GlowButton";
import Coach from "../3D/Coach";

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
        },
        id: "zaharov"
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
        },
        id: "zaharov"
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
        },
        id: "zaharov"
    },
    // {
    //     src: "/covers/boy1.webp",
    //     name: "Никитин Александр",
    //     number: 3,
    //     data: {
    //         birth: "30.10.2018",
    //         position: "Защитник",
    //         height: 170,
    //         weight: 50,
    //         hand: "Правый"
    //     }
    // },
    // {
    //     src: "/covers/boy1.webp",
    //     name: "Никитин Александр",
    //     number: 3,
    //     data: {
    //         birth: "30.10.2018",
    //         position: "Защитник",
    //         height: 170,
    //         weight: 50,
    //         hand: "Правый"
    //     }
    // },
    // {
    //     src: "/covers/boy1.webp",
    //     name: "Никитин Александр",
    //     number: 3,
    //     data: {
    //         birth: "30.10.2018",
    //         position: "Защитник",
    //         height: 170,
    //         weight: 50,
    //         hand: "Правый"
    //     }
    // },
    // {
    //     src: "/covers/boy1.webp",
    //     name: "Никитин Александр",
    //     number: 3,
    //     data: {
    //         birth: "30.10.2018",
    //         position: "Защитник",
    //         height: 170,
    //         weight: 50,
    //         hand: "Правый"
    //     }
    // },
    // {
    //     src: "/covers/boy1.webp",
    //     name: "Никитин Александр",
    //     number: 3,
    //     data: {
    //         birth: "30.10.2018",
    //         position: "Защитник",
    //         height: 170,
    //         weight: 50,
    //         hand: "Правый"
    //     }
    // }
];

export const Team = () => {
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const dispatch = useDispatch();

    return (
        <div ref={ref} className={styles.teamContainer}>
            {isVisible && (
                <motion.div 
                    className={styles.titleWrap}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                >
                    <h1 className="h1 text-shadow-white">{t("team.title")}</h1>
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
                        <Link to={`/team/${item.id}`} key={`team-${i}`} className={styles.teamItem}>
                            <div className={styles.teamItemContent}>
                                <img src={item.src} alt="player" />
                                <div style={{
                                    position: "absolute",
                                    width: "100%",
                                    bottom: 0,
                                    background: "#FFF",
                                    height: 75
                                }}>
                                    <h2>{item.name}</h2>
                                    <p>{item.number}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};
