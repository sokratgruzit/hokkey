import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./Layout.module.css";

export const Footer = () => {
    const year = new Date().getFullYear();
    const { t } = useTranslation("common");
    const dispatch = useDispatch();

    const created = t("header.created");

    const handleActiveTab = (tab) => {
        dispatch({
            type: "SET_ACITVE_TAB",
            payload: tab
        });
    };

    const handleModal = () => {
        dispatch({
            type: "SET_MODAL",
            payload: true
        });
    };

    return (
        <footer className={styles.footerWrap}>
            <div className={styles.footerContainer}>
                <Link 
                    to="/" className={styles.footerLink}
                    onClick={() => handleActiveTab("")}
                >
                    <img 
                        src="/appIcons/red-knights.svg" 
                        alt="logo" 
                        className={styles.logo}
                    />
                </Link>
                <div className={styles.footerSection}>
                    <a className={styles.phone} href="tel:+79639781468">+7 (963) 978-14-68</a>
                    <div onClick={handleModal} className={styles.email}>redknightshc@mail.ru</div>
                    <div className={styles.copyright}>
                        <p>{t("footer.copyright")}</p>
                        <span>&#169;</span>
                        <span>{year}</span>
                        <span>|</span>
                        <Link 
                            to="/policy" className={styles.copyrightLink}
                        >{t("footer.policy")}</Link>
                    </div>
                </div>
                <div className={styles.footerSection2}>
                    <a href="https://t.me/Shakarov_T" target="_blank">
                        <svg className={styles.telegram} xmlns="http://www.w3.org/2000/svg" fill="#FFF" version="1.1" id="Layer_1" viewBox="0 0 24 24">
                            <path d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4  c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8  C17,6.9,17.4,7.1,17.1,7.4z"/>
                            <rect y="0" fill="none" width="24" height="24"/>
                        </svg>
                    </a>
                    <a href="https://wa.me/79639781468" target="_blank">
                        <svg className={styles.whatsup} xmlns="http://www.w3.org/2000/svg" fill="#FFF" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 30.667 30.667">
                            <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017   c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382   c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076   c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427   c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437   c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536   c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609   c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611   c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787   c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739   C23.307,19.268,23.307,18.533,23.214,18.38z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com/redknights_hc" target="_blank">
                        <svg className={styles.insta} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF"/>
                            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF"/>
                        </svg>
                    </a>
                </div>
                <a className={styles.created} href="https://t.me/black_sokrat" target="_blank">
                    <span>{created}</span>
                    <span style={{ color: "#c00" }}>Sokrat</span>
                </a>
            </div>
        </footer>
    )
};