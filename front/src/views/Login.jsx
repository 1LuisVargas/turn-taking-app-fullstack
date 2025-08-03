import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatingLogin } from "../helpers/validation";
import styles from "../modules/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedIn.jsx";
import { useContext, useEffect } from "react";

const Login = () => {
  const { loggedIn, setLoggedIn, setUserID } = useContext(LoggedInContext); //Getting logged global state
  const navigate = useNavigate(); //Adding navigation

  const handleOnSubmit = async (formData) => {
    //Defining handler
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );
      if (response.status === 200) {
        console.log(response.data);
        setLoggedIn(true); //Setting logged global state
        setUserID(response.data.user.id);
        localStorage.setItem("userID", response.data.token); //Saving user ID in local storage
        alert("User logged in successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };
  useEffect(() => {
    if (loggedIn) {
      navigate("/appointments"); //Sending to appointments page if successful login or user already logged in
    }
  } , [loggedIn, navigate]);

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validate={validatingLogin} //Validating
        onSubmit={async (values, { setSubmitting }) => {
          await handleOnSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className={styles.formContainer}>
            <label>Username:</label>
            <Field type="text" name="username" required />
            <ErrorMessage name="username" component="div" />

            <label>Password:</label>
            <Field type="password" name="password" required />
            <ErrorMessage name="password" component="div" />

            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>

      <p className={styles.registerLink}>
        Don't have an account?{" "}
        <a href="/register">
          <strong>Register</strong>
        </a>
      </p>
    </div>
  );
};

export default Login;
