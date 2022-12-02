import { useEffect, useState } from "react";
import { GetComponentList } from "../../lib/contentful";
import PageHeader from "../PageHeader/PageHeader.component";
import styles from "./ComponentPage.module.scss";

function ComponentExplorer() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    GetComponentList().then((components) => {
      setComponents(components);
    });
  }, []);

  const handleOnSearch = (query) => {
    console.log(`Searched for ${query}`);
  };

  return (
    <section className={styles.componentPage}>
      <PageHeader title="Components" onSearch={handleOnSearch} />
      <ul>
        {components.map((component) => {
          return (
            <li key={component.id}>
              <img alt="TODO" src={component.thumbnail?.url || "#"} />
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
