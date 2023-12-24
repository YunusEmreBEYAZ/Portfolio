import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Reach Me Out</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's Contact</h3>
                    <p className="contact__details">Send me an e-mail</p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='What is your name?' />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='What is your email?' />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='What is the subject?' />
                    </div>

                    <div className="contact__form-div">
                        <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message here please'></textarea>
                    </div>

                    <button className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact