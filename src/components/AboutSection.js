import React from 'react';
import { Award, Users, Shield, TrendingUp } from 'lucide-react';
import './AboutSection.css'; // ✅ only CSS import

const AboutSection = () => {
  const highlights = [
    { icon: Award, label: 'Quality Products', value: '100%' },
    { icon: Users, label: 'Happy Clients', value: '10000+' },
    { icon: Shield, label: 'Trusted Service', value: '25+ Years' },
    { icon: TrendingUp, label: 'Growing Business', value: 'Since 2000' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-content">
          <div className="about-text" >
            <h2 className="section-title display-large">
              About Computer Planet Tech Solutions Pvt. Ltd.
            </h2>
             <div className="title-underline"></div>
            
            <p className="body-medium about-description"  style={{  textAlign: 'center'}}>
              Computer Planet Tech Solutions Pvt. Ltd. (CPTS) is a trusted IT and electronics 
              solutions provider based in Satna, Madhya Pradesh. We offer complete solutions 
              in computers, laptops, CCTV surveillance, networking, software and IT infrastructure 
              for homes, businesses and institutions.
            </p>
            
            <p className="body-medium about-description"  style={{  textAlign: 'center'}}>
              With quality products, expert service and reliable support, we ensure customer 
              satisfaction and long-term relationships. Our experienced technical team is 
              committed to delivering cutting-edge technology solutions tailored to your needs.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <item.icon className="highlight-icon" size={32} />
                  <div className="highlight-content">
                    <div className="highlight-value heading-2">{item.value}</div>
                    <div className="highlight-label body-small">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img 
              src="https://res.cloudinary.com/djh624fzu/image/upload/v1771859960/ChatGPT_Image_Feb_23_2026_08_47_55_PM_mmtefz.png"
              alt="Professional IT Team" 
              loading="lazy"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
