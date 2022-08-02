import NavLinks from "./NavLinks";
import {FaBars} from "react-icons/fa"
import {GrFormClose} from "react-icons/gr";
import { useState } from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    
    const burgerIcon = <FaBars
    className="burger" size='40px' color="white" onClick={() => setOpen(!open)}
    />;
    const closeIcon = <GrFormClose
    className="burger" size='40px' color="white" onClick={() => setOpen(!open)}
    />;
    const closeMobileMenu = () => setOpen(false);

    return (
    <nav 
    className="MobileNavigation">
    {open ? closeIcon : burgerIcon }
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>        
    
    );
}

export default MobileNavigation;
