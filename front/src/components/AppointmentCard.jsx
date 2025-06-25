import styles from "../modules/AppointmentCard.module.css";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className={styles.appointmentCard}>
      <h1>AppointmentCard</h1>
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
    </div>
  );
};

export default AppointmentCard;
