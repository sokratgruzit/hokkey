import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useIsVisible } from "react-is-visible";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import { GlowButton } from "../UI/GlowButton";

import "swiper/css";
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

    const handleSwipeSlide = (event) => {
        const touchStartX = event.clientX; 
        const screenWidth = window.innerWidth; 

        if (!isDragging.current && swiperRef.current) {
            if (touchStartX < screenWidth / 2) {
                swiperRef?.current?.swiper?.slideTo(activeSlide - 1); 
            } else {
                swiperRef?.current?.swiper?.slideTo(activeSlide + 1); 
            }
        }
    };

    return (
        <div ref={ref} className={styles.galleryContainer}>
            {isVisible && <motion.div 
                className={styles.titleWrap}
                initial={{ translateY: -50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                    duration: .8,
                    ease: "easeInOut",
                    delay: .1
                }}
            >
                <h1>{t("promo.gallery")}</h1>
                <div style={{ marginRight: 20 }}>
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
                                type: "SET_ACITVE_TAB",
                                payload: "media"
                            });
                        }}
                    />
                </div>
            </motion.div>}
            <Swiper
                id="excluder"
                className={styles.swiper}
                spaceBetween={0}
                slidesPerView={1.5}
                freeMode={true}
                onTouchMove={() => (isDragging.current = true)}
                onTouchEnd={() => setTimeout(() => (isDragging.current = false), 0)}
                grabCursor={true} 
                loop={false}
                ref={swiperRef}
                onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide id="excluder" key={`slide-${index}`}>
                        <img 
                            className={styles.swiperItem}
                            onClick={handleSwipeSlide}
                            id="excluder"
                            src={slide}
                            alt="slide"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div onClick={() => handleSwitchSlide()} className={styles.pagination}>
                <div className={styles.arrow}></div>
            </div>
        </div>
    )
};
