// Importing modules
import { useEffect, useState } from "react";
import styles from "../modules/MyAppointments.module.css";
import AppointmentCard from "../components/AppointmentCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../context/LoggedIn.jsx";

const Appointments = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(LoggedInContext);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn]);

  // Defining state
  const [myAppointments, setMyAppointments] = useState([]);

  // Fetching data from API
  useEffect(() => {
    axios.get("http://localhost:3000/appointments").then((response) => {
      setMyAppointments(response.data.data);
    });
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>My Appointments</h1>
      <div className={styles.newAppointment}>
        <p>
          Need a new appointment?
          <strong>
            <a href="/appointments/new">
              <br />
              Schedule one now!
            </a>
          </strong>
        </p>
      </div>
      <div className={styles.appointmentsContainer}>
        {myAppointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
