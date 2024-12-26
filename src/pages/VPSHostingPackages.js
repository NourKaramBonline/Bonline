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
            name: 'VPS 1',
            price: '225 EGP/month',
            color: 'blue',
            features: [
                { name: 'vCPU Cores', status: '4' },
                { name: 'RAM', status: '6 GB' },
                { name: 'Storage Options', status: 'NVMe or 400 GB SSD' },
                { name: 'Snapshots', status: '1' },
                { name: 'Bandwidth', status: '32 TB' },
                { name: 'Incoming Traffic', status: 'Unlimited' },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'DDoS Protection', status: 'Included' },
                { name: 'Full Root Access', status: 'Yes' },
                { name: 'Operating System', status: 'Linux/Windows' },
                { name: 'Data Center Locations', status: 'Multiple Regions' },
                { name: 'Support', status: '24/7 Basic Support' }
            ]
        },
        {
            name: 'VPS 2',
            price: '563 EGP/month',
            color: 'blue',
            features: [
                { name: 'vCPU Cores', status: '6' },
                { name: 'RAM', status: '16 GB' },
                { name: 'Storage Options', status: 'NVMe or 400 GB SSD' },
                { name: 'Snapshots', status: '2' },
                { name: 'Bandwidth', status: '32 TB' },
                { name: 'Incoming Traffic', status: 'Unlimited' },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'DDoS Protection', status: 'Included' },
                { name: 'Full Root Access', status: 'Yes' },
                { name: 'Operating System', status: 'Linux/Windows' },
                { name: 'Data Center Locations', status: 'Multiple Regions' },
                { name: 'Support', status: '24/7 Basic Support' }
            ]
        },
        {
            name: 'VPS 3',
            price: '788 EGP/month',
            color: 'green',
            features: [
                { name: 'vCPU Cores', status: '8' },
                { name: 'RAM', status: '24 GB' },
                { name: 'Storage Options', status: 'NVMe or 1.2 TB SSD' },
                { name: 'Snapshots', status: '2' },
                { name: 'Bandwidth', status: '32 TB' },
                { name: 'Incoming Traffic', status: 'Unlimited' },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'DDoS Protection', status: 'Included' },
                { name: 'Full Root Access', status: 'Yes' },
                { name: 'Operating System', status: 'Linux/Windows' },
                { name: 'Data Center Locations', status: 'Multiple Regions' },
                { name: 'Support', status: '24/7 Basic Support' }
            ]
        },
        {
            name: 'VPS 4',
            price: '1,238 EGP/month',
            color: 'green',
            features: [
                { name: 'vCPU Cores', status: '12' },
                { name: 'RAM', status: '48 GB' },
                { name: 'Storage Options', status: 'NVMe or 1.6 TB SSD' },
                { name: 'Snapshots', status: '3' },
                { name: 'Bandwidth', status: '32 TB' },
                { name: 'Incoming Traffic', status: 'Unlimited' },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'DDoS Protection', status: 'Included' },
                { name: 'Full Root Access', status: 'Yes' },
                { name: 'Operating System', status: 'Linux/Windows' },
                { name: 'Data Center Locations', status: 'Multiple Regions' },
                { name: 'Support', status: '24/7 Basic Support' }
            ]
        },
        {
            name: 'VPS 5',
            price: '1,575 EGP/month',
            color: 'red',
            features: [
                { name: 'vCPU Cores', status: '16' },
                { name: 'RAM', status: '64 GB' },
                { name: 'Storage Options', status: 'NVMe or 2 TB SSD' },
                { name: 'Snapshots', status: '3' },
                { name: 'Bandwidth', status: '32 TB' },
                { name: 'Incoming Traffic', status: 'Unlimited' },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'DDoS Protection', status: 'Included' },
                { name: 'Full Root Access', status: 'Yes' },
                { name: 'Operating System', status: 'Linux/Windows' },
                { name: 'Data Center Locations', status: 'Multiple Regions' },
                { name: 'Support', status: '24/7 Basic Support' }
            ]
        },
        {
            name: 'VPS 6',
            price: '2,888 EGP/month',
            color: 'red',
            features: [
                { name: 'vCPU Cores', status: '24' },
                { name: 'RAM', status: '120 GB' },
                { name: 'Storage Options', status: 'NVMe or 2.4 TB SSD' },
                { name: 'Snapshots', status: '3' },
                { name: 'Bandwidth', status: '32 TB' },
                { name: 'Incoming Traffic', status: 'Unlimited' },
                { name: 'Control Panel', status: 'Optional' },
                { name: 'DDoS Protection', status: 'Included' },
                { name: 'Full Root Access', status: 'Yes' },
                { name: 'Operating System', status: 'Linux/Windows' },
                { name: 'Data Center Locations', status: 'Multiple Regions' },
                { name: 'Support', status: '24/7 Basic Support' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>VPS Hosting Packages</h2>
                <p className={styles.sectionDescription}>
                    Below is a comprehensive comparison of the VPS Hosting Packages, showcasing features included at each tier with 50% margin added for pricing.
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
