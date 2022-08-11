import React from "react";
import About from '../components/About';
import Services from "../components/Services";
import Gallery from "../components/Gallery/index";
import Contact from "../components/Contact";
import Review from "../components/Review";

const Home = () => {
  return (  
    <main>
        <About>
        </About>
        <Services></Services>
        <Gallery></Gallery>
        <Contact>
        </Contact>
        <Review/>
    </main>
    
    )
}
export default Home;