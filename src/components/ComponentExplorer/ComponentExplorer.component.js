import { useEffect, useState } from "react";

import PageHeader from "../PageHeader/PageHeader.component";

import { GetComponentList } from "../../lib/contentful";
import styles from "./ComponentExplorer.module.scss";

function ComponentExplorer() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    GetComponentList().then((components) => {
      setComponents(components);
    });
  }, []);

  return (
    <section className={styles.componentExplorer}>
      <PageHeader title="Components" />
      <ul>
        {components.map((component) => {
          return (
            <li key={component.id}>
              <img src={component.thumbnail?.url || "#"} />
              <h3>{component.name}</h3>
              <p>{component.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ComponentExplorer;
