import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatingRegister } from "../helpers/validation";
import styles from "../modules/Register.module.css";
import axios from "axios";

const Register = () => {
  const handleOnSubmit = async (formData) => {
    //Defining handler
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        formData
      );
      if (response.status === 201) {
        alert("User registered successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          birthday: "",
          Dni: "",
          password: "",
        }}
        validate={validatingRegister} //Validating
        onSubmit={async (values, { setSubmitting }) => {
          await handleOnSubmit(values);
          setSubmitting(false); //Indicating that the form is not being submitted
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className={styles.formContainer}>
            <label>Username:</label>
            <Field type="text" name="username" required />
            <ErrorMessage name="username" component="div" />

            <label>Name:</label>
            <Field type="text" name="name" required />
            <ErrorMessage name="name" component="div" />

            <label>Email:</label>
            <Field type="text" name="email" required />
            <ErrorMessage name="email" component="div" />

            <label>Birthdate:</label>
            <Field type="text" name="birthdate" required />
            <ErrorMessage name="birthdate" component="div" />

            <label>Dni:</label>
            <Field type="text" name="Dni" required />
            <ErrorMessage name="Dni" component="div" />

            <label>Password:</label>
            <Field type="password" name="password" required />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting || errors.email}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
