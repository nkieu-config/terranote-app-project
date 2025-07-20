import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.container}>
        <img src="/icon.png" alt="TerraPin logo" className={styles.logo} />
        <span className={styles.title}>TerraNote</span>
      </div>
    </Link>
  );
}

export default Logo;
