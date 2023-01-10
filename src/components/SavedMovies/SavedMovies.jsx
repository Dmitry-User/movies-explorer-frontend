import "./SavedMovies.css";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies, searchMovies } from "../../utils/filterMovies";
import { NOT_FOUND_MESSAGE } from "../../utils/constants";

const SavedMovies = ({ movies, onClick, findInSavedMovies }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [message, setMessage] = useState("");

  const handleMessage = (array) => {
    setMessage(array.length === 0 ? NOT_FOUND_MESSAGE : "");
  };

  const handleSearch = (query, isShort) => {
    let foundMovies = searchMovies(movies, query);
    localStorage.setItem("selected-saved-movies", JSON.stringify(foundMovies));

    if (foundMovies.length === 0) {
      setSelectedMovies([]);
      handleMessage(foundMovies);
    } else {
      setSelectedMovies(() => {
        foundMovies = filterMovies(foundMovies, isShort);
        handleMessage(foundMovies);
        return foundMovies;
      });
    }
  };

  const handleFilter = (isShort) => {
    const foundMovies = filterMovies(JSON.parse(localStorage.getItem("selected-saved-movies")) || movies, isShort);
    handleMessage(foundMovies);
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
