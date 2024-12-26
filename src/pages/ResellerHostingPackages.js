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
            price: '750 EGP/month',
            color: 'blue',
            features: [
                { name: 'Disk Space', status: '60 GB SSD' },
                { name: 'Bandwidth', status: '600 GB' },
                { name: 'Number of Accounts', status: 'Up to 10' },
                { name: 'Control Panel', status: 'cPanel/WHM' },
                { name: 'White-Label Branding', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Backups', status: 'Weekly' },
                { name: 'Security Features', status: 'Basic Firewall' },
                { name: 'Support', status: '24/7 Basic Support' },
                { name: 'Marketing Tools', status: false },
                { name: 'Account Management', status: 'WHM' },
                { name: 'Additional Features', status: false }
            ]
        },
        {
            name: 'Standard Reseller',
            price: '1,500 EGP/month',
            color: 'green',
            features: [
                { name: 'Disk Space', status: '120 GB SSD' },
                { name: 'Bandwidth', status: '1.2 TB' },
                { name: 'Number of Accounts', status: 'Up to 50' },
                { name: 'Control Panel', status: 'cPanel/WHM' },
                { name: 'White-Label Branding', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Backups', status: 'Daily' },
                { name: 'Security Features', status: 'Advanced Firewall' },
                { name: 'Support', status: '24/7 Priority Support' },
                { name: 'Marketing Tools', status: 'Basic' },
                { name: 'Account Management', status: 'WHM' },
                { name: 'Additional Features', status: 'Website Migration' }
            ]
        },
        {
            name: 'Premium Reseller',
            price: '3,000 EGP/month',
            color: 'red',
            features: [
                { name: 'Disk Space', status: '200 GB SSD' },
                { name: 'Bandwidth', status: '2.5 TB' },
                { name: 'Number of Accounts', status: 'Up to 100' },
                { name: 'Control Panel', status: 'cPanel/WHM' },
                { name: 'White-Label Branding', status: true },
                { name: 'Free SSL Certificates', status: true },
                { name: 'Backups', status: 'Daily with On-Demand' },
                { name: 'Security Features', status: 'Advanced Firewall + Malware Scanning' },
                { name: 'Support', status: '24/7 Dedicated Support' },
                { name: 'Marketing Tools', status: 'Advanced' },
                { name: 'Account Management', status: 'WHM' },
                { name: 'Additional Features', status: 'Website Migration + SEO Tools' }
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
