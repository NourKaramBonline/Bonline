import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;
