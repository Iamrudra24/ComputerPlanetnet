import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css'; // ✅ only CSS import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Laptop & Desktop Solutions',
    'CCTV Installation',
    'Printer Services',
    'Networking Setup',
    'Software Solutions',
    'IT Support'
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title heading-3">CPTS</h3>
            <p className="footer-description body-small">
              Computer Planet Tech Solutions Pvt. Ltd. - Your trusted IT and electronics 
              solutions provider in Satna, Madhya Pradesh.
            </p>
          
          </div>

          <div className="footer-column">
            <h4 className="footer-heading heading-3">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="footer-link body-small"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading heading-3">Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link body-small">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading heading-3">Contact Info</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <div>
                  <a href="tel:07672411329" className="footer-link body-small">07672-411329</a>
                  <a href="tel:9755058163" className="footer-link body-small">9755058163</a>
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <a href="mailto:cplanet.tspl@gmail.com" className="footer-link body-small">
                  cplanet.tspl@gmail.com
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span className="footer-link body-small">
                  Shop No. 2 & 3, R.S. Tower Circuit House Chowk, Satna, MP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright body-small">
            © {currentYear} Computer Planet Tech Solutions Pvt. Ltd. | All Rights Reserved
          </p>
          <p className="footer-credits body-muted">
            Designed with modern UI & smooth animations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
