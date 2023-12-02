import React from 'react';
import "./home.css";
import Me from "../../assets/me.png"

const Home = () => {
    return (
        <section className="section home container" id="home">
            <div className="intro">
                <img src={Me} alt="Me" className="home__img" />
                <h1 className="home__name">Yunus Emre BEYAZ</h1>
                <span className="home__education">I'm a Full Stack Web Developer</span>
            </div>
        </section>
    )
}

export default Home