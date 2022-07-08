import {useRef} from 'react';
import { FaBars, FaTimes} from "react-icons/fa"
import '../../../src/'
//import logo icon
function Navbar ()  {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
    <header className='navbar'>
        <h3>Logo</h3>     

        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#about'>What We Do</a>
            <a href='/#contact'>Contact</a>
            <a href='/#services'>Services</a>
            <a href='/#appointment'>Appointment</a>
            <a href='/#contact'>Times and Location</a>         
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaTimes/>
        </button>
        </nav>           
        <button className='nav-btn' onClick={showNavBar}>
            <FaBars />
        </button>
        </header>
    )
}
export default Navbar;