import styles from "./GridLayout.module.scss";

function GridLayout(props) {
  return <div className={styles.gridLayout}>{props.children}</div>;
}

export default GridLayout;
