import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/bonline-logo-en.svg';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
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
            setIsNavCollapsed(true);
            setIsServicesOpen(false);
        }
    };

    const toggleServices = (e) => {
        if (isMobile) {
            e.preventDefault();
            setIsServicesOpen(!isServicesOpen);
        }
    };

    const handleNavItemClick = () => {
        if (isMobile) {
            setIsNavCollapsed(true);
            setIsServicesOpen(false);
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
                        <li className={`nav-item dropdown ${isServicesOpen ? 'show' : ''}`}>
                            <Link
                                className="nav-link dropdown-toggle d-flex align-items-center"
                                to="#"
                                role="button"
                                onClick={toggleServices}
                                aria-expanded={isServicesOpen}
                            >
                                Services
                                <FontAwesomeIcon icon={faChevronDown} className="ms-1 dropdown-icon" />
                            </Link>
                            <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                                <li><Link className="dropdown-item" to="/ecommerce-packages" onClick={handleNavItemClick}>E-commerce Solutions Packages</Link></li>
                                <li><Link className="dropdown-item" to="/hosting-packages" onClick={handleNavItemClick}>Hosting Packages</Link></li>
                                <li><Link className="dropdown-item" to="/reseller-hosting-packages" onClick={handleNavItemClick}>Reseller Hosting</Link></li>
                                <li><Link className="dropdown-item" to="/vps-hosting-packages" onClick={handleNavItemClick}>VPS Hosting</Link></li>
                                <li><Link className="dropdown-item" to="/digital-marketing" onClick={handleNavItemClick}>Digital Marketing Integration</Link></li>
                                <li><Link className="dropdown-item" to="/mobile-app-packages" onClick={handleNavItemClick}>Mobile App Development</Link></li>
                                <li><Link className="dropdown-item" to="/custom-software-packages" onClick={handleNavItemClick}>Custom Software Development</Link></li>
                            </ul>
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
