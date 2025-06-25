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
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
    "/gallery/7.webp",
    "/gallery/8.webp",
    "/gallery/9.webp",
    "/gallery/10.webp"
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
                    <h1 style={{ textAlign: "start" }} className="h1 text-shadow-white">{t("promo.gallery")}</h1>
                    <div style={{ marginRight: 20, marginLeft: 20 }}>
                        <GlowButton
                            bg="#000"
                            glowColor="rgba(255, 255, 255, 0.26)"
                            text={t("promo.allPhoto")}
                            height="35px"
                            fontSize="18px"
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
                spaceBetween={10}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 5
                    }
                }}
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
                                opacity: activeSlide === index ? 1 : .4,
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={handleSwitchSlide} className={styles.pagination}>
                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
		            <path d="M476.92,493.76L240.333,256.32L476.707,18.24c4.16-4.16,4.16-10.88,0-15.04C474.68,1.067,472.013,0,469.24,0H286.627    c-2.88,0-5.547,1.173-7.573,3.2L35.107,248.853c-4.16,4.16-4.16,10.88,0,15.04l244.16,245.013    c2.027,2.027,4.693,3.093,7.573,3.093h182.507c5.867,0,10.667-4.8,10.667-10.667C480.013,498.56,478.947,495.787,476.92,493.76z     M291.213,490.667L57.72,256.32L291,21.333h152.533L217.72,248.853c-4.16,4.16-4.16,10.88,0,15.04l225.92,226.773H291.213z"/>
                </svg>
            </div>
        </div>
    );
};
