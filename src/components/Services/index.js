import React from 'react';
import {Link} from 'react-router-dom';
// import Appointment from '../../pages/Appointment';
// import { useHistory } from 'react-router-dom';
// import {Link} from 'react-router-dom';

function Services() {
// let history = useHistory();

    return (
        //create a pic that changes with the service line
        <section className='services' id='services' >
        <h1>Services</h1>
        <ul id='service'> 
        <li>Haircut - $30</li>
        <li>Edge up - $15</li>
        <li>Hot Towel Shave - $20</li>
        <li>Haircut and Shave - $35</li>        
        <li>Head Shave - $30</li>
        <li>Kids 12 and Under - $25</li>
        </ul>
        <div className='appointment' >  
            <Link to="/login"> Book With Us! </Link> 
        </div>
        </section>
    )
}
export default Services;