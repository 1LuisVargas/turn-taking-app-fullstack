import styles from "../modules/Home.module.css";
import MyAppointments from "../components/MyAppointments";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <MyAppointments />
    </div>
  );
};

export default Home;
