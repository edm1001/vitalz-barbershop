import React from 'react';
import {Link} from 'react-router-dom';
// import Appointment from '../../pages/Appointment';
// import { useHistory } from 'react-router-dom';
// import {Link} from 'react-router-dom';

function Services() {
// let history = useHistory();

    return (
        //create a pic that changes with the service line
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
        <div className='appointment' >  
            <Link to="/login"> Make a Reservation</Link> 
        </div>
        </section>
    )
}
export default Services;