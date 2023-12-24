import React, { useRef } from 'react';
import "./contact.css"
import { useForm, ValidationError } from "@formspree/react";


const Contact = () => {

    const [state, handleSubmit] = useForm("mgegwqwj");
    const formRef = useRef(null);

    const resetForm = () => {
        formRef.current.reset()
    }

    if (state.succeeded) {
        resetForm();
        return (
            <section className="contact container section" id="contact">
                <h2 className="section__title">Thank You for Your Mail!</h2>
                <p>Thanks for your mail, I will contact with you soon!</p>
            </section>
        )
    }

    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Reach Me Out</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's Contact</h3>
                    <p className="contact__details">Send me an e-mail</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit}
                    className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name='name'
                                className="contact__form-input"
                                placeholder='What is your name?'
                            />

                            <ValidationError
                                prefix="name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                name='email'
                                className="contact__form-input"
                                placeholder='What is your email?'
                            />

                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            name='subject'
                            className="contact__form-input"
                            placeholder='What is the subject?'
                        />

                        <ValidationError
                            prefix="subject"
                            field="subject"
                            errors={state.errors}
                        />
                    </div>

                    <div className="contact__form-div message-area">
                        <textarea
                            name="message"
                            cols="30" rows="10"
                            className='contact__form-input '
                            placeholder='Write your message here please'></textarea>
                        <ValidationError
                            prefix="message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type='submit' disabled={state.submitting} className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact