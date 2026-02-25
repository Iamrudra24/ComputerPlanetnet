import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSection.css'; // ✅ only CSS import

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    image: "https://res.cloudinary.com/djh624fzu/image/upload/v1771051105/ChatGPT_Image_Feb_14_2026_12_08_07_PM_iismzj.png",
    title: 'Complete Electronics & IT Solutions',
    subtitle: 'Computers • Laptops • Accessories'
  },
  {
    image: "https://res.cloudinary.com/djh624fzu/image/upload/v1771050705/ChatGPT_Image_Feb_11_2026_09_29_32_PM_jfr35p.png",
    title: 'Advanced CCTV & Security Systems',
    subtitle: 'Home • Office • Industrial Surveillance'
  },
  {
    image: "https://res.cloudinary.com/djh624fzu/image/upload/v1771055843/ChatGPT_Image_Feb_14_2026_01_26_59_PM_nekufw.png",
    title: 'Networking & Office Setup',
    subtitle: 'Routers • Servers • Structured Cabling'
  },
  {
    image: "https://res.cloudinary.com/djh624fzu/image/upload/v1771049747/ChatGPT_Image_Feb_14_2026_11_44_26_AM_q4rlsy.png",
    title: 'Trusted Electronics Partner',
    subtitle: 'Sales • Service • Support • Repairs'
  }
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title display-huge">
            Your Trusted IT & Security Solutions Partner
          </h1>
          <p className="hero-subtitle body-large">
            Computers • CCTV • Networking • Software • Repairs
          </p>
          <div className="hero-cta">
            <a href="#contact" onClick={scrollToContact} className="btn-primary">
              Get a Quote
            </a>
            <a href="#contact" onClick={scrollToContact} className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <button className="slider-control prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={32} />
      </button>
      <button className="slider-control next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={32} />
      </button>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
