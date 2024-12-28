import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './EcommercePackages.module.css';

const EcommercePackages = () => {
    const history = useHistory();

    const handleLearnMore = () => {
        history.push('/#contact');
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const packages = [
        {
            name: 'Basic E-commerce Package',
            price: '25,000 EGP',
            color: 'blue',
            features: [
                { name: 'Custom Responsive Design', status: true },
                { name: 'Enhanced UI/UX Design', status: false },
                { name: 'Unlimited Product Listings', status: true },
                { name: 'Standard Shopping Cart', status: true },
                { name: 'Advanced Cart', value: 'Discounts/Coupons', status: false },
                { name: 'Personalized Cart Recommendations', status: false },
                { name: 'Single Payment Gateway Integration', status: true },
                { name: 'Multiple Payment Gateway Options', status: false },
                { name: 'Basic Shipping Configuration', status: true },
                { name: 'Comprehensive Shipping Options', status: false },
                { name: 'Tax Configurations', status: false },
                { name: 'Inventory Management', status: false },
                { name: 'Customer Account Management', status: false },
                { name: 'Order Tracking', status: false },
                { name: 'Blog/News Section', status: false },
                { name: 'Social Media Integration', status: true },
                { name: 'Basic SEO Optimization', status: true },
                { name: 'Enhanced SEO Optimization', status: false },
                { name: 'CRM and Email Marketing Tools', status: false },
                { name: 'Google Analytics Integration', status: false },
                { name: 'Training Session on Management', status: false },
                { name: 'Hosting - Storage', value: '10 GB SSD', status: true },
                { name: 'Hosting - Bandwidth', value: 'Unlimited', status: true },
                { name: 'Free Domain Registration', value: '1 Year', status: true },
                { name: 'Post-Launch Support', value: '1 Month', status: true }
            ]
        },
        {
            name: 'Standard E-commerce Package',
            price: '40,000 EGP',
            color: 'green',
            features: [
                { name: 'Custom Responsive Design', status: true },
                { name: 'Enhanced UI/UX Design', status: true },
                { name: 'Unlimited Product Listings', status: true },
                { name: 'Standard Shopping Cart', status: true },
                { name: 'Advanced Cart', value: 'Discounts/Coupons', status: true },
                { name: 'Personalized Cart Recommendations', status: false },
                { name: 'Single Payment Gateway Integration', status: false },
                { name: 'Multiple Payment Gateway Options', status: true },
                { name: 'Basic Shipping Configuration', status: false },
                { name: 'Comprehensive Shipping Options', status: true },
                { name: 'Tax Configurations', status: true },
                { name: 'Inventory Management', status: true },
                { name: 'Customer Account Management', status: false },
                { name: 'Order Tracking', status: false },
                { name: 'Blog/News Section', status: false },
                { name: 'Social Media Integration', status: true },
                { name: 'Basic SEO Optimization', status: true },
                { name: 'Enhanced SEO Optimization', status: true },
                { name: 'CRM and Email Marketing Tools', status: false },
                { name: 'Google Analytics Integration', status: true },
                { name: 'Training Session on Management', status: false },
                { name: 'Hosting - Storage', value: '30 GB SSD', status: true },
                { name: 'Hosting - Bandwidth', value: 'Unlimited', status: true },
                { name: 'Free Domain Registration', value: '1 Year', status: true },
                { name: 'Post-Launch Support', value: '3 Months', status: true }
            ]
        },
        {
            name: 'Premium E-commerce Package',
            price: '60,000 EGP',
            color: 'red',
            features: [
                { name: 'Custom Responsive Design', status: true },
                { name: 'Enhanced UI/UX Design', status: true },
                { name: 'Unlimited Product Listings', status: true },
                { name: 'Standard Shopping Cart', status: true },
                { name: 'Advanced Cart', value: 'Discounts/Coupons', status: true },
                { name: 'Personalized Cart Recommendations', status: true },
                { name: 'Single Payment Gateway Integration', status: false },
                { name: 'Multiple Payment Gateway Options', status: true },
                { name: 'Basic Shipping Configuration', status: false },
                { name: 'Comprehensive Shipping Options', status: true },
                { name: 'Tax Configurations', status: true },
                { name: 'Inventory Management', status: true },
                { name: 'Customer Account Management', status: true },
                { name: 'Order Tracking', status: true },
                { name: 'Blog/News Section', status: true },
                { name: 'Social Media Integration', status: true },
                { name: 'Basic SEO Optimization', status: true },
                { name: 'Enhanced SEO Optimization', status: true },
                { name: 'CRM and Email Marketing Tools', status: true },
                { name: 'Google Analytics Integration', status: true },
                { name: 'Training Session on Management', status: true },
                { name: 'Hosting - Storage', value: '50 GB SSD', status: true },
                { name: 'Hosting - Bandwidth', value: 'Unlimited', status: true },
                { name: 'Free Domain Registration', value: '1 Year', status: true },
                { name: 'Post-Launch Support', value: '6 Months', status: true }
            ]
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
