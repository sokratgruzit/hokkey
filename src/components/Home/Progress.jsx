import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const points = Array.from({ length: 13 });
const TOTAL_DEGREES = 360;
const SEGMENT_DEGREES = TOTAL_DEGREES / points.length;

export const Progress = () => {
  const { t } = useTranslation("common");
  const ref = useRef();

  const [containerSize, setContainerSize] = useState(0);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    let step = 7.5;
    if (index > 3) step = 7.6;
    if (index > 7) step = 7.7;

    const newProgress = index < 12 ? index * step : 100;
    animateProgress(progress, newProgress);
    setProgress(newProgress);
  };

  const animateProgress = (prev, target) => {
    let duration = target > 50 || prev > 50 ? 10 : 50;
    let step = prev;

    const interval = setInterval(() => {
      step += 1;
      setCurrent(step);
      if (step >= target) {
        clearInterval(interval);
        setCurrent(target);
      }
    }, duration);
  };

  useEffect(() => {
    const updateSize = () => {
      setContainerSize(window.innerWidth);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const radius = Math.max(0, containerSize / 2 - 20);
  const coef = window.innerWidth <= 768 ? 200 : 400;

  return (
    <div ref={ref} className={styles.progressContainer}>
      <div className={styles.titleWrap}>
        <h1>{t("progress.title")}</h1>
        <div className={styles.descr}>
          <h2>{t("progress.descr")}</h2>
          <p>{t("progress.annotation")}</p>
        </div>
      </div>

      <motion.img
        src="/appIcons/red-knights.svg"
        alt="logo"
        className={styles.svgKnight}
        style={{
          width: containerSize / 2,
          height: containerSize / 2,
          bottom: `calc(50% - ${containerSize / 4 + (window.innerWidth <= 768 ? 150 : 90)}px)`,
          left: `calc(50% - ${containerSize / 4}px)`
        }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: progress / 100,
          scale: [1, 0.9, 1]
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {containerSize > 0 && (
        <svg
          transform="rotate(-60)"
          width={containerSize}
          height={containerSize}
          viewBox={`0 0 ${containerSize + coef} ${containerSize + coef}`}
        >
          <circle
            cx={containerSize / 2 + coef / 2}
            cy={containerSize / 2 + coef / 2}
            r={radius}
            fill="none"
            stroke="rgba(0,0,0,.3)"
            strokeWidth="5"
          />
          <motion.circle
            cx={containerSize / 2 + coef / 2}
            cy={containerSize / 2 + coef / 2}
            r={radius}
            fill="none"
            stroke="#d2002a"
            strokeWidth="5"
            strokeDasharray={2 * Math.PI * radius}
            strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * radius}
            initial={{ strokeDashoffset: 2 * Math.PI * radius }}
            animate={{ strokeDashoffset: (1 - progress / 100) * 2 * Math.PI * radius }}
            transition={{ duration: 0.5 }}
          />
          {points.map((_, index) => {
            const angle = SEGMENT_DEGREES * (index + 1) - 29;
            const step = index > 7 ? 7.7 : index > 3 ? 7.6 : 7.5;
            const x = containerSize / 2 + coef / 2 + radius * Math.cos((angle * Math.PI) / 180);
            const y = containerSize / 2 + coef / 2 + radius * Math.sin((angle * Math.PI) / 180);
            const text = t(`progress.p${index + 1}`);

            const textPositions = [
              { x: 0, y: -40, r: 62.5 },
              { x: 0, y: -40, r: 34 },
              { x: 0, y: -40, r: 6 },
              { x: 0, y: -40, r: -21.5 },
              { x: 0, y: -40, r: -49 },
              { x: 50, y: 60, r: -77 },
              { x: -50, y: 60, r: -104.5 },
              { x: 0, y: -40, r: -132 },
              { x: 0, y: -40, r: -161 },
              { x: 0, y: -40, r: 172.5 },
              { x: 0, y: -40, r: 145 },
              { x: 0, y: -40, r: 117 },
              { x: 0, y: -40, r: 89 }
            ];

            const { x: offsetX, y: offsetY, r: rotate } = textPositions[index] || { x: 0, y: -40, r: 0 };

            return (
              <g key={index} onClick={() => handleClick(index)} cursor="pointer">
                <circle
                  cx={x}
                  cy={y}
                  r={index * step <= progress ? 20 : 10}
                  fill="#d2002a"
                />
                <text
                  x={x + offsetX}
                  y={y + offsetY}
                  textAnchor="middle"
                  fontSize={index < 12 ? (window.innerWidth <= 768 ? "1rem" : "1.5rem") : "3rem"}
                  fill={index < 12 ? "#FFF" : "#d2002a"}
                  transform={`rotate(${angle + rotate} ${x} ${y})`}
                >
                  {index < 12
                    ? `${text} (${((index + 1) * step).toFixed(0)}%)`
                    : `${text} (${current.toFixed(0)}%)`}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
};
