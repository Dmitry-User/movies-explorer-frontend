import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { pathsForHeader, pathsForFooter } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') setLoggedIn(false);
    },
    [pathname]
  );

  const checkPath = (paths) => {
    return paths.includes(pathname);
  };

  return (
    <div className="app">
      {checkPath(pathsForHeader) && <Header loggedIn={loggedIn} location={pathname} />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Main />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      {checkPath(pathsForFooter) && <Footer />}
    </div>
  );
};

export default App;
