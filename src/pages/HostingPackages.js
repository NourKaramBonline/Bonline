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

    const allFeatures = [
        'Number of Websites',
        'SSD Storage',
        'Bandwidth',
        'Free SSL Certificates',
        'Email Accounts',
        'Control Panel',
        'Uptime Guarantee',
        'Customer Support',
        'Domain Registration'
    ];

    const packages = [
        {
            name: 'Basic Hosting',
            price: '2,500 EGP/year',
            featureStatus: {
                'Number of Websites': '1',
                'SSD Storage': '10 GB',
                'Bandwidth': 'Unlimited',
                'Free SSL Certificates': true,
                'Email Accounts': '1',
                'Control Panel': 'cPanel',
                'Uptime Guarantee': '99.9%',
                'Customer Support': '24/7',
                'Domain Registration': 'Free 1-year .com domain'
            },
            color: 'blue'
        },
        {
            name: 'Standard Hosting',
            price: '4,500 EGP/year',
            featureStatus: {
                'Number of Websites': 'Up to 5',
                'SSD Storage': '30 GB',
                'Bandwidth': 'Unlimited',
                'Free SSL Certificates': true,
                'Email Accounts': '5',
                'Control Panel': 'cPanel',
                'Uptime Guarantee': '99.9%',
                'Customer Support': '24/7',
                'Domain Registration': 'Free 1-year .com domain'
            },
            color: 'green'
        },
        {
            name: 'Premium Hosting',
            price: '6,500 EGP/year',
            featureStatus: {
                'Number of Websites': 'Unlimited',
                'SSD Storage': '100 GB',
                'Bandwidth': 'Unlimited',
                'Free SSL Certificates': true,
                'Email Accounts': 'Unlimited',
                'Control Panel': 'cPanel',
                'Uptime Guarantee': '99.9%',
                'Customer Support': '24/7 Priority Support',
                'Domain Registration': 'Free 1-year .com domain'
            },
            color: 'red'
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
                                        {allFeatures.map((feature, idx) => (
                                            <div key={idx} className={styles.featureItem}>
                                                {pkg.featureStatus[feature] === true ? (
                                                    <span className={styles.checkIcon}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                ) : pkg.featureStatus[feature] === false ? (
                                                    <span className={styles.timesIcon}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </span>
                                                ) : (
                                                    <span className={styles.featureValue}>{pkg.featureStatus[feature]}</span>
                                                )}
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={handleLearnMore}
                                        className={`${styles.buyButton} ${styles[`btn${pkg.color}`]}`}
                                    >
                                        Learn More
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
