import {Link} from "react-router-dom"

const NavLinks = (props) => {
    return (
    <ul className="navlinks">
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#'>Home</a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}> 
        {/* && is true then function that follows is true */}
        <a href='/#about'>What We Do</a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#contact'>Contact</a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#services'>Services</a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#contact'>Times and Location</a>
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <Link to="/appointment"> Book with Us!</Link>   
        </li>
        <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <Link to="/login"> Log In</Link> 
        </li>
        </ul>  
    )
}

export default NavLinks;