import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid ">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">99</h3>
                    <span className="about__subtitle">Projects</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-graduation"></i>

                <div>
                    <h3 className="about__title">399</h3>
                    <span className="about__subtitle">Day Worked</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">1256</h3>
                    <span className="about__subtitle">Coffe</span>
                </div>
            </div>


            <div className="about__box">
                <i className="about__icon icon-speech"></i>

                <div>
                    <h3 className="about__title">9999</h3>
                    <span className="about__subtitle">Commits</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox