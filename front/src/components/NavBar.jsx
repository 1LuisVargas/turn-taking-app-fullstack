import styles from "../modules/NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.container}>
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
