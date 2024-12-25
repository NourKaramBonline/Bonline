import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, faCode, faPaintBrush, faMobile, faChartLine, 
    faEnvelope, faMapMarkerAlt, faPhone, faHeart, faArrowUp, faArrowRight, faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebookF, faTwitter, faInstagram, faLinkedinIn, 
    faGithub 
} from '@fortawesome/free-brands-svg-icons';
import logo from './assets/images/bonline-logo-en.svg';
import meercatoLogo from './assets/images/Meercato_logo-New.svg';
import petrokassLogo from './assets/images/petrokassLogoNew.png';
import project3Logo from './assets/images/ChichomeBoutiqueLogoNew.svg';
import project4Logo from './assets/images/caldConnectLogo.jpg';
import project5Logo from './assets/images/internationalElevatorlogo.svg';
import itc4uLogo from './assets/images/itc4uLogoNew.svg';
import Clients from './components/Clients';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => (
                    <div>
                        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
                            <div className="container">
                                <a className="navbar-brand" href="#home">
                                    <img src={logo} alt="Bonline Logo" className="navbar-logo" />
                                </a>
                                <button className="navbar-toggler" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <section id="home" className="section home-section">
                            <div className="container text-center">
                                <h1 className="display-4">Welcome to Our Creative Studio</h1>
                                <p className="lead">We bring your digital dreams to life</p>
                                <button className="btn btn-danger btn-lg mt-4">Get Started</button>
                            </div>
                        </section>

                        <section id="about" className="section about-section">
                            <div className="container">
                                <h2 className="section-title">About Us</h2>
                                <div className="title-underline"></div>
                                <p className="about-description">We are passionate about creating exceptional digital experiences that help businesses grow and succeed in the modern world.</p>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5>10+ Years Experience</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5>200+ Projects Completed</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5>24/7 Support</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5>Award-winning Team</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button className="btn btn-outline-primary more-btn">
                                        More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section id="services" className="section services-section">
                            <div className="container">
                                <h2 className="text-center mb-5">Our Services</h2>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card service-card h-100">
                                            <div className="card-body text-center">
                                                <FontAwesomeIcon icon={faCode} className="service-icon mb-3" />
                                                <h5 className="card-title">Web Development</h5>
                                                <p className="card-text">Custom web applications tailored to your needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card service-card h-100">
                                            <div className="card-body text-center">
                                                <FontAwesomeIcon icon={faPaintBrush} className="service-icon mb-3" />
                                                <h5 className="card-title">UI/UX Design</h5>
                                                <p className="card-text">Beautiful and intuitive user interfaces.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card service-card h-100">
                                            <div className="card-body text-center">
                                                <FontAwesomeIcon icon={faMobile} className="service-icon mb-3" />
                                                <h5 className="card-title">Mobile Development</h5>
                                                <p className="card-text">iOS and Android app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button 
                                        className="btn btn-outline-primary more-btn"
                                        onClick={() => history.push('/clients')}
                                    >
                                        More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section id="portfolio" className="section portfolio-section">
                            <div className="container">
                                <h2 className="section-title text-center">Our Clients</h2>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card portfolio-card h-100">
                                            <div className="card-body">
                                                <img src={meercatoLogo} alt="Meercato Logo" className="portfolio-logo" />
                                                <h5 className="card-title">Meercato</h5>
                                                <p className="card-text">E-commerce Website</p>
                                                <a href="https://meercato.com" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                                    Visit Website <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card portfolio-card h-100">
                                            <div className="card-body">
                                                <img src={petrokassLogo} alt="Petrokass Logo" className="portfolio-logo" />
                                                <h5 className="card-title">Petrokass</h5>
                                                <p className="card-text">Business Website</p>
                                                <a href="https://www.petrokass.com" className="portfolio-link" target='_blank'>
                                                    View Details <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card portfolio-card h-100">
                                            <div className="card-body">
                                                <img src={project3Logo} alt="Project 3 Logo" className="portfolio-logo" />
                                                <h5 className="card-title">Chichome Boutique</h5>
                                                <p className="card-text">E-commerce Website</p>
                                                <a href="https://chichome-boutique.com" className="portfolio-link" target='_blank'>
                                                    View Details <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card portfolio-card h-100">
                                            <div className="card-body">
                                                <img src={project4Logo} alt="Project 4 Logo" className="portfolio-logo" />
                                                <h5 className="card-title">Cald Connect</h5>
                                                <p className="card-text">Business Website</p>
                                                <a href="https://www.caldconnect.com.au" className="portfolio-link" target='_blank'>
                                                    View Details <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card portfolio-card h-100">
                                            <div className="card-body">
                                                <img src={project5Logo} alt="Project 5 Logo" className="portfolio-logo" />
                                                <h5 className="card-title">International Elevate</h5>
                                                <p className="card-text">Business Website</p>
                                                <a href="https://internationalelevate.com" className="portfolio-link" target='_blank'>
                                                    View Details <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card portfolio-card h-100">
                                            <div className="card-body">
                                                <img src={itc4uLogo} alt="ITC-4U Logo" className="portfolio-logo" />
                                                <h5 className="card-title">ITC-4U</h5>
                                                <p className="card-text">Business Website</p>
                                                <a href="https://itc-4u.com" className="portfolio-link" target='_blank'>
                                                    View Details <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <button 
                                        className="btn btn-outline-primary more-btn"
                                        onClick={() => history.push('/clients')}
                                    >
                                        More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section id="contact" className="section contact-section">
                            <div className="container">
                                <h2 className="text-center mb-5">Contact Us</h2>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="card contact-info h-100">
                                            <div className="card-body">
                                                <h5 className="mb-4">Get in Touch</h5>
                                                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> 123 Business Street, NY 10001</p>
                                                <p><FontAwesomeIcon icon={faPhone} className="me-2" /> 01 008985681</p>
                                                <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> info@bonline.cc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <form>
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Your Name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input type="email" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <textarea className="form-control" rows="3" placeholder="Your Message"></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button 
                                        className="btn btn-outline-primary more-btn"
                                        onClick={() => history.push('/clients')}
                                    >
                                        More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        <footer className="footer">
                            <div className="footer-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                            <h5 className="text-white mb-4">About Us</h5>
                                            <p className="about-description">We are passionate about creating exceptional digital experiences that help businesses grow and succeed in the modern world.</p>
                                            <div className="social-links">
                                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                                <a href="#!"><FontAwesomeIcon icon={faGithub} /></a>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                            <h5 className="text-white mb-4">Quick Links</h5>
                                            <ul className="list-unstyled">
                                                <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
                                                <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
                                                <li><button onClick={() => scrollToSection('services')} className="footer-link">Services</button></li>
                                                <li><button onClick={() => scrollToSection('portfolio')} className="footer-link">Portfolio</button></li>
                                                <li><button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                            <h5 className="text-white mb-4">Services</h5>
                                            <ul className="list-unstyled">
                                                <li><button onClick={() => scrollToSection('services')} className="footer-link">Web Development</button></li>
                                                <li><button onClick={() => scrollToSection('services')} className="footer-link">UI/UX Design</button></li>
                                                <li><button onClick={() => scrollToSection('services')} className="footer-link">Mobile Apps</button></li>
                                                <li><button onClick={() => scrollToSection('services')} className="footer-link">Digital Marketing</button></li>
                                                <li><button onClick={() => scrollToSection('services')} className="footer-link">SEO Optimization</button></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                            <h5 className="text-white mb-4">Newsletter</h5>
                                            <p className="newsletter-description">Subscribe to our newsletter for updates and insights.</p>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                                <button className="btn btn-primary" type="button">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 text-center text-md-start">
                                            <p className="mb-0"> {currentYear} Your Company. All rights reserved.</p>
                                        </div>
                                        <div className="col-md-6 text-center text-md-end">
                                            <p className="mb-0">Made By <FontAwesomeIcon icon={faHeart} className="text-danger mx-1" /> Bonline</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                        <button
                            onClick={() => scrollToSection('home')}
                            className="scroll-to-top"
                            aria-label="Scroll to top"
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                )} />
                <Route path="/clients" component={Clients} />
            </Switch>
        </div>
    );
}

export default App;
