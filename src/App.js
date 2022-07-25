import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Appointment from './pages/Appointment'
// import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';

function App() {
  return (
      <div className="App">
        <Router>
        <Navbar/>
        <div>
         <Routes>
         <Route
                path="/"
                element={<Home />}
              />
          <Route
                path="/login"
                element={<Login />}
              />
          <Route
                path="/appointment"
                element={<Appointment/>}
              />
          
         </Routes>
        </div>

        <Footer/>    
          </Router>


        {/* <Route
                path="/login"
                element={<Login />}
              /> */}
        {/* <Login></Login>
        <About></About>
        <Services></Services>
        <Gallery></Gallery>
        <Contact></Contact> */}

        {/* CREATE ROUTES FOR THE HOME APPOINTMENT AND LOGIN PAGE */}
    </div>
  );
}

export default App;
