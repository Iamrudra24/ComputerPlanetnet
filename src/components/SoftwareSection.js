import React from 'react';
import { FileText, Calculator, Shield, Package } from 'lucide-react';
import './SoftwareSection.css'; // ✅ only CSS import

const SoftwareSection = () => {
  const solutions = [
    {
      icon: Calculator,
      name: 'Tally Prime',
      description: 'Complete accounting and business management software for all types of businesses'
    },
    {
      icon: FileText,
      name: 'MARG Software',
      description: 'Comprehensive billing, inventory and business management solutions'
    },
    {
      icon: Shield,
      name: 'Antivirus Solutions',
      description: 'Licensed antivirus software from leading providers for complete protection'
    },
    {
      icon: Package,
      name: 'Business Software',
      description: 'Custom business accounting and inventory management software solutions'
    }
  ];

  return (
    <section className="software-section" id="software">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title display-large" style={{ color: 'white' }}>Software Solutions</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle body-large">
            Authorized partners for leading business software
          </p>
        </div>

        <div className="software-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="software-card">
              <div className="software-icon-wrapper">
                <solution.icon className="software-icon" size={48} />
              </div>
              <h3 className="software-name heading-3">{solution.name}</h3>
              <p className="software-description body-medium">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
