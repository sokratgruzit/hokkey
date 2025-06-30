import { lazy, Suspense } from "react";

const Promo = lazy(() => import("./Promo"));
const Banner = lazy(() => import("./Banner"));
const About = lazy(() => import("./About"));
const Gallery = lazy(() => import("./Gallery"));
const News = lazy(() => import("./News"));
const Trainings = lazy(() => import("./Trainings"));
const Coaches = lazy(() => import("./Coaches"));
// import { Slogan } from "./Slogan";
// import { Profits } from "./Profits";
// import { Progress } from "./Progress";
import { Loader } from "../UI/Loader";

import styles from "./Home.module.css";

export const Home = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Promo />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Banner />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <About />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Gallery />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <News />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Trainings />
            </Suspense>
            <Suspense fallback={<Loader />}>
                <Coaches />
            </Suspense>
            {/* <Slogan /> */}
            {/* <Profits /> */}
            {/* <Progress /> */}
            <div className={styles.knightBg} />
        </>
    )
};