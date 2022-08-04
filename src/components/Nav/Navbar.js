import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo/vb-logo.png";

const Navbar = () =>  {
    return (
        <header className="nav-bar">
             <div className="nav-logo">
            <Link to=''>
              <img src={Logo}alt="logo" className="navbar-logo"></img>
            </Link>
            
        <div className="Navbar">
        <Navigation/>
        <MobileNavigation/>
        </div>
        </div>
        </header>
    )
}
export default Navbar;