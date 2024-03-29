import React from 'react';
import Map from '../../assets/logo/vb-location45.png';

function Contact() {
    return (
        <section className='contact'
       id='contact' >
        <h1>  Times & Location</h1>
        <div className='contact-info'>    
        

        <section className='shop-times'>
            <h3>Times</h3>
            <div className='daily-time'
            >
            {/* <img src={Background} alt='background' className='times-logo' /> */}
            <ul>               
                <li>Mon: 10am - 7pm</li>
                <li>Tues: 10am-7pm</li>
                <li>Wed: 10am - 7pm</li>
                <li>Thurs: 9am - 8pm</li>
            </ul>
            <div className='daily-time'>
            <ul>
                
                <li>Fri: 9am - 8pm</li>
                <li>Sat: 8am - 3pm</li>    
                <li>Sun: 11am - 3pm </li>            
            </ul>    
            </div>
            </div>
            </section> 
            
            
            <section className='shop-location' id='shop-location'>
            <h3>Location</h3> 
            <div className='location' id="location">
            <a href='https://www.google.com/maps/place/Vital+cuts/@30.2922935,-95.4690572,17z/data=!3m1!4b1!4m5!3m4!1s0x8647398b35ae632b:0x2ff55ee2515a672!8m2!3d30.2922935!4d-95.4690572' >804 Gladstell St suite 140, Conroe, TX 77304</a>
            </div>
            <div id='location'>
             <a href='https://youtube.com'>  
             Book With Us! 
             </a>
        </div>
            <div >
            <img id="map" src={Map} alt='map' style={{width:'80%'}}className='location-img'/>
           
            </div>
            </section>
        </div>
        </section>
    )
}
export default Contact;