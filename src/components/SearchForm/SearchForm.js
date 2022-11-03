import React from "react";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="seach-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter topic"
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
