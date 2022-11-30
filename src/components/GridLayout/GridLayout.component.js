import GridHeader from "../GridHeader/GridHeader.component";
import GridBreadcrumbs from "../GridBreadcrumbs/GridBreadcrumbs.component";
import GridMain from "../GridMain/GridMain.component";
import GridFooter from "../GridFooter/GridFooter.component";

import styles from "./GridLayout.module.css";

function GridLayout(props) {
  return (
    <div className={styles.gridLayout}>
      <GridHeader />
      <GridMain>{props.children}</GridMain>
      <GridFooter />
    </div>
  );
}

export default GridLayout;
