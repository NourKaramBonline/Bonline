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

    const packages = [
        {
            name: 'Basic E-commerce Package',
            price: 'Approximately 25,000 EGP',
            features: [
                'Custom responsive design compatible with all devices',
                'Unlimited product listings',
                'Standard shopping cart and checkout functionality',
                'Integration with one payment gateway (e.g., PayPal, Stripe)',
                'Basic shipping options configuration',
                'User-friendly Content Management System (CMS)',
                'Basic SEO optimization',
                '1-year hosting (10 GB SSD storage, unlimited bandwidth)',
                'Free domain registration for 1 year',
                '1-month post-launch support'
            ],
            unsupportedFeatures: [
                'Advanced shopping cart with discount and coupon functionalities',
                'Integration with multiple payment gateways',
                'Comprehensive shipping options and tax configurations',
                'Enhanced SEO optimization',
                'Integration with social media platforms'
            ],
            color: 'blue'
        },
        {
            name: 'Standard E-commerce Package',
            price: 'Approximately 40,000 EGP',
            features: [
                'Custom responsive design with enhanced UI/UX elements',
                'Unlimited product listings',
                'Advanced shopping cart with discount and coupon functionalities',
                'Integration with multiple payment gateways',
                'Comprehensive shipping options and tax configurations',
                'Inventory management system',
                'Enhanced SEO optimization',
                'Integration with social media platforms',
                '1-year hosting (30 GB SSD storage, unlimited bandwidth)',
                'Free domain registration for 1 year',
                '3 months of post-launch support'
            ],
            unsupportedFeatures: [
                'Bespoke responsive design with advanced UI/UX elements',
                'Advanced shopping cart with personalized recommendations',
                'Blog or news section',
                'Integration with CRM and email marketing tools'
            ],
            color: 'green'
        },
        {
            name: 'Premium E-commerce Package',
            price: 'Approximately 60,000 EGP',
            features: [
                'Bespoke responsive design with advanced UI/UX elements',
                'Unlimited product listings',
                'Advanced shopping cart with personalized recommendations',
                'Integration with multiple payment gateways and methods',
                'Comprehensive shipping, tax, and inventory management',
                'Customer account management and order tracking',
                'Blog or news section',
                'Comprehensive SEO and performance optimization',
                'Integration with CRM and email marketing tools',
                'Training session on website management',
                '1-year hosting (50 GB SSD storage, unlimited bandwidth)',
                'Free domain registration for 1 year',
                '6 months of post-launch support'
            ],
            unsupportedFeatures: [],
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
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className={styles.featureItem}>
                                                <span className={styles.checkIcon}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                                {feature}
                                            </div>
                                        ))}
                                        {pkg.unsupportedFeatures.map((feature, idx) => (
                                            <div key={idx} className={`${styles.featureItem} ${styles.unsupported}`}>
                                                <span className={styles.timesIcon}>
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </span>
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
