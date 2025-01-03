import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import styles from './EcommercePackages.module.css';

const DigitalMarketingIntegrationSEOPackages = () => {
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
            name: 'Basic Integration',
            price: '10,000 EGP',
            color: 'blue',
            features: [
                { name: 'Essential On-Page SEO', status: true },
                { name: 'XML Sitemap and Robots.txt Setup', status: true },
                { name: 'Basic Analytics Tools', status: 'Google Analytics, Search Console' },
                { name: 'Traffic Monitoring', status: true },
                { name: 'Social Media Integration', status: 'Facebook or Instagram' },
                { name: 'Basic Email Marketing', status: 'Basic subscription form' },
                { name: 'Standard Contact Forms', status: true },
                { name: 'Structured Data (Schema.org)', status: false },
                { name: 'Custom Dashboards', status: false },
                { name: 'E-commerce Tracking', status: false },
                { name: 'Heatmaps and Session Replay', status: false },
                { name: 'Advanced Reporting', status: false },
                { name: 'Marketing Automation', status: false },
                { name: 'PPC Advertising', status: false }
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
                { name: 'Basic Analytics Tools', status: 'GA, Search Console, Bing Tools' },
                { name: 'Traffic Monitoring', status: true },
                { name: 'Social Media Integration', status: 'Facebook, Instagram, Twitter' },
                { name: 'Email Marketing', status: 'Mailchimp or Sendinblue' },
                { name: 'Contact Forms', status: 'HubSpot or Zoho CRM forms' },
                { name: 'Marketing Automation', status: 'Basic workflows' },
                { name: 'Custom Dashboards', status: false },
                { name: 'E-commerce Tracking', status: false },
                { name: 'Heatmaps and Session Replay', status: false },
                { name: 'Advanced Reporting', status: false },
                { name: 'PPC Advertising', status: false }
            ]
        },
        {
            name: 'Premium Integration',
            price: '35,000 EGP',
            color: 'red',
            features: [
                { name: 'Essential On-Page SEO', status: true },
                { name: 'XML Sitemap and Robots.txt Setup', status: true },
                { name: 'Structured Data (Schema.org)', status: 'Advanced with Rich Snippets' },
                { name: 'Analytics Tools', status: 'GA4, Tag Manager, Bing Tools' },
                { name: 'Traffic Monitoring', status: true },
                { name: 'Custom Dashboards', status: 'Custom GA4 Dashboards' },
                { name: 'E-commerce Tracking', status: true },
                { name: 'Heatmaps and Session Replay', status: 'Hotjar or Microsoft Clarity' },
                { name: 'Advanced Reporting', status: true },
                { name: 'Social Media Integration', status: 'FB, IG, Twitter, LinkedIn + Hootsuite' },
                { name: 'Email Marketing', status: 'Advanced with personalization' },
                { name: 'Contact Forms', status: 'Salesforce or HubSpot CRM' },
                { name: 'Marketing Automation', status: 'Complex workflows' },
                { name: 'PPC Advertising', status: 'Google Ads, Facebook Ads' }
            ]
        }
    ];

    return (
        <div className={styles.packagesContainer}>
            <div className="container py-5">
                <h2 className={styles.sectionTitle}>Digital Marketing Integration & SEO Packages</h2>
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
