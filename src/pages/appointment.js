import React from "react";

// import {ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';


// import {Link} from 'react-router-dom';

const Appointment = () => {

    return ( 
    <div className="appt-form">
        <form>
        <h4>Name:
            <input
            placeholder="Your Name"/>
        </h4>
        <h4>Choose a Barber: 
            <input 
            placeholder="span list of barber 
            jerry, vane, victor, dave
            "/>
        </h4>
        <h4>Contact:
            <input placeholder="Email/Number"/>
        </h4>
        <h4>Date: <br/>
            <input placeholder="span date of available dates"/>
        </h4>
        <h4>Time:  <br/>
            <input placeholder="span time appointments"/>
        </h4>
        </form>    
        <button className="submit-btn" type="submit">
        Book Your Appointment!
        </button>    
    </div>
    // make sure to send the appt time into the barbers info so they can see it!
    //make the appointments add 
        )
}
export default Appointment;