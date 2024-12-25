import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import meercatoLogo from '../assets/images/Meercato_logo-New.jpg';
import petrokassLogo from '../assets/images/petrokassLogoNew.jpg';
import chichomeLogo from '../assets/images/ChichomeBoutiqueLogoNew.jpg';
import caldConnectLogo from '../assets/images/caldConnectLogo.jpg';
import internationalElevateLogo from '../assets/images/internationalElevatorlogo.jpg';
import itc4uLogo from '../assets/images/itc4uLogoNew.jpg';

const Clients = () => {
    const clients = [
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
        },
        {
            name: 'Cald Connect',
            logo: caldConnectLogo,
            description: 'Business Website',
            url: 'https://www.caldconnect.com.au'
        },
        {
            name: 'International Elevate',
            logo: internationalElevateLogo,
            description: 'Business Website',
            url: 'https://internationalelevate.com'
        },
        {
            name: 'ITC-4U',
            logo: itc4uLogo,
            description: 'Business Website',
            url: 'https://itc-4u.com'
        },
        {
            name: 'Khabeer Tech',
            logo: 'https://khabeer-tech.com/wp-content/uploads/2023/06/khabeer-tech-logo.png',
            description: 'Technology Solutions',
            url: 'https://khabeer-tech.com'
        },
        {
            name: 'Bnaia',
            logo: 'https://bnaia.com/wp-content/uploads/2023/12/bnaia-logo.png',
            description: 'Construction Services',
            url: 'https://bnaia.com'
        }
    ];

    return (
        <div className="container py-5 mt-5">
            <h1 className="section-title text-center mb-5">Our Clients</h1>
            <div className="row g-4">
                {clients.map((client, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card portfolio-card h-100">
                            <div className="card-body">
                                <img 
                                    src={typeof client.logo === 'string' ? client.logo : client.logo} 
                                    alt={`${client.name} Logo`} 
                                    className="portfolio-logo"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://www.google.com/s2/favicons?domain=${client.url}&sz=128`;
                                    }}
                                />
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
        </div>
    );
};

export default Clients;
