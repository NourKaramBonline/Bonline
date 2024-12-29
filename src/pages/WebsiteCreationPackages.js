import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './WebsiteCreationPackages.module.css';

const WebsiteCreationPackages = () => {
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
            name: 'Starter Package',
            price: '7,500 EGP',
            color: 'blue',
            features: [
                { name: 'Design', status: 'Template-Based Design' },
                { name: 'Number of Pages', status: 'Up to 5' },
                { name: 'Responsive Design', status: true },
                { name: 'Content Management System', status: 'Basic CMS' },
                { name: 'SEO Optimization', status: 'Basic' },
                { name: 'E-commerce Functionality', status: false },
                { name: 'Domain & Hosting', status: '1 Year Included' },
                { name: 'SSL Certificate', status: true },
                { name: 'Support & Maintenance', status: '1 Month' },
                { name: 'Additional Features', status: 'Blog Integration' }
            ]
        },
        {
            name: 'Professional Package',
            price: '15,000 EGP',
            color: 'green',
            features: [
                { name: 'Design', status: 'Custom Design' },
                { name: 'Number of Pages', status: 'Up to 10' },
                { name: 'Responsive Design', status: true },
                { name: 'Content Management System', status: 'Advanced CMS' },
                { name: 'SEO Optimization', status: 'Standard' },
                { name: 'E-commerce Functionality', status: 'Optional' },
                { name: 'Domain & Hosting', status: '1 Year Included' },
                { name: 'SSL Certificate', status: true },
                { name: 'Support & Maintenance', status: '3 Months' },
                { name: 'Additional Features', status: 'Social Media Integration' }
            ]
        },
        {
            name: 'Enterprise Package',
            price: '30,000 EGP',
            color: 'red',
            features: [
                { name: 'Design', status: 'Premium Custom Design' },
                { name: 'Number of Pages', status: 'Unlimited' },
                { name: 'Responsive Design', status: true },
                { name: 'Content Management System', status: 'Advanced CMS' },
                { name: 'SEO Optimization', status: 'Advanced' },
                { name: 'E-commerce Functionality', status: true },
                { name: 'Domain & Hosting', status: '1 Year Included' },
                { name: 'SSL Certificate', status: true },
                { name: 'Support & Maintenance', status: '6 Months' },
                { name: 'Additional Features', status: 'Custom Features (e.g., CRM Integration)' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Website Creation Packages</h2>
                <p className={styles.sectionDescription}>
                    Below is a competitive pricing model for Website Creation Packages tailored for startups,
                    offering flexibility and affordability to attract customers while maintaining quality.
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
                                                {feature.status === true || typeof feature.status === 'string' ? (
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
                                                {typeof feature.status === 'string' && 
                                                    <span className={styles.featureValue}> {feature.status}</span>
                                                }
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

export default WebsiteCreationPackages;
