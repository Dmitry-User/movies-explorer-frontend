import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies, findInSavedMovies, onClick }) => {

  return (
    <section className="card-list">
      <ul className="card-list__cards">
        {movies.map((movie) => (
          <li key={movie.id || movie._id}>
            <MoviesCard
              movie={movie}
              isLiked={findInSavedMovies(movie)}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
