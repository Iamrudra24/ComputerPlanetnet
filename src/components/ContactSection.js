import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Navigation } from 'lucide-react';
import { toast } from 'sonner';
import './ContactSection.css';

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ BACKEND CONNECTED
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        toast.error(data.error || "Failed to send email");
      }

    } catch (error) {
      toast.error("Server not responding");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Contact Numbers',
      details: ['07672-411329', '9755058163', '9425426325', '9424721991'],
      link: 'tel:07672411329'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['cplanet.tspl@gmail.com'],
      link: 'mailto:cplanet.tspl@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: [
        'Shop No. 2 & 3, R.S. Tower',
        'Circuit House Chowk',
        'Satna, Madhya Pradesh, India'
      ],
      link: 'https://www.google.com/maps/search/Shop+No.+2+%26+3,+R.S.+Tower,+Circuit+House+https://www.google.com/maps/place/Computer+Planet+Tech+Solutions+Pvt+Ltd/@24.5740002,80.8303072,17z/data=!3m1!4b1!4m6!3m5!1s0x39847f28958be359:0xca0b200da264fa1d!8m2!3d24.5740002!4d80.8328821!16s%2Fg%2F11mrll_x8n?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3DChowk,+Satna,+Madhya+Pradesh,+India/@24.5752755,80.8025128,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D'
    }
  ];



  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        {/* HEADER */}
        <div className="section-header">
          <h2 className="section-title display-large" style={{ color: 'white' }}>
            Contact Us
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle body-large">
            Get in touch with us for all your IT needs
          </p>
        </div>

        <div className="contact-content">

          {/* CONTACT INFO */}
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <info.icon className="contact-icon" size={32} />
                </div>

                <h3 className="contact-card-title heading-3">
                  {info.title}
                </h3>

                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact-detail body-medium">
                      {detail}
                    </p>
                  ))}
                </div>

                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link body-small"
                >
                  {info.icon === Phone
                    ? 'Call Now'
                    : info.icon === Mail
                    ? 'Send Email'
                    : 'View on Map'}
                </a>
              </div>
            ))}
          </div>

          {/* MAP + FORM */}
          <div className="map-form-container">

            {/* GOOGLE MAP */}
         {/* GOOGLE MAP */}
<div className="map-wrapper">




<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.4401916502034!2d80.83288209999999!3d24.5740002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f28958be359%3A0xca0b200da264fa1d!2sComputer%20Planet%20Tech%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1772005271391!5m2!1sen!2sin"
  width="600"
  
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Google Map Location"
/>

  {/* ✅ OVERLAY DIRECTION BUTTON */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Computer+Planet+Tech+Solutions+Pvt+Ltd,+Circuit+House+Chowk,+Satna,+Madhya+Pradesh"
    target="_blank"
    rel="noopener noreferrer"
    className="direction-btn"
  >
    <Navigation size={18} />
    Get Directions
  </a>

</div>

            {/* CONTACT FORM */}
            <div className="contact-form-wrapper">
              <h3 className="form-title heading-2">
                Send us an Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="contact-form">

                <div className="form-group">
                  <label className="form-label body-small">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label body-small">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label body-small">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label body-small">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary submit-button"
                  disabled={isSubmitting}
                >
                  <MessageSquare size={20} />
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>

              </form>
            </div>

          </div>
        </div>

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/919755058163"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <MessageSquare size={28} />
        </a>

      </div>
    </section>
  );
};

export default ContactSection;