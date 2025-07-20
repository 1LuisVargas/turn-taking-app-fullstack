import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatingLogin } from "../helpers/validation";
import styles from "../modules/Login.module.css";
import axios from "axios";

const Login = () => {
  const handleOnSubmit = async (formData) => {
    //Defining handler
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );
      if (response.status === 200) {
        alert("User logged in successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

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

            <button type="submit" disabled={isSubmitting || errors}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
