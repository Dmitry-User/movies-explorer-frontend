import "./SearchForm.css";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="search__fieldset">
          <label className="search__label">
            <input
              type="text"
              placeholder="Фильм"
              required
              className="search__input"
            />
          </label>
          <button
            type="submit"
            className="search__submit-button"
          >
            Поиск
          </button>
        </fieldset>
        <label className="search__checkbox-label">
          <input className="search__checkbox-input" type="checkbox"/>
          <span>Короткометражки</span>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
