import styles from "./GridFooter.module.css";

function GridFooter() {
  return (
    <footer className={styles.gridFooter}>
      <section>
        <h3>About</h3>
        <ul>
          <li>Sitemap</li>
        </ul>
      </section>
      <section>
        <h3>Connect</h3>
        <ul>
          <li>Discord</li>
          <li>LinkedIn</li>
        </ul>
      </section>
    </footer>
  );
}

export default GridFooter;
