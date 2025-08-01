import styles from "../modules/AppointmentCard.module.css";
import axios from "axios";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className={styles.appointmentCard}>
      <h2>Appointment Details</h2>
      <p>
        <strong>Date:</strong> {appointment.date}
      </p>
      <p>
        <strong>Time: </strong>
        {appointment.time}
      </p>
      <p>
        <strong>Status: </strong>
        {appointment.status}
      </p>
      {appointment.status === "active" ? (
        <button
          onClick={() =>
            //Canceling the appointment
            axios.put(
              `http://localhost:3000/appointments/cancel/${appointment.id}`,
              {
                status: "cancelled",
              }
            )
          }
        >
          Cancel
        </button>
      ) : null}
    </div>
  );
};

export default AppointmentCard;
