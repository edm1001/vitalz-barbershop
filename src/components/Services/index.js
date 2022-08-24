import React from 'react';
import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import service01 from '../../assets/cover/WalkIn-Sign.png';
import service02 from '../../assets/team/crew01.jpg';
import service03 from '../../assets/haircuts/haircut03.jpg';
import Prices from '../../assets/cover/Service-Prices.jpg';

import Policy from '../../assets/cover/Shop-Policy.png';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={service01} alt='service' className='sliderimg' onDragStart={handleDragStart} role="presentation" />,
  <img src={service02} alt='service' className='sliderimg' id='shop-policy'onDragStart={handleDragStart} role="presentation"/>,
  <img src={service03} alt='service' className='sliderimg' onDragStart={handleDragStart} role="presentation" />,
];

function Services() {
    return (
        <section className='services' >
        
        <h1>Services</h1>
        <div className='coaster'>
        <AliceCarousel mouseTracking items={items} className='carousel' />
        </div>
        <div className='ui-grid-a'>
        <div className='ui-block-b'>
        <img src={Prices} alt='prices' className='prices' /> 
        </div>
        </div>
        <div className='appointment' >  
            <Link to="/login"> Book With Us! </Link> 
        </div>
        <img src={Policy} className='policy' alt='policy'
        />
        </section>
    )
}
export default Services;