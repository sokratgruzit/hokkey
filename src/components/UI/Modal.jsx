import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { GlowButton } from "../UI/GlowButton";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

export const Modal = () => {
    const [fromName, setFromName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    const [modalHeight, setModalHeight] = useState(400);
    const dispatch = useDispatch();
    const { t } = useTranslation("common");
    const modalRef = useRef();

    const name = t("signUp.inputName");
    const yourEmail = t("signUp.inputEmail");
    const sendMessage = t("signUp.sendMessage");
    const subj = t("signUp.subject");
    const reciever = t("signUp.reciever");
    const sendBtn = t("signUp.sendBtn");
    const msg = t("signUp.msg");
    const emptyErr = t("signUp.emptyFieldsErr");
    const msgSent = t("signUp.msgSent");
    const tryLaterErr = t("signUp.tryLaterErr");

    const handleCloseModal = () => {
        dispatch({
            type: "SET_MODAL",
            payload: false
        });
    };

    const handleSubmit = async () => {
        if (!fromName || !subject || !message || !fromEmail) {
            setError(emptyErr);
            return;
        }

        try {
            await emailjs.send(
                "service_q71l61x",
                "template_7oudsly",
                { to: "redknightshc@mail.ru", from_name: fromName, from_email: fromEmail, subject, message },
                "ceI7rbNzPHVxH5AqY"
            );

            setSent(true);
            setError("");
            setFromName("");
            setSubject("");
            setMessage("");
            setFromEmail("");
            handleCloseModal();
        } catch (err) {
            setError(tryLaterErr);
        }
    };

    useEffect(() => {
        if (modalRef.current) setModalHeight(modalRef.current.clientHeight);
    }, [modalRef.current])

    return createPortal(
        <>
            <div onClick={handleCloseModal} className={styles.modalLayout} />
            <motion.div
                ref={modalRef}
                className={styles.modal}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ top: `calc(50% - ${modalHeight / 2}px)`}}
                transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.5 }}
            >
                <div className={styles.titleWrap}>
                    <h2 className={styles.title}>{sendMessage}</h2>
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
                            duration: 0.5,
                            delay: 0.25
                        }}
                    />
                </div>
                <label className={styles.label}>
                    {name}
                    <input
                        className={styles.input}
                        type="text"
                        value={fromName}
                        onChange={(e) => setFromName(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    {yourEmail}
                    <input
                        className={styles.input}
                        type="email"
                        value={fromEmail}
                        onChange={(e) => setFromEmail(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    {subj}
                    <input
                        className={styles.input}
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    {reciever}
                    <input
                        className={styles.input}
                        type="email"
                        value="redknightshc@mail.ru"
                        readOnly
                    />
                </label>
                <label className={styles.label}>
                    {msg}
                    <textarea
                        className={styles.textarea}
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <GlowButton
                    text={sendBtn}
                    height="35px"
                    fontSize="16px"
                    width="100%"
                    bg="#c00"
                    glowColor="rgba(255,255,255,0.26)"
                    shadowed={true}
                    onClick={handleSubmit}
                />
                {error && <p className={styles.error}>{error}</p>}
                {sent && <p className={styles.success}>{msgSent}</p>}
            </motion.div>
        </>,
        modalRoot
    );
};
