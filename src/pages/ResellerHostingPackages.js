import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './ResellerHostingPackages.module.css';

const ResellerHostingPackages = () => {
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
            name: 'Basic Reseller Package',
            price: '750 EGP/month',
            color: 'blue',
            features: [
                { name: 'Disk Space', value: '60 GB SSD', status: true },
                { name: 'Bandwidth', value: '600 GB', status: true },
                { name: 'Number of Accounts', value: 'Up to 10', status: true },
                { name: 'Control Panel', value: 'cPanel/WHM', status: true },
                { name: 'White-Label Branding', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Backups', value: 'Weekly', status: true },
                { name: 'Security', value: 'Basic Firewall', status: true },
                { name: 'Support', value: '24/7 Basic Support', status: true },
                { name: 'Marketing Tools', status: false },
                { name: 'Account Management', value: 'WHM', status: true },
                { name: 'Additional Features', status: false }
            ]
        },
        {
            name: 'Standard Reseller Package',
            price: '1,500 EGP/month',
            color: 'green',
            features: [
                { name: 'Disk Space', value: '120 GB SSD', status: true },
                { name: 'Bandwidth', value: '1.2 TB', status: true },
                { name: 'Number of Accounts', value: 'Up to 50', status: true },
                { name: 'Control Panel', value: 'cPanel/WHM', status: true },
                { name: 'White-Label Branding', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Backups', value: 'Daily', status: true },
                { name: 'Security', value: 'Advanced Firewall', status: true },
                { name: 'Support', value: '24/7 Priority Support', status: true },
                { name: 'Marketing Tools', value: 'Basic', status: true },
                { name: 'Account Management', value: 'WHM', status: true },
                { name: 'Additional Features', value: 'Website Migration', status: true }
            ]
        },
        {
            name: 'Premium Reseller Package',
            price: '3,000 EGP/month',
            color: 'red',
            features: [
                { name: 'Disk Space', value: '200 GB SSD', status: true },
                { name: 'Bandwidth', value: '2.5 TB', status: true },
                { name: 'Number of Accounts', value: 'Up to 100', status: true },
                { name: 'Control Panel', value: 'cPanel/WHM', status: true },
                { name: 'White-Label Branding', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Backups', value: 'Daily with On-Demand', status: true },
                { name: 'Security', value: 'Advanced Firewall + Malware Scanning', status: true },
                { name: 'Support', value: '24/7 Dedicated Support', status: true },
                { name: 'Marketing Tools', value: 'Advanced', status: true },
                { name: 'Account Management', value: 'WHM', status: true },
                { name: 'Additional Features', value: 'Website Migration + SEO Tools', status: true }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Reseller Hosting Packages</h2>
                <p className={styles.sectionDescription}>
                    Below is a comprehensive comparison of the Reseller Hosting Packages, showcasing features included at each tier.
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

export default ResellerHostingPackages;
