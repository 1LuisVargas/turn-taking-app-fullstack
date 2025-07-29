import Home from "./views/Home";
import NavBar from "./components/NavBar";
import Login from "./views/Login";
import Register from "./views/Register";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";
import MyAppointments from "./views/MyAppointments";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
