import React from 'react';
import "./portfolio.css";

const Portfolio = () => {
    return (
        <section className="work container section" id='work'>
            <h2 className="section__title"></h2>

            <div className="work__filters">
                <span className="work__item"></span>
                <span className="work__item"></span>
                <span className="work__item"></span>
                <span className="work__item"></span>
                <span className="work__item"></span>
            </div>

            <div className="work__container grid"></div>
        </section>
    )
}

export default Portfolio