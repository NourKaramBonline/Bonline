import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './ResellerHostingPackages.module.css';

const ResellerHostingPackages = () => {
    const history = useHistory();

    const handleLearnMore = () => {
        history.push('/#about');
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const packages = [
        {
            name: 'Basic Reseller',
            price: '1,000 EGP/mo',
            color: 'blue',
            features: [
                { name: 'Storage Space', status: '50 GB SSD' },
                { name: 'Monthly Bandwidth', status: '500 GB' },
                { name: 'cPanel Accounts', status: '10' },
                { name: 'Free SSL Certificates', status: true },
                { name: 'WHM Control Panel', status: true },
                { name: 'Dedicated IP', status: false },
                { name: 'White Label Support', status: true },
                { name: 'Free Domain Reseller', status: false },
                { name: 'Backup System', status: 'Weekly' },
                { name: 'Technical Support', status: '24/7' }
            ]
        },
        {
            name: 'Professional Reseller',
            price: '2,000 EGP/mo',
            color: 'green',
            features: [
                { name: 'Storage Space', status: '100 GB SSD' },
                { name: 'Monthly Bandwidth', status: '1000 GB' },
                { name: 'cPanel Accounts', status: '25' },
                { name: 'Free SSL Certificates', status: true },
                { name: 'WHM Control Panel', status: true },
                { name: 'Dedicated IP', status: true },
                { name: 'White Label Support', status: true },
                { name: 'Free Domain Reseller', status: true },
                { name: 'Backup System', status: 'Daily' },
                { name: 'Technical Support', status: '24/7 Priority' }
            ]
        },
        {
            name: 'Enterprise Reseller',
            price: '3,500 EGP/mo',
            color: 'red',
            features: [
                { name: 'Storage Space', status: '250 GB SSD' },
                { name: 'Monthly Bandwidth', status: 'Unlimited' },
                { name: 'cPanel Accounts', status: 'Unlimited' },
                { name: 'Free SSL Certificates', status: true },
                { name: 'WHM Control Panel', status: true },
                { name: 'Dedicated IP', status: true },
                { name: 'White Label Support', status: true },
                { name: 'Free Domain Reseller', status: true },
                { name: 'Backup System', status: 'Daily + Remote' },
                { name: 'Technical Support', status: '24/7 VIP' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Reseller Hosting Packages</h2>
                <p className={styles.sectionDescription}>
                    Start your own hosting business with our reliable reseller hosting packages.
                </p>
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
                                                {feature.status === true ? (
                                                    <span className={styles.checkIcon}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                ) : feature.status === false ? (
                                                    <span className={styles.timesIcon}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </span>
                                                ) : (
                                                    <span className={styles.featureValue}>{feature.status}</span>
                                                )}
                                                {feature.name}
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        className={`${styles.buyButton} ${styles[`btn${pkg.color}`]}`}
                                        onClick={handleLearnMore}
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

export default ResellerHostingPackages;
