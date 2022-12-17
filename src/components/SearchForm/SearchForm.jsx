import "./SearchForm.css";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search__fieldset">
          <input
            type="text"
            placeholder="Фильм"
            required
            className="search__input"
            id="search-input"
          />
          <button
            type="submit"
            className="search__submit-button"
          >
            Поиск
          </button>
        </fieldset>
        <label className="search__checkbox-label">
          <input className="search__checkbox-input" type="checkbox" />
          <span>Короткометражки</span>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
