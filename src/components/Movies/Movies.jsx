import "./Movies.css";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { searchMovies, filterMovies } from "../../utils/filterMovies";
import { errMessage } from "../../utils/constants";

const Movies = ({
  isLoading,
  getMovies,
  onClick,
  findInSavedMovies,
}) => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const localMovies = JSON.parse(localStorage.getItem("movies")) ?? [];

  const handleSearch = async (query, isShort) => {
    let foundMovies;

    if (localMovies.length === 0) {
      await getMovies()
        .then((res) => {
          foundMovies = searchMovies(res, query);
          localStorage.setItem("selected-movies", JSON.stringify(foundMovies));
        })
        .catch(() => setMessage(errMessage));
    } else {
      foundMovies = searchMovies(localMovies, query);
      localStorage.setItem("selected-movies", JSON.stringify(foundMovies));
    }

    if (foundMovies.length === 0) {
      setMovies([]);
      setMessage("Ничего не найдено");
    } else {
      foundMovies = filterMovies(JSON.parse(localStorage.getItem("selected-movies")), isShort);
      foundMovies.length === 0 ? setMessage("Ничего не найдено") : setMessage("");
      setMovies(foundMovies);
    }
  };

  const handleFilter = (isShort) => {
    if (localMovies.length === 0) return;
    const foundMovies = filterMovies(JSON.parse(localStorage.getItem("selected-movies")) || [], isShort);
    foundMovies.length === 0 ? setMessage("Ничего не найдено") : setMessage("");
    setMovies(foundMovies);
  };

  useEffect(() => {
    if (localMovies.length === 0) return;
    setMovies(
      filterMovies(
        searchMovies(localMovies, localStorage.getItem("query")),
        JSON.parse(localStorage.getItem("short"))
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
          {movies && <MoviesCardList movies={movies} onClick={onClick} findInSavedMovies={findInSavedMovies}/>}
        </>
      )}
    </main>
  );
};

export default Movies;
