import style from "./PageHeader.module.scss";
import SearchSvg from "../../img/search.svg";
import { useState } from "react";

function PageHeader(props) {
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.onSearch(query);
    setQuery("");
  };

  const searchForm = (
    <form onSubmit={handleOnSubmit}>
      <input onChange={handleOnChange} placeholder="Search..." value={query} />
      <button>
        <img alt="Search" src={SearchSvg} />
      </button>
    </form>
  );

  return (
    <header className={style.componentHeader}>
      <h3>{props.title}</h3>
      {props.onSearch ? searchForm : null}
    </header>
  );
}

export default PageHeader;
