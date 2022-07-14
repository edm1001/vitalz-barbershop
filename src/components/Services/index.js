import React from 'react';
// import Appointment from '../../pages/Appointment';
// import { useHistory } from 'react-router-dom';
// import {Link} from 'react-router-dom';

function Services() {
// let history = useHistory();

    return (
        <section className='services' >
        <h1>Services</h1>
        <ul id='services'> 
        <li>Haircut - $25</li>
        <li>Edge up - $12</li>
        <li>Hot Towel Shave - $20</li>
        <li>Haircut and Shave - $35</li>        
        <li>Head Shave - $30</li>
        <li>Kids 12 and Under - $20</li>
        </ul>
        <div className='appointment' id='appointment-btn'>
            <button 
            
            >Create Apppointment here</button>
        {/* on click make this take you to the appointment page */}
        </div>
        </section>
    )
}
export default Services;