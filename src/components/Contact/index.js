import React from 'react';
import Map from '../../assets/large/vb-location.png';
import {Link} from 'react-router-dom';


function Contact() {
    return (
        <section className='contact' id='contact'>
        <h1> Location & Times</h1>
        <h3>Location</h3>
        <div className='contact-info'>
            <div>
            {/* href='https://www.google.com/maps/place/Vital+cuts/@30.2922935,-95.4690572,17z/data=!3m1!4b1!4m5!3m4!1s0x8647398b35ae632b:0x2ff55ee2515a672!8m2!3d30.2922935!4d-95.4690572' */}
            <a href='https://www.google.com/maps/place/Vital+cuts/@30.2922935,-95.4690572,17z/data=!3m1!4b1!4m5!3m4!1s0x8647398b35ae632b:0x2ff55ee2515a672!8m2!3d30.2922935!4d-95.4690572' >804 Gladstell St suite 130, Conroe, TX 77304</a>
            </div>
            <img src={Map} alt='map' style={{width:'80%'}}>
            </img>
            
        <h3>
            Times
            </h3>
            <p>
                Sun: Closed<br></br>
                Mon: 10am - 7pm<br></br>
                Tues: 10am - 7pm <br></br>
                Wed: 10am - 7pm  <br></br>
                Thurs: 9am - 8pm<br></br>
                Fri: 9am - 8pm <br></br>
                Sat: 8am - 3pm
            </p>
        </div>
        </section>
    )
}
export default Contact;