import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './VPSHostingPackages.module.css';

const VPSHostingPackages = () => {
    const history = useHistory();

    const handleLearnMore = () => {
        history.push('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const packages = [
        {
            name: 'VPS 1',
            price: '225 EGP/month',
            color: 'blue',
            features: [
                { name: 'vCPU Cores', value: '4', status: true },
                { name: 'RAM', value: '6 GB', status: true },
                { name: 'Storage Options', value: 'NVMe or 400 GB SSD', status: true },
                { name: 'Snapshots', value: '1', status: true },
                { name: 'Bandwidth', value: '32 TB', status: true },
                { name: 'Incoming Traffic', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'Optional', status: true },
                { name: 'DDoS Protection', value: 'Included', status: true },
                { name: 'Full Root Access', value: 'Yes', status: true },
                { name: 'Operating System', value: 'Linux/Windows', status: true },
                { name: 'Data Center Locations', value: 'Multiple Regions', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true }
            ]
        },
        {
            name: 'VPS 2',
            price: '563 EGP/month',
            color: 'blue',
            features: [
                { name: 'vCPU Cores', value: '6', status: true },
                { name: 'RAM', value: '16 GB', status: true },
                { name: 'Storage Options', value: 'NVMe or 400 GB SSD', status: true },
                { name: 'Snapshots', value: '2', status: true },
                { name: 'Bandwidth', value: '32 TB', status: true },
                { name: 'Incoming Traffic', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'Optional', status: true },
                { name: 'DDoS Protection', value: 'Included', status: true },
                { name: 'Full Root Access', value: 'Yes', status: true },
                { name: 'Operating System', value: 'Linux/Windows', status: true },
                { name: 'Data Center Locations', value: 'Multiple Regions', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true }
            ]
        },
        {
            name: 'VPS 3',
            price: '788 EGP/month',
            color: 'green',
            features: [
                { name: 'vCPU Cores', value: '8', status: true },
                { name: 'RAM', value: '24 GB', status: true },
                { name: 'Storage Options', value: 'NVMe or 1.2 TB SSD', status: true },
                { name: 'Snapshots', value: '2', status: true },
                { name: 'Bandwidth', value: '32 TB', status: true },
                { name: 'Incoming Traffic', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'Optional', status: true },
                { name: 'DDoS Protection', value: 'Included', status: true },
                { name: 'Full Root Access', value: 'Yes', status: true },
                { name: 'Operating System', value: 'Linux/Windows', status: true },
                { name: 'Data Center Locations', value: 'Multiple Regions', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true }
            ]
        },
        {
            name: 'VPS 4',
            price: '1,238 EGP/month',
            color: 'green',
            features: [
                { name: 'vCPU Cores', value: '12', status: true },
                { name: 'RAM', value: '48 GB', status: true },
                { name: 'Storage Options', value: 'NVMe or 1.6 TB SSD', status: true },
                { name: 'Snapshots', value: '3', status: true },
                { name: 'Bandwidth', value: '32 TB', status: true },
                { name: 'Incoming Traffic', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'Optional', status: true },
                { name: 'DDoS Protection', value: 'Included', status: true },
                { name: 'Full Root Access', value: 'Yes', status: true },
                { name: 'Operating System', value: 'Linux/Windows', status: true },
                { name: 'Data Center Locations', value: 'Multiple Regions', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true }
            ]
        },
        {
            name: 'VPS 5',
            price: '1,575 EGP/month',
            color: 'red',
            features: [
                { name: 'vCPU Cores', value: '16', status: true },
                { name: 'RAM', value: '64 GB', status: true },
                { name: 'Storage Options', value: 'NVMe or 2 TB SSD', status: true },
                { name: 'Snapshots', value: '3', status: true },
                { name: 'Bandwidth', value: '32 TB', status: true },
                { name: 'Incoming Traffic', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'Optional', status: true },
                { name: 'DDoS Protection', value: 'Included', status: true },
                { name: 'Full Root Access', value: 'Yes', status: true },
                { name: 'Operating System', value: 'Linux/Windows', status: true },
                { name: 'Data Center Locations', value: 'Multiple Regions', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true }
            ]
        },
        {
            name: 'VPS 6',
            price: '2,888 EGP/month',
            color: 'red',
            features: [
                { name: 'vCPU Cores', value: '24', status: true },
                { name: 'RAM', value: '120 GB', status: true },
                { name: 'Storage Options', value: 'NVMe or 2.4 TB SSD', status: true },
                { name: 'Snapshots', value: '3', status: true },
                { name: 'Bandwidth', value: '32 TB', status: true },
                { name: 'Incoming Traffic', value: 'Unlimited', status: true },
                { name: 'Control Panel', value: 'Optional', status: true },
                { name: 'DDoS Protection', value: 'Included', status: true },
                { name: 'Full Root Access', value: 'Yes', status: true },
                { name: 'Operating System', value: 'Linux/Windows', status: true },
                { name: 'Data Center Locations', value: 'Multiple Regions', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true }
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
