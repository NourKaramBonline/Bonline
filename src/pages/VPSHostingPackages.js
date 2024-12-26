import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './VPSHostingPackages.module.css';

const VPSHostingPackages = () => {
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
            name: 'Basic VPS',
            price: '1,500 EGP/mo',
            color: 'blue',
            features: [
                { name: 'CPU Cores', status: '2 vCPU' },
                { name: 'RAM', status: '2 GB' },
                { name: 'Storage', status: '50 GB SSD' },
                { name: 'Bandwidth', status: '2 TB' },
                { name: 'Root Access', status: true },
                { name: 'DDoS Protection', status: true },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'Dedicated IP', status: '1' },
                { name: 'Backup Service', status: 'Weekly' },
                { name: 'Technical Support', status: '24/7' }
            ]
        },
        {
            name: 'Professional VPS',
            price: '2,500 EGP/mo',
            color: 'green',
            features: [
                { name: 'CPU Cores', status: '4 vCPU' },
                { name: 'RAM', status: '4 GB' },
                { name: 'Storage', status: '100 GB SSD' },
                { name: 'Bandwidth', status: '4 TB' },
                { name: 'Root Access', status: true },
                { name: 'DDoS Protection', status: true },
                { name: 'Control Panel', status: 'Included' },
                { name: 'Dedicated IP', status: '2' },
                { name: 'Backup Service', status: 'Daily' },
                { name: 'Technical Support', status: '24/7 Priority' }
            ]
        },
        {
            name: 'Enterprise VPS',
            price: '4,000 EGP/mo',
            color: 'red',
            features: [
                { name: 'CPU Cores', status: '8 vCPU' },
                { name: 'RAM', status: '8 GB' },
                { name: 'Storage', status: '200 GB SSD' },
                { name: 'Bandwidth', status: '8 TB' },
                { name: 'Root Access', status: true },
                { name: 'DDoS Protection', status: true },
                { name: 'Control Panel', status: 'Included' },
                { name: 'Dedicated IP', status: '4' },
                { name: 'Backup Service', status: 'Daily + Remote' },
                { name: 'Technical Support', status: '24/7 VIP' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>VPS Hosting Packages</h2>
                <p className={styles.sectionDescription}>
                    Experience superior performance with our Virtual Private Server hosting solutions.
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

export default VPSHostingPackages;
