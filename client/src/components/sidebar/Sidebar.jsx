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
                    <ul className="nev__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="" className="nav__link"></a>
                        </li>

                        <li className="nav__item">
                            <a href="" className="nav__link"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar