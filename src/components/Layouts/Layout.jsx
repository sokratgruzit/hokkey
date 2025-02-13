import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Suspense fallback={<></>}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
};