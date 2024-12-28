import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './HostingPackages.module.css';

const HostingPackages = () => {
    const history = useHistory();

    const handleLearnMore = () => {
        history.push('/#contact');
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const packages = [
        {
            name: 'Basic Hosting',
            price: '2,500 EGP/year',
            color: 'blue',
            features: [
                { name: 'Number of Websites (1)', status: true },
                { name: 'SSD Storage 10 GB', status: true },
                { name: 'Bandwidth Unlimited', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Email Accounts (1)', status: true },
                { name: 'Control Panel cPanel', status: true },
                { name: 'Uptime Guarantee 99.9%', status: true },
                { name: '24/7 Customer Support', status: true },
                { name: 'Free 1-year .com Domain Registration', status: true }
            ]
        },
        {
            name: 'Standard Hosting',
            price: '4,500 EGP/year',
            color: 'green',
            features: [
                { name: 'Number of Websites (Up to 5)', status: true },
                { name: 'SSD Storage 30 GB', status: true },
                { name: 'Bandwidth Unlimited', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Email Accounts (5)', status: true },
                { name: 'Control Panel cPanel', status: true },
                { name: 'Uptime Guarantee 99.9%', status: true },
                { name: '24/7 Customer Support', status: true },
                { name: 'Free 1-year .com Domain Registration', status: true }
            ]
        },
        {
            name: 'Premium Hosting',
            price: '6,500 EGP/year',
            color: 'red',
            features: [
                { name: 'Number of Websites (Unlimited)', status: true },
                { name: 'SSD Storage 100 GB', status: true },
                { name: 'Bandwidth Unlimited', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Email Accounts (Unlimited)', status: true },
                { name: 'Control Panel cPanel', status: true },
                { name: 'Uptime Guarantee 99.9%', status: true },
                { name: '24/7 Priority Customer Support', status: true },
                { name: 'Free 1-year .com Domain Registration', status: true }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Hosting Packages</h2>
                <div className="row justify-content-center">
                    {packages.map((pkg, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className={`${styles.packageCard} ${styles[`package${pkg.color}`]}`}>
                                <div className={styles.packageHeader}>
                                    <h3 className={styles.packageTitle}>{pkg.name}</h3>
                                    <div className={styles.packagePrice}>{pkg.price}</div>
                                </div>
                                <div className={styles.packageContent}>
                                    <div className={styles.featuresList}>
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className={styles.featureItem}>
                                                {feature.status ? (
                                                    <span className={styles.checkIcon}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                ) : (
                                                    <span className={styles.timesIcon}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </span>
                                                )}
                                                {feature.name}
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={handleLearnMore}
                                        className={`${styles.buyButton} ${styles[`btn${pkg.color}`]}`}
                                    >
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HostingPackages;
