
import './App.css';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import SoftwareSection from './components/SoftwareSection';
import WhyChooseSection from './components/WhyChooseSection';



function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <SoftwareSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
   </>
  );
}

export default App;
