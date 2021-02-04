import styles from "./general.module.css";
import LandingPage from "./components/pages/LandingPage/LandingPage";

function App() {
  return (
    <div className={styles.flexContainer}>
      <LandingPage/>
    </div>
  );
}

export default App;
