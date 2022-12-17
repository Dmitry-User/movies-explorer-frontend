import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies }) => {
  return (
    <section className="card-list">
      <ul className="card-list__cards">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MoviesCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
