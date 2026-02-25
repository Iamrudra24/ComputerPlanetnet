import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Software', href: '#software' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`dark-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        
        {/* LEFT */}
        <div className="logo-container">
          <a href="#home" className="company-logo">
            <img src='https://res.cloudinary.com/djh624fzu/image/upload/v1772006697/ChatGPT_Image_Feb_23_2026_08_21_20_PM_eml8qs.png' alt="Logo" className="navbar-logo" />
            <span className="logo-text">Computer Planet</span>
          </a>
        </div>

        {/* CENTER */}
        <nav className="desktop-nav">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="dark-nav-link">{item.label}</a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="call-button">
          <a href="tel:07672411329" className="btn-primary">
            <Phone size={18} />
            <span>07672-411329</span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="dark-nav-link">{item.label}</a>
          ))}
          <a href="tel:07672411329" className="btn-primary">Call Now</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;