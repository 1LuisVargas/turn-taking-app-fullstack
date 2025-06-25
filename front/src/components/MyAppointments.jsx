import appointments from "../helpers/myAppointments";
import { useState } from "react";
import styles from "../modules/MyAppointments.module.css";
import AppointmentCard from "./AppointmentCard";

const Appointments = () => {
    const [myAppointments, setMyAppointments] = useState(appointments);
    return (
        <div>
            <h1>My Appointments</h1>
            <div className={styles.appointmentContainer}>
                {myAppointments.map((appointment) => (
                    <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
            </div>
        </div>
    );
};

export default Appointments;