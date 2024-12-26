import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './CustomSoftwarePackages.module.css';

const CustomSoftwarePackages = () => {
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
            name: 'Basic Custom Software',
            price: '50,000 EGP',
            color: 'blue',
            features: [
                { name: 'Estimated Development Hours', status: '350 Hours' },
                { name: 'Software Complexity', status: 'Simple, user-friendly' },
                { name: 'Number of Core Functionalities', status: 'Up to 5' },
                { name: 'User Interface Design', status: 'Standard' },
                { name: 'Database Integration', status: 'Basic' },
                { name: 'Security Features', status: 'Essential' },
                { name: 'Third-Party API Integration', status: false },
                { name: 'Scalability and Optimization', status: false },
                { name: 'Testing & Quality Assurance', status: 'Comprehensive without performance and security assessments' },
                { name: 'Deployment and Configuration', status: true },
                { name: 'Post-Launch Support', status: '1 Month' }
            ]
        },
        {
            name: 'Standard Custom Software',
            price: '100,000 EGP',
            color: 'green',
            features: [
                { name: 'Estimated Development Hours', status: '700 Hours' },
                { name: 'Software Complexity', status: 'Moderately complex' },
                { name: 'Number of Core Functionalities', status: 'Up to 10' },
                { name: 'User Interface Design', status: 'Custom with enhanced UX' },
                { name: 'Database Integration', status: 'Advanced' },
                { name: 'Security Features', status: 'Role-based access control' },
                { name: 'Third-Party API Integration', status: true },
                { name: 'Scalability and Optimization', status: false },
                { name: 'Testing & Quality Assurance', status: 'Comprehensive without performance and security assessments' },
                { name: 'Deployment and Configuration', status: true },
                { name: 'Post-Launch Support', status: '3 Months' }
            ]
        },
        {
            name: 'Premium Custom Software',
            price: '200,000 EGP',
            color: 'red',
            features: [
                { name: 'Estimated Development Hours', status: '1,400 Hours' },
                { name: 'Software Complexity', status: 'Enterprise-grade, complex' },
                { name: 'Number of Core Functionalities', status: 'Unlimited' },
                { name: 'User Interface Design', status: 'Bespoke with advanced UX/UI' },
                { name: 'Database Integration', status: 'Robust architecture' },
                { name: 'Security Features', status: 'Advanced (encryption, MFA)' },
                { name: 'Third-Party API Integration', status: 'Multiple services' },
                { name: 'Scalability and Optimization', status: true },
                { name: 'Testing & Quality Assurance', status: 'Comprehensive with performance and security assessments' },
                { name: 'Deployment and Configuration', status: 'Training sessions' },
                { name: 'Post-Launch Support', status: '6 Months' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Custom Software Development Packages</h2>
                <p className={styles.sectionDescription}>
                    Below is a comprehensive comparison of the Custom Software Packages, showcasing features included at each tier.
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

export default CustomSoftwarePackages;
