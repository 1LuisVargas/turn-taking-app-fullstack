import styles from "../modules/NavBar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../context/LoggedIn.jsx";

const NavBar = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  return (
    <header>
      <nav className={styles.navBarULContainer}>
        <h1>Appointment Scheduler</h1>
        <div className={styles.navBarLinks}>
          <Link to="/">Home</Link>
          {loggedIn ? null : <Link to="/register">Register</Link>}
          {loggedIn ? null : <Link to="/login">Login</Link>}
          {loggedIn ? <Link to="/appointments">My Appointments</Link> : null}
          {loggedIn ? (
            <Link to="/appointments/new">New Appointment</Link>
          ) : null}
          {loggedIn ? (
            <Link to="/">
              <button
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textDecoration: "none",
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: "0",
                  margin: "0",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
                onClick={() => setLoggedIn(false)} //Setting logged global state
              >
                Logout
              </button>
            </Link>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
