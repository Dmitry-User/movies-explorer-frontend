import "./SavedMovies.css";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies, searchMovies } from "../../utils/filterMovies";

const SavedMovies = ({ movies, onClick, findInSavedMovies }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = (query, isShort) => {
    const foundMovies = searchMovies(movies, query);

    if (foundMovies.length === 0) {
      setSelectedMovies([]);
      setMessage("Ничего не найдено");
    } else {
      setSelectedMovies(filterMovies(foundMovies, isShort));
      setMessage("");
    }
  };

  const handleFilter = (isShort) => {
    const foundMovies = filterMovies(movies, isShort);
    foundMovies.length === 0 ? setMessage("Ничего не найдено") : setMessage("");
    setSelectedMovies(foundMovies);
  };

  useEffect(() => {
    setSelectedMovies(movies);
  }, [movies]);

  return (
    <main className="saved-movies">
      <SearchForm onFilter={handleFilter} onSearch={handleSearch}/>
      {message && <h2 className="saved-movies__message">{message}</h2>}
      {selectedMovies && <MoviesCardList movies={selectedMovies} onClick={onClick} findInSavedMovies={findInSavedMovies}/>}
    </main>
  );
};

export default SavedMovies;
