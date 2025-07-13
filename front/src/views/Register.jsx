import axios from "axios";
import { useState } from "react";
import styles from "../modules/Register.module.css";
import validation from "../helpers/validation";

export const Register = () => {
  // Defining states
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Username is required",
    email: "Email is required",
    password: "Password is required",
  });

  // Defining handlers
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      registerData.username === "" ||
      registerData.email === "" ||
      registerData.password === ""
    )
      return;
    axios.post("http://localhost:3000/users", registerData).then((response) => {
      try {
        alert("User registered successfully");
      } catch (error) {
        alert(error.message);
      }
    });
  };

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value, // Constantly updating the state
    });

    setErrors(validation(e.target.username, e.target.value)); // Validating
  };

  // Rendering
  return (
    <form onSubmit={handleOnSubmit}>
      <h1>REGISTER</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={registerData.username} // Binding the state
          name="username"
          placeholder="Username"
          required
          onChange={changeHandler}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={registerData.email} // Binding the state
          name="email"
          placeholder="Email"
          required
          onChange={changeHandler}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={registerData.password}
          name="password"
          placeholder="Password"
          required
          onChange={changeHandler} // Binding the state
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button>Register</button>
    </form>
  );
};

export default Register;
