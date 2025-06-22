import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

import { GlowButton } from "../UI/GlowButton";
import styles from "./SignUp.module.css";

export const SignUp = () => {
  const { t } = useTranslation("common");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !phone || !birthYear || !agreed) {
      setError(t("signUp.emptyFieldsErr"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t("signUp.invalidEmailErr"));
      return;
    }

    try {
      // 1. Отправка автоответа юзеру
      await emailjs.send(
        "service_q71l61x",
        "template_7oudsly",
        {
          name,
          email,
          phone,
          birthYear,
        },
        "ceI7rbNzPHVxH5AqY"
      );

      // 2. Отправка уведомления админу
      await emailjs.send(
        "service_q71l61x",
        "template_70llng8",
        {
          name,
          email,
          phone,
          birthYear,
        },
        "ceI7rbNzPHVxH5AqY"
      );

      setSent(true);
      setError("");
      setName("");
      setEmail("");
      setPhone("");
      setBirthYear("");
      setAgreed(false);
    } catch (err) {
      setError(t("signUp.tryLaterErr"));
    }
  };

  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-shadow"
      >
        {t("signUp.title")}
      </motion.h1>

      <motion.h3
        initial={{ translateY: -50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      >
        {t("signUp.subTitle")}
      </motion.h3>

      <div className={styles.form}>
        <motion.input
          type="text"
          placeholder={t("signUp.inputName")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        />

        <motion.input
          type="email"
          placeholder={t("signUp.inputEmail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        />

        <motion.input
          type="tel"
          placeholder={t("signUp.inputPhone")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        />

        <motion.input
          type="number"
          placeholder={t("signUp.inputYear")}
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className={styles.input}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        />

        <motion.label
          className={styles.checkboxLabel}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          {t("signUp.confirm")}
        </motion.label>

        <motion.span
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
          style={{ width: "100%" }}
        >
          <GlowButton
            bg="#d2002a"
            glowColor="rgba(255, 255, 255, 0.26)"
            text={t("signUp.submit")}
            height="35px"
            width="100%"
            fontSize="14px"
            shadowed={true}
            onClick={handleSubmit}
          />
        </motion.span>
        {error && <p className={styles.error}>{error}</p>}
        {sent && <p className={styles.success}>{t("signUp.success")}</p>}
      </div>

      <div className={styles.knightBg} />
    </div>
  );
};
