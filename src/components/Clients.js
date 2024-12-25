import React from 'react';
import meercatoLogo from '../assets/images/Meercato_logo-New.svg';
import petrokassLogo from '../assets/images/petrokassLogoNew.png';
import project3Logo from '../assets/images/ChichomeBoutiqueLogoNew.svg';
import project4Logo from '../assets/images/caldConnectLogo.jpg';
import project5Logo from '../assets/images/internationalElevatorlogo.svg';
import itc4uLogo from '../assets/images/itc4uLogoNew.svg';

const Clients = () => {
    const clients = [
        {
            name: 'Meercato',
            logo: meercatoLogo,
            description: 'E-commerce platform',
            link: 'https://meercato.co.za'
        },
        {
            name: 'Petrokass',
            logo: petrokassLogo,
            description: 'Petroleum services',
            link: 'https://petrokass.co.za'
        },
        {
            name: 'Chichome Boutique',
            logo: project3Logo,
            description: 'Fashion retail',
            link: '#'
        },
        {
            name: 'Cald Connect',
            logo: project4Logo,
            description: 'Business services',
            link: '#'
        },
        {
            name: 'International Elevator',
            logo: project5Logo,
            description: 'Elevator services',
            link: '#'
        },
        {
            name: 'ITC4U',
            logo: itc4uLogo,
            description: 'IT services',
            link: '#'
        }
    ];

    return (
        <section className="clients-section py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Clients</h2>
                <div className="row g-4">
                    {clients.map((client, index) => (
                        <div key={index} className="col-md-4 col-sm-6">
                            <div className="client-card h-100">
                                <div className="card shadow-sm">
                                    <div className="card-body text-center">
                                        <img 
                                            src={client.logo} 
                                            alt={`${client.name} logo`}
                                            className="img-fluid mb-3"
                                            style={{ maxHeight: '100px' }}
                                        />
                                        <h5 className="card-title">{client.name}</h5>
                                        <p className="card-text">{client.description}</p>
                                        <a 
                                            href={client.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`btn ${client.link === '#' ? 'btn-secondary disabled' : 'btn-primary'}`}
                                            onClick={(e) => client.link === '#' && e.preventDefault()}
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
