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
  const { userID } = useContext(LoggedInContext);

  // Defining state
  const [myAppointments, setMyAppointments] = useState([]);

  const getAppointments = async () => {
    if (!userID) {
      navigate("/login");
    } else {
      axios
        .get(`http://localhost:3000/appointments/user/${userID}`)
        .then((response) => {
          setMyAppointments(response.data.data);
        });
    }
  };
  // Fetching data from API
  useEffect(() => {
    getAppointments();
  }, [navigate, userID]);

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
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onStatusChange={getAppointments}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
