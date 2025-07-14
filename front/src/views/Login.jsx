import { Formik, Form, Field, ErrorMessage } from "formik";
import validatingLogin from "../helpers/validation";
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
      alert("Login failed");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validatingLogin} //Validating
        onSubmit={(values, { setSubmitting }) => {
          handleOnSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form className={styles.formContainer}>
          <label>Email:</label>
          <Field type="email" name="email" required/>
          <ErrorMessage name="email" component="div" />
          
          <label>Password:</label>
          <Field type="password" name="password" required/>
          <ErrorMessage name="password" component="div" />
          
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
