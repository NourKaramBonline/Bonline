import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, faShoppingCart, faServer, faMobile, faBullseye, faBullhorn,
    faEnvelope, faMapMarkerAlt, faPhone, faHeart, faArrowUp, faArrowRight, faExternalLinkAlt,
    faCode, faCloudUpload, faNetworkWired 
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
import DigitalMarketingIntegrationSEOPackages from './pages/DigitalMarketingIntegrationSEOPackages';
import MobileAppPackages from './pages/MobileAppPackages';
import CustomSoftwarePackages from './pages/CustomSoftwarePackages';
import ResellerHostingPackages from './pages/ResellerHostingPackages';
import VPSHostingPackages from './pages/VPSHostingPackages';
import WebsiteCreationPackages from './pages/WebsiteCreationPackages';
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
                            <section id="home" className="hero-section">
                                <div className="container text-center">
                                    <h1 className="display-4">Welcome to B-Online</h1>
                                    <p className="lead">Your Trusted Partner for Digital Excellence</p>
                                    <button 
                                        className="btn btn-danger btn-lg mt-4"
                                        onClick={() => {
                                            const contactSection = document.getElementById('services');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </section>

                            <section id="about" className="section about-section">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h2 className="section-title">About B-Online</h2>
                                            <p className="lead mb-4">
                                                Established in 2013, B-Online is a leading technology solutions provider based in Egypt, 
                                                delivering innovative digital solutions to businesses worldwide.
                                            </p>
                                            <div className="about-content">
                                                <h4 className="mb-3">Why Choose Us?</h4>
                                                <div className="feature-item mb-3">
                                                    <h5>Comprehensive Solutions</h5>
                                                    <p>From web development and e-commerce to VPS hosting and mobile apps, 
                                                    we provide end-to-end digital solutions tailored to your business needs.</p>
                                                </div>
                                                <div className="feature-item mb-3">
                                                    <h5>Technical Excellence</h5>
                                                    <p>Our team of certified developers and digital experts ensures 
                                                    the highest quality standards in every project we deliver.</p>
                                                </div>
                                                <div className="feature-item mb-3">
                                                    <h5>Customer-Centric Approach</h5>
                                                    <p>We prioritize understanding your business goals and challenges 
                                                    to deliver solutions that drive real value and growth.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-stats">
                                                <div className="row text-center">
                                                    <div className="col-6 mb-4">
                                                        <div className="stat-box">
                                                            <h3>100+</h3>
                                                            <p>Projects Completed</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mb-4">
                                                        <div className="stat-box">
                                                            <h3>50+</h3>
                                                            <p>Happy Clients</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mb-4">
                                                        <div className="stat-box">
                                                            <h3>24/7</h3>
                                                            <p>Technical Support</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mb-4">
                                                        <div className="stat-box">
                                                            <h3>99.9%</h3>
                                                            <p>Uptime Guarantee</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <p>We offer a wide range of e-commerce solutions to help businesses grow and succeed online.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/ecommerce-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faServer} className="service-icon mb-3" />
                                                    <h5 className="card-title">Hosting Packages</h5>
                                                    <p>Choose from a range of hosting packages to fit your needs and budget.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/hosting-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faCloudUpload} className="service-icon mb-3" />
                                                    <h5 className="card-title">Reseller Hosting</h5>
                                                    <p>Start your own hosting business with our reliable reseller solutions.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/reseller-hosting-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faNetworkWired} className="service-icon mb-3" />
                                                    <h5 className="card-title">VPS Hosting</h5>
                                                    <p>Experience superior performance with our Virtual Private Server solutions.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/vps-hosting-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faBullseye} className="service-icon mb-3" />
                                                    <h5 className="card-title">Digital Marketing Integration</h5>
                                                    <p>Enhance your online presence with our digital marketing integration services.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/digital-marketing-integration-seo-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faMobile} className="service-icon mb-3" />
                                                    <h5 className="card-title">Mobile App Development</h5>
                                                    <p>Develop mobile apps for iOS and Android platforms.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/mobile-apps-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faCode} className="service-icon mb-3" />
                                                    <h5 className="card-title">Custom Software Development</h5>
                                                    <p>Create custom software solutions to meet your specific needs.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/custom-software-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-4">
                                            <div className="card service-card h-100">
                                                <div className="card-body text-center">
                                                    <FontAwesomeIcon icon={faCode} className="service-icon mb-3" />
                                                    <h5 className="card-title">Website Creation Packages</h5>
                                                    <p>Professional website development solutions for your business needs.</p>
                                                    <button 
                                                        className='btn btn-outline-primary'
                                                        onClick={() => history.push('/website-creation-packages')}
                                                    >
                                                        Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
                    <Route path="/reseller-hosting-packages" component={ResellerHostingPackages} />
                    <Route path="/vps-hosting-packages" component={VPSHostingPackages} />
                    <Route path="/digital-marketing-integration-seo-packages" component={DigitalMarketingIntegrationSEOPackages} />
                    <Route path="/mobile-apps-packages" component={MobileAppPackages} />
                    <Route path="/custom-software-packages" component={CustomSoftwarePackages} />
                    <Route path="/website-creation-packages" component={WebsiteCreationPackages} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
