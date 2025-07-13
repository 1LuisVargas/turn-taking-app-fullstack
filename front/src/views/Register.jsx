import axios from "axios";
import { useState } from "react";
import styles from "../modules/Register.module.css";
import validation from "../helpers/validation";
import { Formik } from "formik";

const Register = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) errors.username = "Username is required";
        if (!values.email) errors.email = "Email is required";
        if (!values.password) errors.password = "Password is required";
        return errors;
      }}
      onSubmit={(values) => {
        axios.post("http://localhost:3000/users", values).then((response) => {
          try {
            alert("User registered successfully");
          } catch (error) {
            alert(error.message);
          }
        });
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className={styles.formContainer}>
          <h1>REGISTER</h1>
          <div className={styles.inputContainer}>
            <label>Name</label>
            <input
              type="text"
              value={props.values.username} // Binding the state
              name="username"
              placeholder="Username"
              required
              onChange={props.handleChange}
            />
            {props.errors.username && <p>{props.errors.username}</p>}
          </div>
          <div className={styles.inputContainer}>
            <label>Email</label>
            <input
              type="text"
              value={props.values.email} // Binding the state
              name="email"
              placeholder="Email"
              required
              onChange={props.handleChange}
            />
            {props.errors.email && <p>{props.errors.email}</p>}
          </div>
          <div className={styles.inputContainer}>
            <label>Password</label>
            <input
              type="password"
              value={props.values.password} // Binding the state
              name="password"
              placeholder="Password"
              required
              onChange={props.handleChange}
            />
            {props.errors.password && <p>{props.errors.password}</p>}
          </div>
          <button>Register</button>
        </form>
      )}
    </Formik>
  );
};

export default Register;
