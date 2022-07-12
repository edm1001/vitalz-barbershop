import React from 'react';
import About from '../src/components/About';
import Gallery from '../src/components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Navbar from './components/Nav/navbar';
// import Appointment from './pages/appointment';

// import { Route } from 'react-router-dom';

import Appointment from './pages/Appointment';


function App() {
  return (
    
      <div className="App">


      <header className="nav-bar">
        <div></div>
        <React.Fragment>
        <Navbar/>
        </React.Fragment>
      </header>
      <main>
        <About></About>
        <Services></Services>
        <Gallery></Gallery>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
