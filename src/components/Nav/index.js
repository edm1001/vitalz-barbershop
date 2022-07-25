import {useRef} from 'react';
import {Link}  from 'react-router-dom';
import { FaBars, FaTimes} from "react-icons/fa"
const Navbar = () =>  {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    
    return (
    <header className='navbar'>
        <div className='box sb'>
            <Link to=''>
            <h1>Vital Cutz</h1>
            </Link>
          </div>     

        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#about'>What We Do</a>
            <a href='/#contact'>Contact</a>
            <a href='/#services'>Services</a>
            <a href='/#contact'>Times and Location</a>
            <div>  
            <Link to="/appointment"> Book with Us!</Link> 
            </div>
            <div>  
            <Link to="/login"> Log In</Link> 
            </div>
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