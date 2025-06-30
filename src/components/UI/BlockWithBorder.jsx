import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./BlockWithBorder.module.css";

export const BlockWithBorder = ({
    children,
    delay = 0,
    delayBeforeStart = 0, // в секундах
    width = "80%",
    bg = "#000",
    h = "auto",
    align = "center",
    onBorderAnimationEnd = () => {}
}) => {
    const [showContent, setShowContent] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const [size, setSize] = useState({ width: 0, height: 0 });

    const wrapperRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current) return;

        const updateSize = () => {
            if (wrapperRef.current) {
                const { width, height } = wrapperRef.current.getBoundingClientRect();
                setSize({ width, height });
            }
        };

        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(wrapperRef.current);

        updateSize();

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartAnimation(true);
        }, delayBeforeStart * 1000);

        return () => clearTimeout(timeout);
    }, [delayBeforeStart]);

    useEffect(() => {
        if (!startAnimation || !pathRef.current) return;

        const totalLength = pathRef.current.getTotalLength?.();
        if (totalLength) {
            pathRef.current.style.strokeDasharray = totalLength;
            pathRef.current.style.strokeDashoffset = totalLength;
            pathRef.current.getBoundingClientRect(); // trigger layout
            pathRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
            pathRef.current.style.strokeDashoffset = 0;

            const contentTimeout = setTimeout(() => {
                setShowContent(true);
                onBorderAnimationEnd();
            }, 2000 + delay * 1000);

            return () => clearTimeout(contentTimeout);
        }
    }, [startAnimation, size.width, size.height, delay]);

    const safeWidth = typeof width === 'number' ? `${width}px` : width;

    return (
        <div
            ref={wrapperRef}
            className={styles.blockWrapper}
            style={{ height: h, width: safeWidth, background: bg, justifyContent: align }}
        >
            <svg className={styles.borderSvg}>
                {startAnimation && size.width > 2 && size.height > 2 && (
                    <rect
                        ref={pathRef}
                        x="1"
                        y="1"
                        width={size.width - 2}
                        height={size.height - 2}
                        rx="8"
                        ry="8"
                        stroke="white"
                        strokeWidth="2"
                        fill="transparent"
                    />
                )}
            </svg>
            {showContent && (
                <motion.div
                    className={styles.blockContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};
