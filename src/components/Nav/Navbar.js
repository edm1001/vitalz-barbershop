import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import {Link} from "react-router-dom";

const Navbar = () =>  {
    return (
        <header className="nav-bar">
             <div className='box sb'>
            <Link to=''>
            <h1>Vital Cutz</h1>
            </Link>
          </div> 
        <div className="Navbar">
        <Navigation/>
        <MobileNavigation/>
        </div>
        </header>
    )
}
export default Navbar;