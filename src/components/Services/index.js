import React from 'react';
import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import service01 from '../../assets/haircuts/haircut01.jpg';
import service02 from '../../assets/haircuts/haircut02.jpg';
import service03 from '../../assets/haircuts/haircut03.jpg';
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={service01} alt='service' className='sliderimg' onDragStart={handleDragStart} role="presentation" />,
  <img src={service02} alt='service' className='sliderimg' onDragStart={handleDragStart} role="presentation" />,
  <img src={service03} alt='service' className='sliderimg' onDragStart={handleDragStart} role="presentation" />,
];

function Services() {
// let history = useHistory();

    return (
        //create a pic that changes with the service line
        <section className='services' >
        
        <h1>Services</h1>
        <div className='coaster'>
        <AliceCarousel mouseTracking items={items} className='carousel' />
        </div>
        <div className='ui-grid-a'>
        <div className='ui-block-b'>
        <ul id='service'> 
        <li>Haircut - $30</li>
        <li>Edge up - $15</li>
        <li>Hot Towel Shave - $20</li>
        </ul>
        </div>
        <div className='ui-block-a'>
        <ul id='service'>
        <li>Haircut and Shave - $35</li>        
        <li>Head Shave - $30</li>
        <li>Kids 12 and Under - $25</li>
        </ul>
        </div>
        </div>
        <div className='appointment' >  
            <Link to="/login"> Book With Us! </Link> 
        </div>
        </section>
    )
}
export default Services;