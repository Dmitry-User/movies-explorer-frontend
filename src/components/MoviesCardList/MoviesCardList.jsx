import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../hooks/useResize";
import { getQuantityMovies, getAdditionalMovies } from "../../utils/countMovies";

const MoviesCardList = ({ movies, findInSavedMovies, onClick }) => {
  const [quantityMovies, setQuantityMovies] = useState(0);
  const viewportWidth = useResize();
  const isMoviesPage = useLocation().pathname === "/movies";

  const handleQuantityMovies = () => {
    setQuantityMovies((prev) => prev + getAdditionalMovies(viewportWidth));
  };

  useEffect(() => {
    if (!isMoviesPage) return setQuantityMovies();
    setQuantityMovies(getQuantityMovies(viewportWidth));
  }, [viewportWidth, movies, isMoviesPage]);

  return (
    <section className="card-list">
      <ul className="card-list__cards">
        {movies.slice(0, quantityMovies).map((movie) => (
          <li key={movie.id || movie._id}>
            <MoviesCard
              movie={movie}
              isLiked={findInSavedMovies(movie)}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
      {isMoviesPage && movies.length > quantityMovies && <button className="card-list__button" onClick={handleQuantityMovies}>Ещё</button>}
    </section>
  );
};

export default MoviesCardList;
