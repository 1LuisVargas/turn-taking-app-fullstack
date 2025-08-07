// Importing modules
import { useCallback, useEffect } from "react";
import styles from "../modules/MyAppointments.module.css";
import AppointmentCard from "../components/AppointmentCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../context/LoggedIn.jsx";
import { AppointmentsContext } from "../context/Appointments.jsx";

const Appointments = () => {
  const navigate = useNavigate(); //Adding navigation

  // Defining state
  const { userID } = useContext(LoggedInContext);
  const { appointments, setAppointments } = useContext(AppointmentsContext);

  const getAppointments = useCallback(async () => {
    //Checking if user is logged in
    if (!userID) {
      navigate("/login");
      return;
    }

    //Fetching data from local storage
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }

    // Fetching data from API
    try {
      axios
        .get(`http://localhost:3000/appointments/user/${userID}`)
        .then((response) => {
          setAppointments(response.data.data);
          localStorage.setItem(
            "appointments",
            JSON.stringify(response.data.data)
          ); //Saving appointments in local storage
        });
    } catch (error) {
      console.log(error);
    }
  }, [ navigate, userID, setAppointments]);

  // Fetching data from API
  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  return (
    <div>
      {appointments.length === 0 ? (
        <div className={styles.noAppointments}>
          <h2>No appointments found</h2>
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
      ) : (
        <div>
          <h2 style={{ textAlign: "center", margin: "20px" }}>
            My Appointments
          </h2>
          <div className={styles.appointmentsContainer}>
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onStatusChange={getAppointments}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
