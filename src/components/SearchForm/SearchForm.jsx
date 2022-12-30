import "./SearchForm.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchForm = ({ isLoading, onFilter, onSearch }) => {
  const [query, setQuery] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const locationMovies = useLocation().pathname === "/movies";

  const handleChange = (e) => {
    setQuery(e.target.value);
    setIsValid(true);
  };

  const handleCheck = (e) => {
    setIsShort(e.target.checked);
    onFilter(e.target.checked);
    if (!locationMovies) setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return setIsValid(false);
    if (locationMovies) {
      localStorage.setItem("query", query);
      localStorage.setItem("short", isShort);
    }
    onSearch(query, isShort);
  };

  useEffect(() => {
    if (!locationMovies || !localStorage.length) return;
    setQuery(localStorage.getItem("query") || "");
    setIsShort(JSON.parse(localStorage.getItem("short")) || false);
  }, []);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="search__fieldset">
          <input
            className="search__input"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Фильм"
            required
          />
          <button
            type="submit"
            className="search__submit-button"
            disabled={!isValid || isLoading}
          >
            Поиск
          </button>
          {!isValid && <p className="search__error">Нужно ввести ключевое слово</p>}
        </fieldset>
        <label className="search__checkbox-label">
          <input
            className="search__checkbox-input"
            type="checkbox"
            checked={isShort}
            onChange={handleCheck}
            disabled={isLoading}
          />
          <span>Короткометражки</span>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
