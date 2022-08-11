import React from 'react';
import {bounce} from 'react-animations';

function About() {
    return (
        <section className="about" id='about'>
        <h1 id="about" style={bounce}>Our Purpose</h1>
        <div className='ourstory'>
          <p id='about-info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
            condimentum molestie. 
          </p>
        </div>
      </section>
    )
}
export default About;