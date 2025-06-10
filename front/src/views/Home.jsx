import NavBar from "../components/NavBar";
import styles from "../modules/Home.module.css";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <h1 className={styles.container}>Home</h1>
        </div>
    )
}

export default Home;