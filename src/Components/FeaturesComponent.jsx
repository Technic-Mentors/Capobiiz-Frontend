import {  Inventory2Outlined, ShoppingCartCheckout, Warehouse, Loyalty, CurrencyExchange, GroupAdd } from '@mui/icons-material';
import { css } from '@mui/styled-engine';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {
//   Inventory2Outlined,
//   AddShoppingCartOutlined,
//   DonutSmallOutlined,
//   InventoryOutlined,
//   BadgeOutlined,
//   FilterListOffOutlined,
// } from '@mui/icons-material';

function FeaturesComponent() {
  const Features = [
    {
      id: 1,
      icon: <Inventory2Outlined />,
      title: 'Inventory Management',
      description: 'Efficiently track and manage your stock levels with our comprehensive Inventory Management system.',
    },
    {
      id: 2,
      icon: <ShoppingCartCheckout />,
      title: 'Sales & Purchase Management',
      description: 'Streamline your transactions with our integrated Sales & Purchase Management tools.'
    },
    {
      id: 3,
      icon: <Warehouse />,
      title: 'Multi Warehouse Management',
      description: 'Easily oversee and control inventory across multiple locations with our Multi Warehouse Management feature.',
    },
    {
      id: 4,
      icon: <Loyalty />,
      title: 'Products & Production Management',
      description: 'Optimize your product lifecycle and production processes with our Products & Production Management system.',
    },
    {
      id: 5,
      icon: <CurrencyExchange />,
      title: 'Trading Management',
      description: 'Enhance your trading operations with our robust Trading Management capabilities.',
    },
    {
      id: 6,
      icon: <GroupAdd />,
      title: 'Accounts Management',
      description: 'Simplify your financial processes with our comprehensive Accounts Management system'}
  ];

  const [featuresData, setFeaturesData] = useState(Features);

  return (
    <div>
      <section >
        <div className='container mt-5'>
          <div className='row d-flex justify-content-center '>
            <div className='p-2 mt-4 mb-4 text-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <h6 className="subtitle">Features Showcase</h6>
              <h2 className="main-heading">Harmonizing Brilliance In Our POS Software</h2>
            </div>
            {featuresData.map((curElem) => {
              const { id, icon, title, description } = curElem;
              return (
                <div key={id} className='col-md-4 col-12 features-col mb-4 d-flex align-items-stretch' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <div className='card features-card'>
                    <div className='card-content'>
                     {/* <span style={{color: 'var(--secondary-color)'}}> {icon}</span> */}
                     {React.cloneElement(icon, { style: { color: 'var(--secondary-color)', fontSize: '35px' }, className: 'features-icons' })}
                      <h2 className='mt-3'> {title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className='mb-5 mt-4 text-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <Link to='/pos-features'>
              <button className="site-buttons">View All Features <span>&rarr;</span></button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesComponent;
