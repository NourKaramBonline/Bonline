import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './MobileAppPackages.module.css';

const MobileAppPackages = () => {
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
            name: 'Basic Mobile App Package',
            price: '25,000 EGP',
            color: 'blue',
            features: [
                { name: 'UI/UX Design', status: 'Basic responsive design' },
                { name: 'Platform Support', status: 'Single platform (Android or iOS)' },
                { name: 'User Authentication', status: true },
                { name: 'Push Notifications', status: 'Basic notifications' },
                { name: 'Data Storage', status: 'Local storage' },
                { name: 'API Integration', status: 'Basic REST API integration' },
                { name: 'Offline Mode', status: false },
                { name: 'Analytics Integration', status: 'Basic app analytics' },
                { name: 'Social Media Integration', status: false },
                { name: 'In-App Purchases', status: false },
                { name: 'App Store Optimization', status: true },
                { name: 'Performance Monitoring', status: 'Basic monitoring' },
                { name: 'Security Features', status: 'Standard security' },
                { name: 'Support & Maintenance', status: '1 month support' }
            ]
        },
        {
            name: 'Standard Mobile App Package',
            price: '40,000 EGP',
            color: 'green',
            features: [
                { name: 'UI/UX Design', status: 'Advanced UI with animations' },
                { name: 'Platform Support', status: 'Cross-platform (Android & iOS)' },
                { name: 'User Authentication', status: true },
                { name: 'Push Notifications', status: 'Advanced notifications' },
                { name: 'Data Storage', status: 'Cloud storage integration' },
                { name: 'API Integration', status: 'Multiple API integrations' },
                { name: 'Offline Mode', status: true },
                { name: 'Analytics Integration', status: 'Advanced analytics' },
                { name: 'Social Media Integration', status: true },
                { name: 'In-App Purchases', status: true },
                { name: 'App Store Optimization', status: true },
                { name: 'Performance Monitoring', status: 'Advanced monitoring' },
                { name: 'Security Features', status: 'Enhanced security' },
                { name: 'Support & Maintenance', status: '3 months support' }
            ]
        },
        {
            name: 'Premium Mobile App Package',
            price: '60,000 EGP',
            color: 'red',
            features: [
                { name: 'UI/UX Design', status: 'Premium UI with custom animations' },
                { name: 'Platform Support', status: 'Native apps for all platforms' },
                { name: 'User Authentication', status: true },
                { name: 'Push Notifications', status: 'Custom notification system' },
                { name: 'Data Storage', status: 'Advanced cloud infrastructure' },
                { name: 'API Integration', status: 'Custom API development' },
                { name: 'Offline Mode', status: true },
                { name: 'Analytics Integration', status: 'Custom analytics dashboard' },
                { name: 'Social Media Integration', status: true },
                { name: 'In-App Purchases', status: true },
                { name: 'App Store Optimization', status: true },
                { name: 'Performance Monitoring', status: 'Real-time monitoring' },
                { name: 'Security Features', status: 'Enterprise-grade security' },
                { name: 'Support & Maintenance', status: '6 months premium support' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Mobile App Development Packages</h2>
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

export default MobileAppPackages;
