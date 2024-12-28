import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF, faTwitter, faInstagram, faLinkedinIn,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">About Us</h5>
                            <p className="about-description">We are passionate about creating exceptional digital experiences that help businesses grow and succeed in the modern world.</p>
                            <div className="social-links">
                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#!" className="me-3"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href="#!"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="footer-link">Home</a></li>
                                <li><a href="/about" className="footer-link">About</a></li>
                                <li><a href="/clients" className="footer-link">Clients</a></li>
                                <li><a href="/services" className="footer-link">Services</a></li>
                                <li><a href="/contact" className="footer-link">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Services</h5>
                            <ul className="list-unstyled">
                                <li><a href="/#services" className="footer-link">Web Development</a></li>
                                <li><a href="/#services" className="footer-link">UI/UX Design</a></li>
                                <li><a href="/#services" className="footer-link">Mobile Apps</a></li>
                                <li><a href="/#services" className="footer-link">Digital Marketing</a></li>
                                <li><a href="/#services" className="footer-link">SEO Optimization</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p className="newsletter-description">Subscribe to our newsletter for updates and insights.</p>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0"> {currentYear} Your Company. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Made By <FontAwesomeIcon icon={faHeart} className="text-danger mx-1" /> Bonline</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
