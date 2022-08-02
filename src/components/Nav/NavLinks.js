import {Link} from "react-router-dom"

const NavLinks = () => {
    return (
    <ul className="navlinks">
        <li>
        <a href='/#'>Home</a>
        </li>
        <li>
        <a href='/#about'>What We Do</a>
        </li>
        <li>
        <a href='/#contact'>Contact</a>
        </li>
        <li>
        <a href='/#services'>Services</a>
        </li>
        <li>
        <a href='/#contact'>Times and Location</a>
        </li>
        <li>
        <Link to="/appointment"> Book with Us!</Link>   
        </li>
        <li>
        <Link to="/login"> Log In</Link> 
        </li>
        </ul>  
    )
}

export default NavLinks;