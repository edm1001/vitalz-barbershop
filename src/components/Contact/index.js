import React from 'react';
import Map from '../../assets/logo/vb-location.png';
import Background from '../../assets/logo/vb-logo.png'


function Contact() {
    return (
        <section className='contact'
        >
        <h1> Location & Times</h1>
        <div className='contact-info'>    
        <h3>Times</h3>
        <section className='shop-times'>
            <div className='daily-time'>
            <img src={Background} alt='background' className='times-logo' />
            <ul>
                <li>Sun: Closed</li>
                <li>Mon: 10am - 7pm</li>
                <li>Tues: 10am-7pm</li>
                <li>Wed: 10am - 7pm</li>
            </ul>
            <div className='daily-time'>
            <ul>
                <li>Thurs: 9am - 8pm</li>
                <li>Fri: 9am - 8pm</li>
                <li>Sat: 8am - 3pm</li>    
            </ul>    
            </div>
            </div>
            </section> 
            
            <h3>Location</h3>
            <section className='shop-times'> 
            <div className='location' id="location">
            <a href='https://www.google.com/maps/place/Vital+cuts/@30.2922935,-95.4690572,17z/data=!3m1!4b1!4m5!3m4!1s0x8647398b35ae632b:0x2ff55ee2515a672!8m2!3d30.2922935!4d-95.4690572' >804 Gladstell St suite 130, Conroe, TX 77304</a>
            </div>
            <div className='location'>
            <img src={Map} alt='map' style={{width:'80%'}}>
            </img>
            </div>
            </section>
        </div>
        </section>
    )
}
export default Contact;