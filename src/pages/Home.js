import React from "react";
import Carrossel from "../components/Carrossel";
import BannerInicio from "../components/BannerInicio";
import imgMerc from '../images/mercado3.jpg'
import Sobre from "./Sobre";
function Home() {
    return (
        <div>
            <BannerInicio/>
            <section>
                <Sobre/>
            </section>
        </div>
    )
}

export default Home
