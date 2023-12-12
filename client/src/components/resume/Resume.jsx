import React from 'react';
import "./resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
    return (
        <section className="resume container section" id='resume'>
            <h2 className="section__title">Experience</h2>
            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((value, id) => {
                        if (value.category === "education") {
                            return (
                                <Card
                                    key={id}
                                    icon={value.icon}
                                    title={value.title}
                                    year={value.year}
                                    description={value.desc} />
                            )
                        }
                        return null;
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((value, index) => {
                        if (value.category === "experience") {
                            return (
                                <Card
                                    key={index}
                                    icon={value.icon}
                                    title={value.title}
                                    year={value.year}
                                    description={value.desc} />
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}

export default Resume