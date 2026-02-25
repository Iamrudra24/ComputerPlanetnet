import React from 'react';
import { Users, Star, DollarSign, Headphones, Zap, CheckCircle } from 'lucide-react';
import './WhyChooseSection.css'; // ✅ only CSS import

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Highly skilled and certified technical professionals'
    },
    {
      icon: Star,
      title: 'Genuine Products',
      description: 'Only authentic products from authorized brands'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive prices with flexible payment options'
    },
    {
      icon: Headphones,
      title: 'Reliable Support',
      description: 'Dedicated after-sales support and maintenance'
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick response time and efficient service delivery'
    },
    {
      icon: CheckCircle,
      title: 'Trusted Partner',
      description: 'Trusted by businesses and individuals across Satna'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title display-large" style={{ color: 'white' }}>Why Choose Us</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle body-large">
            Your reliable technology partner in Satna
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon-bg">
                <reason.icon className="reason-icon" size={36} />
              </div>
              <h3 className="reason-title heading-3">{reason.title}</h3>
              <p className="reason-description body-small">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
