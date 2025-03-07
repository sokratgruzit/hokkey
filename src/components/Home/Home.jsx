import { About } from "./About";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import { News } from "./News";
import { Promo } from "./Promo";
import { Slogan } from "./Slogan";

import styles from "./Home.module.css";

export const Home = () => {
    return (
        <>
            <Promo />
            <Banner />
            <About />
            <Gallery />
            <News />
            <Slogan />
            <div className={styles.knightBg}></div>
        </>
    )
};