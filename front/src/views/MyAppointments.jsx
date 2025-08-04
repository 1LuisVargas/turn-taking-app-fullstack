// Importing modules
import { useCallback, useEffect, useState } from "react";
import styles from "../modules/MyAppointments.module.css";
import AppointmentCard from "../components/AppointmentCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../context/LoggedIn.jsx";

const Appointments = () => {
  const navigate = useNavigate(); //Adding navigation

  // Defining state
  const { userID } = useContext(LoggedInContext);
  const [myAppointments, setMyAppointments] = useState([]);

  const getAppointments = useCallback(async () => {
    if (!userID) {
      navigate("/login");
      return;
    }
    try {
      axios
        .get(`http://localhost:3000/appointments/user/${userID}`)
        .then((response) => {
          setMyAppointments(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [navigate, userID]);

  // Fetching data from API
  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  return (
    <div>
      {myAppointments.length === 0 ? (
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
          <h2 style={{ textAlign: "center" , margin: "20px"}}>My Appointments</h2>
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
      )}
    </div>
  );
};

export default Appointments;
