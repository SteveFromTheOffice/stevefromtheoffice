import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.component";
import styles from "./ComponentViewer.module.css";

function ComponentViewer(props) {
  //const [component, setComponent] = useState({});
  const { componentId } = useParams();

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.componentViewer}>
        <h2>{componentId}</h2>
        <p>
          Do labore reprehenderit est dolore est non nostrud sint in. Laborum
          laborum amet culpa sit enim voluptate in nostrud eu. Consectetur ex et
          reprehenderit cupidatat sunt ullamco ut. Cillum irure sunt anim enim
          culpa Lorem amet labore non proident fugiat amet officia. Dolore aute
          culpa et non. Ex dolore sunt mollit consequat amet occaecat do.
        </p>
      </div>
    </Suspense>
  );
}

export default ComponentViewer;
