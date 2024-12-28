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
                { name: 'Number of Websites', value: '1', status: true },
                { name: 'SSD Storage', value: '10 GB', status: true },
                { name: 'Bandwidth', value: 'Unlimited', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Email Accounts', value: '1', status: true },
                { name: 'Control Panel', value: 'cPanel', status: true },
                { name: 'Uptime Guarantee', value: '99.9%', status: true },
                { name: 'Customer Support', value: '24/7', status: true },
                { name: 'Domain Registration', value: 'Free 1-year .com domain', status: true }
            ]
        },
        {
            name: 'Standard Hosting',
            price: '4,500 EGP/year',
            color: 'green',
            features: [
                { name: 'Number of Websites', value: 'Up to 5', status: true },
                { name: 'SSD Storage', value: '30 GB', status: true },
                { name: 'Bandwidth', value: 'Unlimited', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Email Accounts', value: '5', status: true },
                { name: 'Control Panel', value: 'cPanel', status: true },
                { name: 'Uptime Guarantee', value: '99.9%', status: true },
                { name: 'Customer Support', value: '24/7', status: true },
                { name: 'Domain Registration', value: 'Free 1-year .com domain', status: true }
            ]
        },
        {
            name: 'Premium Hosting',
            price: '6,500 EGP/year',
            color: 'red',
            features: [
                { name: 'Number of Websites', value: 'Unlimited', status: true },
                { name: 'SSD Storage', value: '100 GB', status: true },
                { name: 'Bandwidth', value: 'Unlimited', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Email Accounts', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'cPanel', status: true },
                { name: 'Uptime Guarantee', value: '99.9%', status: true },
                { name: 'Customer Support', value: '24/7 Priority Support', status: true },
                { name: 'Domain Registration', value: 'Free 1-year .com domain', status: true }
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
                                                {feature.name}&nbsp;&nbsp;{feature.value && <span className={styles.featureValue}>{feature.value}</span>}
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
