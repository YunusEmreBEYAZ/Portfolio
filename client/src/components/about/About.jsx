import React, { useState } from 'react';
import "./about.css";
import AboutMe from "../../assets/about.jpeg"
import AboutBox from './AboutBox';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p className='warning'>{message}</p>
                <button className="btn" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

const About = () => {
    const [showModal, setShowModal] = useState(false);


    const getCv = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false);

    }
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={AboutMe} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Yunus Emre BEYAZ from Amsterdam. Experienced frontend developer. Create-Design-Travel-Enjoy</p>
                        <button href="" className="btn" onClick={getCv}>Get CV</button>

                        {showModal && (
                            <Modal
                                message="I'm Sorry But This CV Contains Private Informations. Please Contact For my CV!"
                                onClose={closeModal}
                            />
                        )}

                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar react">
                                <span className="skills__percentage "></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Javascript</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar javascript">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Databases</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar databases">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">APIs</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar apis">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">TypeScript</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar typescript">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Docker</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar docker">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">NodeJs</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar nodejs">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">MongoDB</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar mongodb">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />

        </section>
    )
}

export default About;