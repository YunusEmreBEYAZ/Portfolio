import React, { useState } from 'react';
import "./portfolio.css";
import Data from './Data';

const Portfolio = () => {
    const [items, setItems] = useState(Data);
    return (
        <section className="work container section" id='work'>
            <h2 className="section__title">Recent Apps</h2>

            <div className="work__filters">
                <span className="work__item">Q-A</span>
                <span className="work__item">We Share</span>
                <span className="work__item">Todo App</span>
                <span className="work__item">Guess The Number</span>
                <span className="work__item">Dice Game</span>
            </div>

            <div className="work__container grid">
                {items.map((item) => {
                    const { id, image, title, } = item;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt='App Demo' className='app__img'></img>
                                <div className="work__mask"></div>
                            </div>

                            <h3 className="work__title">{title}</h3>
                            <a href="#" className='work__link'>
                                <i className="icon-link work__button_icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio