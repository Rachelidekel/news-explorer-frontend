import { useState } from "react";
import { useFormAndValidation } from "../../hooks/UseForm";

function SearchForm({ onSearchClick }) {
  const { values, handleChange } = useFormAndValidation();
  const [errorText, setErrorText] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (values.searchKeyword) {
      setErrorText("");
      onSearchClick(values.searchKeyword);
    } else {
      setErrorText("Please enter a keyword");
    }
  }

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="seach-form__wrapper">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter topic"
          onChange={handleChange}
          autoComplete="off"
          name="searchKeyword"
          value={values.searchKeyword || ""}
          required
          minLength={2}
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
        <span className="form__error-message">{errorText}</span>
      </div>
    </form>
  );
}

export default SearchForm;
