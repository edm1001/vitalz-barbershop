import {Link} from "react-router-dom"
import { motion } from "framer-motion";

const NavLinks = (props) => {
const animateFrom = {opacity: 0, y:-40}
const animateTo = {opacity: 1, y:0}

    return (
    <ul className="navlinks">
        <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.05}}
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#'>Home</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.10}}        
        onClick={()=> props.isMobile && props.closeMobileMenu()}> 
        {/* && is true then function that follows is true */}
        <a href='/#about'>What We Do</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.20}}        
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#contact'>Contact</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.30}}        
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#services'>Services</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.40}}        
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <a href='/#contact'>Times and Location</a>
        </motion.li>
        <motion.li 
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.50}}        
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <Link to="/appointment"> Book with Us!</Link>   
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:0.60}}         
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
        <Link to="/login"> Log In</Link> 
        </motion.li>
        </ul>  
    )
}

export default NavLinks;