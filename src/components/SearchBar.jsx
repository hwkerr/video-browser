import React, { useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const onInputChange = event => {
    setTerm(event.target.value);
  }

  const onFormSubmit = event => {
    event.preventDefault();

    props.onSubmit(term);
  }

  return (
    <div className="ui segment container search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            onChange={onInputChange}
            placeholder="Search (ex: news)"
            value={term} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
