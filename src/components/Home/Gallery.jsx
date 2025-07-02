import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { GlowButton } from "../UI/GlowButton";

import "swiper/css";
import styles from "./Home.module.css";

const slidesData = [
  "/gallery/0.webp", "/gallery/1.webp", "/gallery/2.webp", "/gallery/3.webp", "/gallery/4.webp",
  "/gallery/5.webp", "/gallery/6.webp", "/gallery/7.webp", "/gallery/8.webp", "/gallery/9.webp",
  "/gallery/10.webp"
];

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef();
  const isDragging = useRef(false);
  const { t } = useTranslation("common");
  const navigate = useNavigate();

  const title = t("promo.gallery");
  const joinUs = t("promo.joinUs");

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.update();
      }, 100);
    }
  }, []);

  const handleSwitchSlide = () => {
    swiperRef?.current?.swiper?.slideNext();
  };

  return (
    <div className={styles.galleryContainer}>
      <motion.div
        className={styles.titleWrap}
        initial={{ translateY: -50, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        style={{ willChange: "transform, opacity" }}
      >
        <h1 className="h1 text-shadow-white" style={{ textAlign: "start" }}>{title}</h1>
        <div style={{ marginRight: 20, marginLeft: 20 }}>
          <GlowButton
            bg="#000"
            glowColor="rgba(255, 255, 255, 0.26)"
            text={joinUs}
            height="35px"
            fontSize="18px"
            shadowed={true}
            onClick={() => navigate("signup")}
          />
        </div>
      </motion.div>

      <Swiper
        className={styles.swiper}
        style={{
          opacity: 1,
          pointerEvents: "auto",
          transition: "opacity 0.3s ease"
        }}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1440: { slidesPerView: 5 }
        }}
        centeredSlides={true}
        loop={true}
        onTouchMove={() => (isDragging.current = true)}
        onTouchEnd={() => setTimeout(() => (isDragging.current = false), 0)}
        grabCursor={true}
        ref={swiperRef}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`} className={styles.swiperSlide}>
            <motion.img
              className={styles.swiperItem}
              src={slide}
              alt="slide"
              animate={{
                scale: activeSlide === index ? 1 : 0.85,
                opacity: activeSlide === index ? 1 : 0.4
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div onClick={handleSwitchSlide} className={styles.pagination}>
        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 512 512">
          <path d="M476.92,493.76L240.333,256.32L476.707,18.24c4.16-4.16,4.16-10.88,0-15.04C474.68,1.067,472.013,0,469.24,0H286.627c-2.88,0-5.547,1.173-7.573,3.2L35.107,248.853c-4.16,4.16-4.16,10.88,0,15.04l244.16,245.013c2.027,2.027,4.693,3.093,7.573,3.093h182.507c5.867,0,10.667-4.8,10.667-10.667C480.013,498.56,478.947,495.787,476.92,493.76z"/>
        </svg>
      </div>
    </div>
  );
};

export default Gallery;
