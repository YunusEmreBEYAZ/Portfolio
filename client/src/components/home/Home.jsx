import React from 'react';
import "./home.css";
import Me from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="section home container" id="home">
            <div className="intro">
                <img src={Me} alt="Me" className="home__img" />
                <h1 className="home__name">Yunus Emre BEYAZ</h1>
                <span className="home__education">I'm a Full Stack Web Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Reach Me</a>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;