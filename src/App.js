import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Router>
        <Nav/>
        <div>
         <Routes>
         <Route
                path="/"
                element={<Home />}
              />
          {/* <Route
                path="/login"
                element={</>}
              />
          <Route
                path="/appointment"
                element={<Appointment/>}
              /> */}
          
         </Routes>
        </div>
        <Footer/>    
          </Router>


    </div>
  );
}

export default App;
