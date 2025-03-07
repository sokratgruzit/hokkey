import { About } from "./About";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import { News } from "./News";
import { Promo } from "./Promo";

export const Home = () => {
    return (
        <>
            <Promo />
            <Banner />
            <About />
            <Gallery />
            <News />
        </>
    )
};