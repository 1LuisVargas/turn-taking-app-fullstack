import styles from "../modules/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBarULContainer}>
        <h1>Appointment Scheduler</h1>
        <div className={styles.navBarLinks}>
          <Link to="/">Home</Link>
          <Link to="/appointments">My Appointments</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
