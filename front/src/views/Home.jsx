import NavBar from "../components/NavBar";
import styles from "../modules/Home.module.css";
import MyAppointments from "../components/MyAppointments";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar/>
            <h1>Home</h1>
            <MyAppointments/>
        </div>
    )
}

export default Home;