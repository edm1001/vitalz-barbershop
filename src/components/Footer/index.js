import React from 'react';
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';

// import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
// import { FaFacebook } from '@fortawesome/free-solid-svg-icons';
// import { FaInstagram} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
        <section className='footer'>
            <div className='container' id='socials'>
                <div className='icons'>
                <a href='url()'>
                <FaFacebook/>
                </a>
                </div>
                <div>
               <a href='url()'>
                <FaInstagram/>
                @vitalcutz
                </a>
                </div>
                <div>
                (936) 228-9897
                </div>
                
                {/* add on click functionality to the vb website */}
            </div>
        </section>
    )
}
export default Footer;