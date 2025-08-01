import styles from "../modules/Home.module.css";
import { useContext } from "react";
import { LoggedInContext } from "../context/LoggedIn.jsx";

const Home = () => {
  const { loggedIn } = useContext(LoggedInContext);

  return (
    <div className={styles.homeContainer}>
      <h1>Welcome</h1>
      <p>This is the home page for my restaurant.</p>
      {loggedIn ? null : ( //Only displaying if the user is not logged in
        <p>
          Please
          <a href="/login">
            <strong> log in </strong>
          </a>
          to review your appointments or create new ones.
        </p>
      )}
    </div>
  );
};

export default Home;
