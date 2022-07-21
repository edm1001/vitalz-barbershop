import React from 'react';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Navbar from './components/Nav';
// import Appointment from './pages/appointment';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import Appointment from './pages/Appointment';
import Login from './pages/Login';

function App() {
  return (
      <div className="App">


      <header className="nav-bar">
        <div></div>
        <React.Fragment>
        <Navbar/>
        </React.Fragment>
        {/* <Route
                path="/login"
                element={<Login />}
              /> */}
      </header>
      <main>
        <Login></Login>
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
