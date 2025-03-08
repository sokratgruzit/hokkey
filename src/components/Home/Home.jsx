import { About } from "./About";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import { News } from "./News";
import { Promo } from "./Promo";
import { Slogan } from "./Slogan";
import { Profits } from "./Profits";
import { Trainings } from "./Trainings";

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
            <Profits />
            <Trainings />
            <div className={styles.knightBg}></div>
        </>
    )
};