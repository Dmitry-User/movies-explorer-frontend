import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MoviesCard = ({ movie }) => {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  const getHoursAndMins = (duration) => {
    if (!duration) return;
    let hours = Math.floor(duration/60);
    let minutes = duration % 60;
    if (hours === 0) return `${minutes}м`;
    return `${hours}ч ${minutes}м`;
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className="card">
      <img
        src={movie.image}
        alt={movie.nameRU}
        className="card__image"
      />
      <div className="card__info" onClick={handleClick}>
        <div className="card__column">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__duration">{getHoursAndMins(movie.duration)}</p>
        </div>
        {pathname === "/movies" ? (
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
