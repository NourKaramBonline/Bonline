import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/bonline-logo-en.svg';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bonline Logo" height="40" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => scrollToSection('home')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => scrollToSection('about')}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => scrollToSection('services')}>Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={() => scrollToSection('portfolio')}>Clients</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
