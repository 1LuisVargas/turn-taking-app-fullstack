import { useState } from "react";
import axios from "axios";
import styles from "../modules/Login.module.css";
import validation  from "../helpers/validation";

export const Login = () => {
  //Defining states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Email is required",
    password: "Password is required",
  });

  //Defining handlers
  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value, //Updating the state
    });

    setErrors(validation(e.target.name, e.target.value));//Validating
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/login", loginData).then((response) => {
      try {
        alert("User logged in successfully");
      } catch (error) {
        alert(error.message);
      }
    });
  };

  //Rendering
  return (
    <form onSubmit={handleOnSubmit}>
      <h1>LOGIN</h1>
      <label>Email</label>
      <input
        type="text"
        name="email"
        onChange={console.log("Changing:")}
        value={loginData.email} // Binding the state
        required
        placeholder="Email"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={changeHandler}
        value={loginData.password} // Binding the state
        required
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
