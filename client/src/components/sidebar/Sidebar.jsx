import React from 'react';
import "./sidebar.css";
import Logo from '../../assets/logo.png'

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href='#home' className='nav__logo'>
                <img src={Logo} alt="Logo" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a title='home' href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a title='About' href="#about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a title='Resume' href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a title='Portfolio' href="#portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a title='Contact' href="#contact" className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a title='Linkedin Profile' href="https://www.linkedin.com/in/yunus-emre-beyaz-410063253/" className="nav__link" target="_blank" rel='noreferrer'>
                                <i className="icon-social-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy;  2023</span>
            </div>
        </aside>
    )
}

export default Sidebar