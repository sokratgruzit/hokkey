import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";

import styles from "./Layout.module.css";
import { Loader } from "../UI/Loader";

export const Layout = () => {
    const location = useLocation();
    const isLoading = useSelector((state) => state.settings.isLoading);

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
        </div>
    );
};
