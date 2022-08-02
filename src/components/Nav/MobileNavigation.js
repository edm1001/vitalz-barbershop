import NavLinks from "./NavLinks";
import {FaBars} from "react-icons/fa"
import { useState } from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    return (
    <nav 
    className="MobileNavigation">
    <FaBars
    className="burger" size='40px' color="white" onClick={() => setOpen(!open)}
    />

    {open && <NavLinks/>}
    </nav>        
    
    );
}

export default MobileNavigation;
