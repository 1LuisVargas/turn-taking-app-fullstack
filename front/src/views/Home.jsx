import NavBar from "../components/NavBar";
import styles from "../modules/Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar/>
            <h1>Home</h1>
        </div>
    )
}

export default Home;