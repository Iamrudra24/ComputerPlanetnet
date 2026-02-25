import React from 'react';
import './ProductsSection.css';

const ProductsSection = () => {
 const brands = [
{ name: 'HP', 
  logo: 'https://cdn.worldvectorlogo.com/logos/hp-2.svg' 
},
  {
    name: 'Dell',
    logo: 'https://cdn.worldvectorlogo.com/logos/dell-1.svg'
  },
  {
    name: 'Lenovo',
    logo: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Acer',
    logo: 'https://cdn.worldvectorlogo.com/logos/acer-2.svg'
  },
  {
    name: 'Intel',
    logo: 'https://cdn.worldvectorlogo.com/logos/intel-6.svg'
  },
{
  name: 'Hikvision',
  logo: 'https://cdn.worldvectorlogo.com/logos/hikvision-1.svg'
},
{
  name: 'CP Plus',
  logo: 'https://brandlogos.net/wp-content/uploads/2024/01/cp_plus-logo_brandlogos.net_jrlqh-512x81.png'
},
{
  name: 'Frontech',
  logo: 'data:image/jpeg;base64,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'
}

];


  const productCategories = [
    {
      name: 'Laptops & Desktops',
      image: 'https://res.cloudinary.com/djh624fzu/image/upload/v1771054194/photo-1517336714731-489689fd1ca8_vdwbfh.jpg'
    },
   
{
  name: 'CCTV Cameras',
  image: 'https://res.cloudinary.com/djh624fzu/image/upload/v1771054235/photo-1681894414686-95a741b63189_hduge6.jpg'
},
{
  name: 'Printers & Scanners',
  image: 'https://res.cloudinary.com/djh624fzu/image/upload/v1771861385/Gemini_Generated_Image_i885uri885uri885_pxm4ju.png'
},
{
  name: 'UPS & Inverters',
  image: 'https://res.cloudinary.com/djh624fzu/image/upload/v1771861612/Gemini_Generated_Image_6zoouc6zoouc6zoo_vw8gx2.png'
},
    {
      name: 'Networking Devices',
      image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a'
    },
    {
      name: 'Computer Monitors',
      image: 'https://images.unsplash.com/photo-1588746363141-364bcdd1d04d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D'
    },
{
  name: 'WiFi Routers',
  image: 'https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm91dGVyfGVufDB8fDB8fHww'
}
,
    {
      name: 'Computer Accessories',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    }
  ];

  return (
    <section className="products-section" id="products">
      <div className="section-container">

        {/* HEADER */}
        <div className="section-header">
          <h2 style={{ color: 'white' }}>Products & Brands</h2>
           <div className="title-underline"></div>
          <p>Authorized dealers of leading technology brands</p>
        </div>

        {/* BRANDS */}
        <div className="brands-area">
          <h3 style={{ color: 'grey' , textAlign: 'center'}}>Brands We Deal In</h3>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div className="brand-card" key={index}>
                <img src={brand.logo} alt={brand.name} />
               
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="products-area">
          <h3 style={{ color: 'grey', textAlign: 'center' }}>Product Categories</h3>
          <div className="products-grid">
            {productCategories.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <h4>{product.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
