import React, { useState } from 'react';
import "./portfolio.css";
import Data from './Data';

const Portfolio = () => {
    const [items, setItems] = useState(Data);

    const filterItem = (item) => {
        if (item === "All Projects") {
            setItems(Data)
        } else {
            const updatedItems = Data.filter((curItem) => {
                return curItem.title === item;
            })

            setItems(updatedItems)
        }
    }
    return (
        <section className="work container section" id='portfolio'>
            <h2 className="section__title">Recent Apps</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => filterItem("All Projects")}>All Projects</span>
                <span className="work__item" onClick={() => filterItem("Question-Answer App")}>Q-A</span>
                <span className="work__item" onClick={() => filterItem("Social Media App")}>We Share</span>
                <span className="work__item" onClick={() => filterItem("Todo App")}>Todo App</span>
                <span className="work__item" onClick={() => filterItem("Guess My Number App")}>Guess The Number</span>
                <span className="work__item" onClick={() => filterItem("Dice Game App")}>Dice Game</span>
            </div>

            <div className="work__container grid">
                {items.map((item) => {
                    const { id, image, title, category, link } = item;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt='App Demo' className='app__img'></img>
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} target="_blank" rel='noreferrer' className='work__button'>
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio