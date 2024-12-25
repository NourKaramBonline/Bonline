import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

const HostingPackages = () => {
    const packagesTwo = [
        {
            name: 'Basic Package',
            price: 'Approximately 25,000 EGP',
            features: [
                'Custom responsive design compatible with all devices',
                'Unlimited product listings',
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
                'Inventory management system',
                'Enhanced SEO optimization',
                'Integration with social media platforms',
                '3 months of post-launch support'
            ],
            recommended: false
        },
        {
            name: 'Standard Package',
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
                'Integration with social media platforms',
                'Free domain registration for 1 year',
                '3 months of post-launch support'
            ],
            unsupportedFeatures: [
                'Bespoke responsive design with advanced UI/UX elements',
                'Advanced shopping cart with personalized recommendations',
                'Integration with CRM and email marketing tools',
                'Training session on website management',
                '1-year hosting (50 GB SSD storage, unlimited bandwidth)',
                '6 months of post-launch support'
            ],
            recommended: true
        },
        {
            name: 'Premium Package',
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
            recommended: false
        }
    ];

    return (
        <div className="ecommerce-packages-section py-5">
            <div className="container">
                <h2 className="text-center mb-5">E-commerce Solutions Packages</h2>
                <p className="text-center mb-5">Choose the perfect package for your online business needs</p>
                
                <div className="row justify-content-center">
                    {packagesTwo.map((pkg, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className={`card package-card package-${index + 1} ${pkg.recommended ? 'recommended' : ''}`}>
                                {pkg.recommended && (
                                    <div className="recommended-badge">
                                        <FontAwesomeIcon icon={faStar} /> Most Popular
                                    </div>
                                )}
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-4">{pkg.name}</h3>
                                    <h4 className="price text-center mb-4">{pkg.price}</h4>
                                    <ul className="feature-list">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <FontAwesomeIcon icon={faCheck} className="me-2 text-success" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-primary w-100 mt-4">Get Started</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HostingPackages;
