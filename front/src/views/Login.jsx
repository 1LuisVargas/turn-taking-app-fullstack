import { useState } from "react";

export const Login = () => {
  //Defining state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //Defining handlers
  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value, //Updating the state
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
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
        placeholder="Email"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={changeHandler}
        value={loginData.password} // Binding the state
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
