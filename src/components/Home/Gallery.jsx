import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import { GlowButton } from "../UI/GlowButton";

import "swiper/css";
import "swiper/css/free-mode";
import styles from "./Home.module.css";

const slidesData = [
    "/gallery/0.webp",
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp"
];

export const Gallery = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef();
    const isDragging = useRef(false);
    const { t } = useTranslation("common");
    const navigate = useNavigate();
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const dispatch = useDispatch();

    const handleSwitchSlide = () => {
        swiperRef?.current?.swiper?.slideNext();
    };

    return (
        <div ref={ref} className={styles.galleryContainer}>
            {isVisible && (
                <motion.div 
                    className={styles.titleWrap}
                    initial={{ translateY: -50, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                >
                    <h1 className="h1">{t("promo.gallery")}</h1>
                    <div style={{ marginRight: 20, marginLeft: 20 }}>
                        <GlowButton
                            bg="#000"
                            glowColor="rgba(255, 255, 255, 0.26)"
                            text={t("promo.allPhoto")}
                            height="35px"
                            fontSize="14px"
                            shadowed={true}
                            onClick={() => {
                                navigate("/media");
                                dispatch({
                                    type: "SET_ACTIVE_TAB",
                                    payload: "media"
                                });
                            }}
                        />
                    </div>
                </motion.div>
            )}
            <Swiper
                className={styles.swiper}
                spaceBetween={-50}
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                onTouchMove={() => (isDragging.current = true)}
                onTouchEnd={() => setTimeout(() => (isDragging.current = false), 0)}
                grabCursor={true}
                ref={swiperRef}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // realIndex for correct loop handling
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={`slide-${index}`} className={styles.swiperSlide}>
                        <motion.img
                            className={styles.swiperItem}
                            src={slide}
                            alt="slide"
                            animate={{
                                scale: activeSlide === index ? 1 : 0.85,
                                filter: activeSlide === index ? "blur(0px)" : "blur(8px)",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={handleSwitchSlide} className={styles.pagination}>
                <div className={styles.arrow}></div>
            </div>
        </div>
    );
};
