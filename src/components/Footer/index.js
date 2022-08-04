import React from 'react';
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';



function Footer() {
    return (
        <section className='footer'>
            <div className='container' id='socials'>
                <div className='icons'>
                <a href='https://www.facebook.com/vitalcutztexas'>
                <FaFacebook
  color='darkgrey' size='40px'
                />
                </a>
                </div>
                <div>
               <a href='https://www.instagram.com/vitalcutz/'>
                <FaInstagram 
                color='darkgrey' size='40px'
                />
                </a>
                </div>
                </div>
                <div className='number'>
                <h5>(936) 228-9897</h5>
                </div>
            
        </section>
    )
}
export default Footer;