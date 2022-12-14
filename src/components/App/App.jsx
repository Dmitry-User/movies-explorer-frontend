import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="movies"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="saved-movies"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
