import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './EcommercePackages.module.css';

const EcommercePackages = () => {
    const history = useHistory();

    const handleLearnMore = () => {
        history.push('/#about');
        // Smooth scroll to about section after navigation
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const allFeatures = [
        'Custom Responsive Design',
        'Enhanced UI/UX Design',
        'Unlimited Product Listings',
        'Standard Shopping Cart',
        'Advanced Cart (Discounts/Coupons)',
        'Personalized Cart Recommendations',
        'Single Payment Gateway Integration',
        'Multiple Payment Gateway Options',
        'Basic Shipping Configuration',
        'Comprehensive Shipping Options',
        'Tax Configurations',
        'Inventory Management',
        'Customer Account Management',
        'Order Tracking',
        'Blog/News Section',
        'Social Media Integration',
        'Basic SEO Optimization',
        'Enhanced SEO Optimization',
        'CRM and Email Marketing Tools',
        'Google Analytics Integration',
        'Training Session on Management',
        'Hosting - Storage',
        'Hosting - Bandwidth',
        'Free Domain Registration (1 Year)',
        'Post-Launch Support'
    ];

    const packages = [
        {
            name: 'Basic E-commerce Package',
            price: 'Approximately 25,000 EGP',
            featureStatus: {
                'Custom Responsive Design': true,
                'Enhanced UI/UX Design': false,
                'Unlimited Product Listings': true,
                'Standard Shopping Cart': true,
                'Advanced Cart (Discounts/Coupons)': false,
                'Personalized Cart Recommendations': false,
                'Single Payment Gateway Integration': true,
                'Multiple Payment Gateway Options': false,
                'Basic Shipping Configuration': false,
                'Comprehensive Shipping Options': false,
                'Tax Configurations': false,
                'Inventory Management': false,
                'Customer Account Management': false,
                'Order Tracking': false,
                'Blog/News Section': false,
                'Social Media Integration': false,
                'Basic SEO Optimization': true,
                'Enhanced SEO Optimization': false,
                'CRM and Email Marketing Tools': false,
                'Google Analytics Integration': false,
                'Training Session on Management': false,
                'Hosting - Storage': '10 GB SSD',
                'Hosting - Bandwidth': 'Unlimited',
                'Free Domain Registration (1 Year)': true,
                'Post-Launch Support': '1 Month'
            },
            color: 'blue'
        },
        {
            name: 'Standard E-commerce Package',
            price: 'Approximately 40,000 EGP',
            featureStatus: {
                'Custom Responsive Design': true,
                'Enhanced UI/UX Design': true,
                'Unlimited Product Listings': true,
                'Standard Shopping Cart': true,
                'Advanced Cart (Discounts/Coupons)': true,
                'Personalized Cart Recommendations': false,
                'Single Payment Gateway Integration': false,
                'Multiple Payment Gateway Options': true,
                'Basic Shipping Configuration': true,
                'Comprehensive Shipping Options': true,
                'Tax Configurations': true,
                'Inventory Management': true,
                'Customer Account Management': false,
                'Order Tracking': false,
                'Blog/News Section': false,
                'Social Media Integration': true,
                'Basic SEO Optimization': true,
                'Enhanced SEO Optimization': true,
                'CRM and Email Marketing Tools': false,
                'Google Analytics Integration': true,
                'Training Session on Management': false,
                'Hosting - Storage': '30 GB SSD',
                'Hosting - Bandwidth': 'Unlimited',
                'Free Domain Registration (1 Year)': true,
                'Post-Launch Support': '3 Months'
            },
            color: 'green'
        },
        {
            name: 'Premium E-commerce Package',
            price: 'Approximately 60,000 EGP',
            featureStatus: {
                'Custom Responsive Design': true,
                'Enhanced UI/UX Design': true,
                'Unlimited Product Listings': true,
                'Standard Shopping Cart': true,
                'Advanced Cart (Discounts/Coupons)': true,
                'Personalized Cart Recommendations': true,
                'Single Payment Gateway Integration': false,
                'Multiple Payment Gateway Options': true,
                'Basic Shipping Configuration': true,
                'Comprehensive Shipping Options': true,
                'Tax Configurations': true,
                'Inventory Management': true,
                'Customer Account Management': true,
                'Order Tracking': true,
                'Blog/News Section': true,
                'Social Media Integration': true,
                'Basic SEO Optimization': true,
                'Enhanced SEO Optimization': true,
                'CRM and Email Marketing Tools': true,
                'Google Analytics Integration': true,
                'Training Session on Management': true,
                'Hosting - Storage': '50 GB SSD',
                'Hosting - Bandwidth': 'Unlimited',
                'Free Domain Registration (1 Year)': true,
                'Post-Launch Support': '6 Months'
            },
            color: 'red'
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>E-commerce Solutions Packages</h2>
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
                                        {allFeatures.map((feature, idx) => (
                                            <div key={idx} className={styles.featureItem}>
                                                {pkg.featureStatus[feature] === true ? (
                                                    <span className={styles.checkIcon}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </span>
                                                ) : pkg.featureStatus[feature] === false ? (
                                                    <span className={styles.timesIcon}>
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </span>
                                                ) : (
                                                    <span className={styles.featureValue}>{pkg.featureStatus[feature]}</span>
                                                )}
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button 
                                        onClick={handleLearnMore}
                                        className={`${styles.buyButton} ${styles[`btn${pkg.color}`]}`}
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

export default EcommercePackages;
