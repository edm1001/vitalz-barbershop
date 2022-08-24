import React from 'react';
import {bounce} from 'react-animations';


function About() {
    return (
        <section className="about" id='about'>
        <h1 id="about" style={bounce}>Our Purpose</h1>
        <div className='ourstory'>
          <p id='about-info'>
            At Vital Cutz we welcome everyone to a quality haircuts you deserve! <br/> With each haircut our certified barbers give effort and time to make sure you leave with a fresh haircut that everybody will appreciate.
          </p> 
        </div>
      </section>
    )
}
export default About;