import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./BlockWithBorder.module.css";

export const BlockWithBorder = ({ children, delay = 0, width = "80%" }) => {
    const [showContent, setShowContent] = useState(false);
    const pathRef = useRef(null);

    useEffect(() => {
        const totalLength = pathRef.current?.getTotalLength?.();
        if (pathRef.current) {
            pathRef.current.style.strokeDasharray = totalLength;
            pathRef.current.style.strokeDashoffset = totalLength;
            pathRef.current.getBoundingClientRect(); // trigger layout
            pathRef.current.style.transition = "stroke-dashoffset 2s ease-in-out";
            pathRef.current.style.strokeDashoffset = 0;
            setTimeout(() => setShowContent(true), 2000 + delay * 1000);
        }
    }, [delay]);

    return (
        <div className={styles.blockWrapper} style={{ width }}>
            <svg className={styles.borderSvg}>
                <rect
                ref={pathRef}
                x="1"
                y="1"
                width="98%"
                height="98%"
                rx="8"
                ry="8"
                stroke="white"
                strokeWidth="2"
                fill="transparent"
                />
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
