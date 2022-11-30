import styles from "./GridMain.module.css";

function GridMain(props) {
  return <main className={styles.gridMain}>{props.children}</main>;
}

export default GridMain;
