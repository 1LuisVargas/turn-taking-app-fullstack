import styles from "../modules/AppointmentCard.module.css";
import axios from "axios";


const AppointmentCard = ({ appointment, onStatusChange }) => {
  //Defining cancel handler
  const handleCancel = () => {
    //Canceling the appointment
    axios
      .put(`http://localhost:3000/appointments/cancel/${appointment.id}`, {
        status: "cancelled",
      })
      .then((response) => {
        console.log("Appointment cancelled:", response.data);
        localStorage.removeItem("appointments"); //Clearing local storage to force update
        onStatusChange(); //Updating the status
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.appointmentCard}>
      <h3>Appointment Details</h3>
      <p>
        <strong>Date:</strong> {appointment.date.split("T")[0]}
      </p>
      <p>
        <strong>Time: </strong>
        {appointment.time}
      </p>
      <p>
        <strong>Status: </strong>
        {appointment.status}
      </p>
      {appointment.status === "Active" ? (
        <div>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
};

export default AppointmentCard;
