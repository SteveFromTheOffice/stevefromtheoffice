import { Link, useLocation } from "react-router-dom";

import HomeSvg from "../../img/home.svg";
import ComponentSvg from "../../img/component.svg";
import BlogSvg from "../../img/newspaper.svg";
import LinkedInSvg from "../../img/linkedin.svg";
import GithubSvg from "../../img/github.svg";
import styles from "./GridHeader.module.scss";

function GridHeader() {
  const location = useLocation();

  console.log(location);

  return (
    <header className={styles.gridHeader}>
      <Link to="/" title="Home">
        <img alt="Home link" src={HomeSvg} />
      </Link>
      <Link to="/components" title="Components">
        <img alt="Component link" src={ComponentSvg} />
      </Link>
      <Link title="Blog" to="/blog">
        <img alt="Blog link" src={BlogSvg} />
      </Link>
      <div className={styles.grow}></div>
      <a
        target="_blank"
        title="Github"
        href="https://github.com/SteveFromTheOffice"
        rel="noreferrer">
        <img alt="Github profile link" src={GithubSvg} />
      </a>
      <a
        target="_blank"
        title="LinkedIn"
        href="https://www.linkedin.com/in/michael-scott-b04775254/"
        rel="noreferrer">
        <img alt="LinkedIn profile link" src={LinkedInSvg} />
      </a>
    </header>
  );
}

export default GridHeader;
