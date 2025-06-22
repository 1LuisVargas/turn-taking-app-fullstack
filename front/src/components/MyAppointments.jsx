import appointments from "../helpers/myAppointments";
import { useState } from "react";

const Appointments = () => {
    const [myAppointments, setMyAppointments] = useState([appointments]);
    return (
        <div>
        </div>
    );
};

export default Appointments;