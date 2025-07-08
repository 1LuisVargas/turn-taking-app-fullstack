import axios from "axios";
import { useState } from "react";

export const Register = () => {
  // Defining state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Defining handlers
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(registerData.name === "" || registerData.email === "" || registerData.password === "") return;
    axios.post("http://localhost:3000/users", registerData).then((response) => {
      try {
        alert("User registered successfully");
      } catch (error) {
        alert(error.message);
      }
    })
  };

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value, // Constantly updating the state
    });
  };

  // Rendering
  return (
    <form onSubmit={handleOnSubmit}>
      <h1>REGISTER</h1>
      <label>Name</label>
      <input
        type="text"
        value={registerData.name} // Binding the state
        name="name"
        placeholder="Name"
        onChange={changeHandler}
      />
      <label>Email</label>
      <input
        type="text"
        value={registerData.email} // Binding the state
        name="email"
        placeholder="Email"
        onChange={changeHandler}
      />
      <label>Password</label>
      <input
        type="password"
        value={registerData.password}
        name="password"
        placeholder="Password"
        onChange={changeHandler} // Binding the state
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
