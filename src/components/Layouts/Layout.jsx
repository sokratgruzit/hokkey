import { Outlet, useLocation } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import styles from "./Layout.module.css";

export const Layout = () => {
    const location = useLocation();

    const hiddenPaths = ["/coaches/shakarov", "/coaches/matuhov"];

    const shouldHideHeaderFooter = hiddenPaths.includes(location.pathname);

    return (
        <div className={styles.container}>
            {!shouldHideHeaderFooter && <Header />}
            <main className={styles.main}>
                <Outlet />
            </main>
            {!shouldHideHeaderFooter && <Footer />}
        </div>
    );
};
