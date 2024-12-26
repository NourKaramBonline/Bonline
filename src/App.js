import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, faShoppingCart, faServer, faMobile, faChartLine, faBullhorn,
    faEnvelope, faMapMarkerAlt, faPhone, faHeart, faArrowUp, faArrowRight, faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebookF, faTwitter, faInstagram, faLinkedinIn, 
    faGithub 
} from '@fortawesome/free-brands-svg-icons';
import logo from './assets/images/bonline-logo-en.svg';
import meercatoLogo from './assets/images/Meercato_logo-New.jpg';
import petrokassLogo from './assets/images/petrokassLogoNew.jpg';
import project3Logo from './assets/images/ChichomeBoutiqueLogoNew.jpg';
import project4Logo from './assets/images/caldConnectLogo.jpg';
import project5Logo from './assets/images/internationalElevatorlogo.jpg';
import itc4uLogo from './assets/images/itc4uLogoNew.jpg';
import Clients from './pages/Clients';
import EcommercePackages from './pages/EcommercePackages';
import HostingPackages from './pages/HostingPackages';
import Layout from './components/Layout';
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
            <Layout>
                <Switch>
                    <Route exact path="/" render={() => (
                        <div>
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
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faShoppingCart} className="service-icon mb-3" />
                                                    <h5 className="card-title">E-commerce Solutions Packages</h5>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/ecommerce-packages')}
                                                    >
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faServer} className="service-icon mb-3" />
                                                    <h5 className="card-title">Hosting Packages</h5>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/hosting-packages')}
                                                    >
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faMobile} className="service-icon mb-3" />
                                                    <h5 className="card-title">Mobile Apps Packages</h5>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/mobile-apps-packages')}
                                                    >
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faBullhorn} className="service-icon mb-3" />
                                                    <h5 className="card-title">Digital Marketing Integration & SEO Packages</h5>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/digital-marketing-integration-seo-packages')}
                                                    >
                                                        Learn More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
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
                                                    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> No. 167 Ali Al-Sebaei Street, Al-Yasmine 4, first floor above ground, Apartment 2, Intercom No. 2, in front of the Fuel Up gas station and the police academy fence. First assembly</p>
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
                        </div>
                    )} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/ecommerce-packages" component={EcommercePackages} />
                    <Route path="/hosting-packages" component={HostingPackages} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
