import "./Movies.css";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import MoreCards from "../MoreCards/MoreCards";
import { searchMovies, filterMovies } from "../../utils/filterMovies";
import { errMessage } from "../../utils/constants";

const localMovies = JSON.parse(localStorage.getItem("movies")) || [];

const Movies = ({
  isLoading,
  getMovies,
  onClick,
  findInSavedMovies,
}) => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");

  const saveInLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  };

  const handleSearch = async (query, isShort) => {
    let foundMovies;

    if (localMovies.length === 0) {
      await getMovies()
        .then((res) => {
          foundMovies = searchMovies(res, query);
          saveInLocalStorage("selected-movies", foundMovies);
        })
        .catch(() => setMessage(errMessage));
    } else {
      foundMovies = searchMovies(localMovies, query);
      saveInLocalStorage("selected-movies", foundMovies);
    }

    if (foundMovies.length === 0) {
      setMovies([]);
      setMessage("Ничего не найдено");
    } else {
      handleFilter(isShort);
      setMessage("");
    }
  };


  const handleFilter = (isShort) => {
    const foundMovies = filterMovies(JSON.parse(localStorage.getItem("selected-movies")), isShort);
    foundMovies.length === 0 ? setMessage("Ничего не найдено") : setMessage("");
    setMovies(foundMovies);
  }

  useEffect(() => {
    setMovies(
      filterMovies(
        searchMovies(
          localMovies,
          localStorage.getItem("query")
        ),
        JSON.parse(localStorage.getItem("short") || false)
      )
    );
  }, []);

  return (
    <main className="movies">
      <SearchForm
        isLoading={isLoading}
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {message && <h2 className="movies__message">{message}</h2>}
          {movies && <MoviesCardList movies={movies} onClick={onClick} findInSavedMovies={findInSavedMovies} />}
        </>
      )}
    </main>
  );
};

export default Movies;
