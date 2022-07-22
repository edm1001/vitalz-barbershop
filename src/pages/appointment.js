import React from "react";
import {ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';


// import {Link} from 'react-router-dom';

const Appointment = () => {

    return ( 
        <ScheduleComponent>
            <Inject services={[Day,Week, WorkWeek, Month, Agenda]}/> 
             </ScheduleComponent>
    
        )
}
export default Appointment;