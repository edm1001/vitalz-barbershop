import React from "react";
import About from '../components/About';
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";


const Home = () => {
  return (  
    <main>
        <About></About>
        <Services></Services>
        <Gallery></Gallery>
        <Contact></Contact>

    </main>
    )
}
export default Home;