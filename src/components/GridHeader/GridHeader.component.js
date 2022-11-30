import { Link } from "react-router-dom";
import Navigator from "../Navigator/Navigator.component";

import styles from "./GridHeader.module.css";

function GridHeader() {
  return (
    <header className={styles.gridHeader}>
      <Link to="/">
        <img src="#" />
      </Link>
      <Link to="/">
        <h1>SteveFromTheOffice</h1>
      </Link>

      <Navigator />
    </header>
  );
}

export default GridHeader;
