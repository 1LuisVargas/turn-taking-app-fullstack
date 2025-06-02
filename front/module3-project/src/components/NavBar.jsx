import styles from "../modules/NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.container}>
            <a href="#">Home</a>
            <a href="#">Appointments</a>
            <a href="#">Login</a>
        </nav>
    );
};

export default NavBar;