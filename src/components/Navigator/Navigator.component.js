import { Link } from "react-router-dom";
import styles from "./Navigator.module.css";

function Navigator() {
  return (
    <nav className={styles.navigator}>
      <Link to="/components">Components</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default Navigator;
