import React from 'react';
import { 
  Laptop, 
  Video, 
  Printer, 
  Wifi, 
  Battery, 
  Phone, 
  Clock, 
  Shield 
} from 'lucide-react';
import './ServicesSection.css'; // ✅ only CSS import

const ServicesSection = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Laptop & Desktop Sales',
      description: 'Complete sales and repair solutions for all brands of laptops and desktop computers'
    },
    {
      icon: Video,
      title: 'CCTV Systems',
      description: 'High-quality CCTV cameras for home, office and commercial security solutions'
    },
      {
  icon: Printer,
  title: 'Printers',
  description: 'All types of printers with sales, installation and support'
},
    {
      icon: Wifi,
      title: 'Networking Setup',
      description: 'Complete networking and router setup for homes, offices and enterprises'
    },
    {
      icon: Battery,
      title: 'UPS & Power Solutions',
      description: 'Power backup solutions to keep your systems running safely'
    },
  {
  icon: Phone,
  title: 'Telephone Instruments',
  description: 'Office and desk phones with clear voice quality'
},
    {
      icon: Clock,
      title: 'Time Attendance',
      description: 'Biometric time attendance machines and access control systems'
    },
    {
      icon: Shield,
      title: 'IT Security',
      description: 'Antivirus solutions and comprehensive IT security services'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title display-large" style={{ color: 'white' }}>Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle body-large">
            Comprehensive IT solutions for your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" size={40} />
              </div>
              <h3 className="service-title heading-3">{service.title}</h3>
              <p className="service-description body-small">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
