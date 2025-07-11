import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "../UI/Loader";
import { Modal } from "../UI/Modal";

import styles from "./Layout.module.css";

export const Layout = () => {
    const location = useLocation();
    const isLoading = useSelector((state) => state.settings.isLoading);
    const modal = useSelector((state) => state.settings.modal);

    const hiddenPaths = ["/coaches/shakarov", "/coaches/matuhov"];

    const shouldHideHeaderFooter = hiddenPaths.includes(location.pathname);

    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            {!shouldHideHeaderFooter && <Header />}
            <main className={styles.main}>
                <Outlet />
            </main>
            {!shouldHideHeaderFooter && <Footer />}
            {modal && <Modal />}
        </div>
    );
};
