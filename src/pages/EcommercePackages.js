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
            price: '25,000 EGP',
            color: 'blue',
            features: [
                { name: 'Custom Responsive Design', status: true },
                { name: 'Enhanced UI/UX Design', status: false },
                { name: 'Product Management', status: 'Up to 100 products' },
                { name: 'Shopping Cart Features', status: 'Standard cart functionality' },
                { name: 'Payment Integration', status: 'Single payment gateway' },
                { name: 'Shipping Configuration', status: 'Basic shipping options' },
                { name: 'Tax Management', status: false },
                { name: 'Inventory System', status: 'Basic tracking' },
                { name: 'Customer Management', status: 'Basic accounts' },
                { name: 'Order Management', status: 'Basic tracking' },
                { name: 'Content Management', status: false },
                { name: 'Social Media Integration', status: 'Basic social sharing' },
                { name: 'SEO Features', status: 'Basic on-page SEO' },
                { name: 'Analytics Integration', status: 'Basic Google Analytics' },
                { name: 'Support & Training', status: '1 month support' }
            ]
        },
        {
            name: 'Standard E-commerce Package',
            price: '40,000 EGP',
            color: 'green',
            features: [
                { name: 'Custom Responsive Design', status: true },
                { name: 'Enhanced UI/UX Design', status: true },
                { name: 'Product Management', status: 'Unlimited products' },
                { name: 'Shopping Cart Features', status: 'Advanced cart with discounts' },
                { name: 'Payment Integration', status: 'Multiple payment gateways' },
                { name: 'Shipping Configuration', status: 'Multiple shipping options' },
                { name: 'Tax Management', status: true },
                { name: 'Inventory System', status: 'Advanced with alerts' },
                { name: 'Customer Management', status: 'Advanced with groups' },
                { name: 'Order Management', status: 'Full tracking system' },
                { name: 'Content Management', status: 'Blog and news section' },
                { name: 'Social Media Integration', status: 'Full social media integration' },
                { name: 'SEO Features', status: 'Advanced SEO tools' },
                { name: 'Analytics Integration', status: 'Enhanced analytics suite' },
                { name: 'Support & Training', status: '3 months support' }
            ]
        },
        {
            name: 'Premium E-commerce Package',
            price: '60,000 EGP',
            color: 'red',
            features: [
                { name: 'Custom Responsive Design', status: 'Premium UI/UX design' },
                { name: 'Enhanced UI/UX Design', status: 'Custom animations and effects' },
                { name: 'Product Management', status: 'Unlimited with variants' },
                { name: 'Shopping Cart Features', status: 'Smart recommendations' },
                { name: 'Payment Integration', status: 'All major payment gateways' },
                { name: 'Shipping Configuration', status: 'Real-time shipping rates' },
                { name: 'Tax Management', status: 'Advanced tax rules' },
                { name: 'Inventory System', status: 'Multi-location inventory' },
                { name: 'Customer Management', status: 'CRM integration' },
                { name: 'Order Management', status: 'Advanced with automation' },
                { name: 'Content Management', status: 'Full CMS with marketing tools' },
                { name: 'Social Media Integration', status: 'Social commerce features' },
                { name: 'SEO Features', status: 'Premium SEO suite' },
                { name: 'Analytics Integration', status: 'Custom reporting dashboard' },
                { name: 'Support & Training', status: '6 months premium support' }
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
