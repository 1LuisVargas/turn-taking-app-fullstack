import appointments from "../helpers/myAppointments";
import { useState } from "react";
import styles from "../modules/MyAppointments.module.css";
import AppointmentCard from "./AppointmentCard";

const Appointments = () => {
    const [MyAppointments, setMyAppointments] = useState([appointments]);
    console.log(MyAppointments);
    return (
        <div>
            <h1>My Appointments</h1>
            <div className={styles.container}>
                {MyAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
            </div>
        </div>
    );
};

export default Appointments;