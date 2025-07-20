import styles from "../modules/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBarULContainer}>
        <h1 >Appointment Scheduler</h1>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default NavBar;
