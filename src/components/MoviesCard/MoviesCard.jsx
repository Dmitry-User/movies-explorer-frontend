import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { BASE_URL_BEATFILM } from "../../utils/constants";
import getHoursAndMins from "../../utils/convertedDuration";

const MoviesCard = ({ movie, isLiked, onClick }) => {
  const locationMovies = useLocation().pathname === "/movies";

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <article className="card">
      <a
        className="card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={locationMovies ? (BASE_URL_BEATFILM + movie.image.url) : movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className="card__info" onClick={handleClick}>
        <div className="card__column">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__duration">{getHoursAndMins(movie.duration)}</p>
        </div>
        {locationMovies ? (
          <button
            className={`card__button ${isLiked ? "card__button_type_like-active" : "card__button_type_like"}`}
            type="button"
          />
        ) : (
          <button
            className="card__button card__button_type_delete"
            type="button"
          />
        )}
      </div>
    </article>
  );
};

export default MoviesCard;
