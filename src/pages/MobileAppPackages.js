import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './EcommercePackages.module.css';

const MobileAppPackages = () => {
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
            name: 'Basic Mobile App Package',
            price: '75,000 EGP',
            color: 'blue',
            features: [
                { name: 'UI/UX Design', status: 'Basic responsive design' },
                { name: 'Platform Support', status: 'iOS or Android' },
                { name: 'Number of Screens/Pages', status: 'Up to 5' },
                { name: 'Functionality', status: 'Basic (e.g., informational content, contact form)' },
                { name: 'Integration with Social Media', status: true },
                { name: 'Third-Party API Integration', status: false },
                { name: 'Analytics Integration', status: 'Basic' },
                { name: 'Push Notifications', status: false },
                { name: 'App Store/Google Play Submission', status: true },
                { name: 'Post-Launch Support', status: '1 Month' }
            ]
        },
        {
            name: 'Standard Mobile App Package',
            price: '150,000 EGP',
            color: 'green',
            features: [
                { name: 'UI/UX Design', status: 'Custom' },
                { name: 'Platform Support', status: 'iOS or Android' },
                { name: 'Number of Screens/Pages', status: 'Up to 10' },
                { name: 'Functionality', status: 'Advanced (e.g., user authentication, in-app purchases)' },
                { name: 'Integration with Social Media', status: true },
                { name: 'Third-Party API Integration', status: true },
                { name: 'Analytics Integration', status: 'Enhanced' },
                { name: 'Push Notifications', status: true },
                { name: 'App Store/Google Play Submission', status: true },
                { name: 'Post-Launch Support', status: '3 Months' }
            ]
        },
        {
            name: 'Premium Mobile App Package',
            price: '300,000 EGP',
            color: 'red',
            features: [
                { name: 'UI/UX Design', status: 'Premium with Prototyping' },
                { name: 'Platform Support', status: 'Both iOS and Android' },
                { name: 'Number of Screens/Pages', status: 'Unlimited' },
                { name: 'Functionality', status: <span><span style={{color: '#007bff', fontWeight: '500'}}>Complex</span> (e.g., real-time data sync, custom animations)</span> },
                { name: 'Integration with Social Media', status: true },
                { name: 'Third-Party API Integration', status: <><span>Multiple Services</span><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /></> },
                { name: 'Analytics Integration', status: 'Comprehensive' },
                { name: 'Push Notifications', status: <><span>with In-App Messaging</span><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /></> },
                { name: 'App Store/Google Play Submission', status: <><span>Optimized Submission</span><FontAwesomeIcon icon={faCheck} className={styles.checkIcon} /></> },
                { name: 'Post-Launch Support', status: '6 Months' }
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
                                                {typeof feature.status === 'boolean' ? (
                                                    <span className={feature.status ? styles.checkIcon : styles.timesIcon}>
                                                        <FontAwesomeIcon icon={feature.status ? faCheck : faTimes} />
                                                    </span>
                                                ) : (
                                                    <span className={styles.featureValue}>{feature.status}</span>
                                                )}
                                                <span>{feature.name}</span>
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
