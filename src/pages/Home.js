import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, faPaintBrush, faMobile, faChartLine, 
    faEnvelope, faMapMarkerAlt, faPhone, faArrowRight, faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import meercatoLogo from '../assets/images/Meercato_logo-New.svg';
import petrokassLogo from '../assets/images/petrokassLogoNew.png';
import chichomeLogo from '../assets/images/ChichomeBoutiqueLogoNew.svg';
import caldConnectLogo from '../assets/images/caldConnectLogo.jpg';
import internationalElevateLogo from '../assets/images/internationalElevatorlogo.svg';
import itc4uLogo from '../assets/images/itc4uLogoNew.svg';

const Home = () => {
    const featuredClients = [
        {
            name: 'Meercato',
            logo: meercatoLogo,
            description: 'E-commerce Website',
            url: 'https://meercato.com'
        },
        {
            name: 'Petrokass',
            logo: petrokassLogo,
            description: 'Business Website',
            url: 'https://www.petrokass.com'
        },
        {
            name: 'Chichome Boutique',
            logo: chichomeLogo,
            description: 'E-commerce Website',
            url: 'https://chichome-boutique.com'
        }
    ];

    return (
        <main>
            <section id="home" className="section home-section">
                <div className="container text-center">
                    <h1 className="display-4">Welcome to Our Creative Studio</h1>
                    <p className="lead">We bring your digital dreams to life</p>
                    <button className="btn btn-danger btn-lg mt-4">Get Started</button>
                </div>
            </section>

            <section id="about" className="section about-section">
                {/* ... About section content ... */}
            </section>

            <section id="services" className="section services-section">
                {/* ... Services section content ... */}
            </section>

            <section id="portfolio" className="section portfolio-section">
                <div className="container">
                    <h2 className="section-title text-center">Our Clients</h2>
                    <div className="row">
                        {featuredClients.map((client, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="card portfolio-card h-100">
                                    <div className="card-body">
                                        <img src={client.logo} alt={`${client.name} Logo`} className="portfolio-logo" />
                                        <h5 className="card-title">{client.name}</h5>
                                        <p className="card-text">{client.description}</p>
                                        <a href={client.url} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                                            Visit Website <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/clients" className="btn btn-outline-primary more-btn">
                            More <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="contact" className="section contact-section">
                {/* ... Contact section content ... */}
            </section>
        </main>
    );
};

export default Home;
