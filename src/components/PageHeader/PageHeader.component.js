import style from "./PageHeader.module.scss";
import SearchSvg from "../../img/search.svg";
import { useState } from "react";

function PageHeader(props) {
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className={style.componentHeader}>
      <h3>{props.title}</h3>
      <form>
        <input
          onChange={handleOnChange}
          placeholder="Search..."
          value={query}
        />
        <button>
          <img alt="Search" src={SearchSvg} />
        </button>
      </form>
    </header>
  );
}

export default PageHeader;
