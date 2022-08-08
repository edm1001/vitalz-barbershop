import React from "react";
import About from '../components/About';
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
// import Particle from "../components/particleBackground"

const Home = () => {
  return (  
    <main>
        <About>
        </About>
        <Services></Services>
        <Gallery></Gallery>
        <Contact>
        </Contact>
        {/* add particles to the div section */}
    </main>
    
    )
}
export default Home;