import styles from "../modules/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome</h1>
      <p>This is the home page for my restaurant. Please log in to review your appointments or create new ones.</p>
    </div>
  );
};

export default Home;
