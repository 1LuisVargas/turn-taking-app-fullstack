import styles from "../modules/NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBarULContainer}>
        <h1>Appointment Scheduler</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Appointments</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
