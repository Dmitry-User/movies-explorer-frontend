import "./Movies.css";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { searchMovies, filterMovies } from "../../utils/filterMovies";
import { ERR_MESSAGE, NOT_FOUND_MESSAGE } from "../../utils/constants";

const Movies = ({
  isLoading,
  getMovies,
  onClick,
  findInSavedMovies,
}) => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const moviesFromOtherApi = JSON.parse(localStorage.getItem("movies")) ?? [];

  const handleMessage = (array) => {
    setMessage(array.length === 0 ? NOT_FOUND_MESSAGE : "");
  };

  const handleSearch = async (query, isShort) => {
    let foundMovies;

    if (moviesFromOtherApi.length === 0) {
      await getMovies()
        .then((res) => {
          foundMovies = searchMovies(res, query);
          localStorage.setItem("selected-movies", JSON.stringify(foundMovies));
        })
        .catch(() => setMessage(ERR_MESSAGE));
    } else {
      foundMovies = searchMovies(moviesFromOtherApi, query);
      localStorage.setItem("selected-movies", JSON.stringify(foundMovies));
    }

    if (foundMovies.length === 0) {
      handleMessage(foundMovies);
      setMovies([]);
    } else {
      foundMovies = filterMovies(JSON.parse(localStorage.getItem("selected-movies")), isShort);
      handleMessage(foundMovies);
      setMovies(foundMovies);
    }
  };

  const handleFilter = (isShort) => {
    if (moviesFromOtherApi.length === 0) return;
    localStorage.setItem("short", isShort);
    const foundMovies = filterMovies(JSON.parse(localStorage.getItem("selected-movies")) || [], isShort);
    handleMessage(foundMovies);
    setMovies(foundMovies);
  };

  useEffect(() => {
    if (moviesFromOtherApi.length === 0) return;
    const foundMovies = filterMovies(
      searchMovies(moviesFromOtherApi, localStorage.getItem("query")),
      JSON.parse(localStorage.getItem("short"))
    );
    handleMessage(foundMovies);
    setMovies(foundMovies);
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
          {movies && <MoviesCardList movies={movies} onClick={onClick} findInSavedMovies={findInSavedMovies}/>}
        </>
      )}
    </main>
  );
};

export default Movies;
