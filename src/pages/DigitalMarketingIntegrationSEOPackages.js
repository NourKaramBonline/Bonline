import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './EcommercePackages.module.css';

const DigitalMarketingIntegrationSEOPackages = () => {
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
            name: 'Basic Integration',
            price: '10,000 EGP',
            color: 'blue',
            features: [
                { name: 'Essential On-Page SEO', status: true },
                { name: 'XML Sitemap and Robots.txt Setup', status: true },
                { name: 'Structured Data (Schema.org)', status: false },
                { name: 'Google Analytics', status: true },
                { name: 'Traffic and Performance Monitoring', status: true },
                { name: 'Custom Dashboards', status: false },
                { name: 'E-commerce Tracking', status: false },
                { name: 'Heatmaps and Session Replay', status: false },
                { name: 'Advanced Reporting', status: false },
                { name: 'Social Media Tools', status: 'Facebook or Instagram (one platform)' },
                { name: 'Email Marketing Tools', status: 'Basic subscription form' },
                { name: 'Standard contact form', status: true },
                { name: 'Marketing Automation Tools', status: false },
                { name: 'PPC Advertising Tools', status: false }
            ]
        },
        {
            name: 'Standard Integration',
            price: '20,000 EGP',
            color: 'green',
            features: [
                { name: 'Essential On-Page SEO', status: true },
                { name: 'XML Sitemap and Robots.txt Setup', status: true },
                { name: 'Structured Data (Schema.org)', status: true },
                { name: 'Google Analytics', status: true },
                { name: 'Traffic and Performance Monitoring', status: true },
                { name: 'Custom Dashboards', status: false },
                { name: 'E-commerce Tracking', status: false },
                { name: 'Heatmaps and Session Replay', status: false },
                { name: 'Advanced Reporting', status: false },
                { name: 'Social Media Tools', status: 'Facebook, Instagram, Twitter' },
                { name: 'Email Marketing Tools', status: 'Mailchimp or Sendinblue' },
                { name: 'Lead capture contact forms', status: true },
                { name: 'Marketing Automation Tools', status: true },
                { name: 'PPC Advertising Tools', status: false }
            ]
        },
        {
            name: 'Premium Integration',
            price: '35,000 EGP',
            color: 'red',
            features: [
                { name: 'Essential On-Page SEO', status: true },
                { name: 'XML Sitemap and Robots.txt Setup', status: true },
                { name: 'Structured Data (Schema.org)', status: true },
                { name: 'Google Analytics', status: true },
                { name: 'Traffic and Performance Monitoring', status: true },
                { name: 'Custom Dashboards', status: true },
                { name: 'E-commerce Tracking', status: true },
                { name: 'Heatmaps and Session Replay', status: true },
                { name: 'Advanced Reporting', status: true },
                { name: 'Social Media Tools', status: 'FB, IG, Twitter, LinkedIn + Hootsuite' },
                { name: 'Email Marketing Tools', status: 'Advanced with personalization' },
                { name: 'Dynamic lead capture contact forms', status: true },
                { name: 'Marketing Automation Complex Tools', status: true },
                { name: 'PPC Advertising Tools', status: true }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Digital Marketing Integration Packages</h2>
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
                                                    <>
                                                        <span className={styles.checkIcon}>
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        </span>
                                                        <div>
                                                            <div className={styles.featureValue}>{feature.status}</div>
                                                            {feature.name}
                                                        </div>
                                                    </>
                                                )}
                                                {typeof feature.status === 'boolean' && feature.name}
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

export default DigitalMarketingIntegrationSEOPackages;
