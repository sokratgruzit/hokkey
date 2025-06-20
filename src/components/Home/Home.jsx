import { About } from "./About";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import { News } from "./News";
import { Promo } from "./Promo";
// import { Slogan } from "./Slogan";
// import { Profits } from "./Profits";
import { Trainings } from "./Trainings";
// import { Progress } from "./Progress";
import { Team } from "./Team";

import styles from "./Home.module.css";

export const Home = () => {
    return (
        <>
            <Promo />
            <Banner />
            <About />
            <Gallery />
            <News />
            {/* <Slogan /> */}
            {/* <Profits /> */}
            <Trainings />
            {/* <Progress /> */}
            <Team />
            <div className={styles.knightBg} />
        </>
    )
};