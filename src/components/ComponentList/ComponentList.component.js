import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./ComponentList.module.css";

function ComponentList(props) {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((res) => {
        setComponents(res);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={styles.componentList}>
      <ul>
        {components.map((component) => {
          return (
            <Link key={component.id} to={`/components/${component.id}`}>
              <li>{component.title}</li>
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default ComponentList;
