//Importing modules
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../modules/NewAppointment.module.css";
import { useNavigate } from "react-router-dom";
import { validatingNewAppointment } from "../helpers/validation";
import { useContext } from "react";
import { LoggedInContext } from "../context/LoggedIn.jsx";

const NewAppointment = () => {
  const navigate = useNavigate(); //Adding navigation
  const { userID } = useContext(LoggedInContext); //Getting logged user ID

  const handleOnSubmit = async (formData) => {
    const appointmentData = {
      ...formData,
      userId: userID, //Adding the user ID to the appointment
    }

    console.log(appointmentData);

    //Defining handler
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        appointmentData
      );
      if (response.status === 201) {
        alert("Appointment scheduled successfully");
        navigate("/appointments"); //Sending to appointments if successful scheduling
      }
    } catch (error) {
      console.log(error);
      alert("Appointment scheduling failed");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Schedule New Appointment</h2>
      <Formik
        initialValues={{
          date: "",
          time: "",
        }}
        validate={validatingNewAppointment} //Validating the new appointment
        onSubmit={async (values, { setSubmitting }) => {
          await handleOnSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div className={styles.formGroup}>
              <label>Date:</label>
              <Field type="date" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <div className={styles.formGroup}>
              <label>Time:</label>
              <Field
                type="time"
                name="time"
                step="900"
                min="09:00"
                max="21:00"
              />
              <ErrorMessage name="time" component="div" className="error" />
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
              >
                {/* Disabled button if there are errors */}
                Schedule
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewAppointment;
