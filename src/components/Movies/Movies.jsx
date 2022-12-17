import "./Movies.css";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreCards from "../MoreCards/MoreCards";
import { movies } from "../../utils/constants";

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="movies">
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <MoviesCardList movies={movies} />
          <MoreCards />
        </>
      )}
    </main>
  );
};

export default Movies;
