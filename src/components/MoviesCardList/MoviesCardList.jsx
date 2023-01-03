import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../hooks/useResize";
import { getFirstCountToView, getMore } from "../../utils/countMovies";

const MoviesCardList = ({ movies, findInSavedMovies, onClick }) => {
  const [quantityToView, setQuantityToView] = useState(0);
  const viewportWidth = useResize();
  const locationMovies = useLocation().pathname === "/movies";

  const handleMoreMovies = () => {
    setQuantityToView((prev) => prev + getMore(viewportWidth));
  };

  useEffect(() => {
    if (!locationMovies) return setQuantityToView();
    setQuantityToView(getFirstCountToView(viewportWidth));
  }, [viewportWidth, movies, locationMovies]);

  return (
    <section className="card-list">
      <ul className="card-list__cards">
        {movies.slice(0, quantityToView).map((movie) => (
          <li key={movie.id || movie._id}>
            <MoviesCard
              movie={movie}
              isLiked={findInSavedMovies(movie)}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
      {locationMovies && movies.length > quantityToView && <button className="card-list__button" onClick={handleMoreMovies}>Ещё</button>}
    </section>
  );
};

export default MoviesCardList;
