import React, { useState } from 'react';
import About from '../src/components/About';
import Gallery from '../src/components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Navbar from '../src/components/Nav';

function App() {
  return (
    <html>
      <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
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
    </html>
  );
}

export default App;
