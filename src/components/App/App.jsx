import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext"
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { SUCCESSFUL_UPDATE_USER_MESSAGE, pathsForHeader, pathsForFooter } from "../../utils/constants";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")) ?? false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [resultMessage , setResultMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const getMoviesOtherApi = () => {
    setIsLoading(true);
    return moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
        return movies;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const getMoviesMyApi = () => {
    mainApi
      .getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleAddMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((newSavedMovies) => newSavedMovies.filter((m) => m._id !== movie._id));
      })
      .catch((err) => console.log(err));
  };

  const findInSavedMovies = (movie) => {
    return savedMovies.some((m) => m.movieId === movie.id);
  }

  const handleClick = (movie) => {
    if (findInSavedMovies(movie)) {
      handleDeleteMovie(savedMovies.find((m) => m.movieId === movie.id));
    } else {
      handleAddMovie(movie);
    }
  };

  const getUserInfo = () => {
    mainApi
      .getUser()
      .then((res) => {
        localStorage.setItem("loggedIn", true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err.message);
      });
  };

  const handleUpdateUser = (updatedUser) => {
    setIsLoading(true);
    mainApi
      .setUser(updatedUser)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfile(false);
        setResultMessage(SUCCESSFUL_UPDATE_USER_MESSAGE);
      })
      .catch((err) => {
        setIsEditProfile(true);
        setResultMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = (newUser) => {
    setIsLoading(true);
    mainApi
      .register(newUser)
      .then(() => {
        handleLogin(newUser);
      })
      .catch((err) => {
        setResultMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = (user) => {
    setIsLoading(true);
    mainApi
      .authorize(user)
      .then(() => {
        setLoggedIn(true);
        getUserInfo();
        getMoviesMyApi();
        navigate("/movies");
      })
      .catch((err) => {
        setLoggedIn(false);
        setResultMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        setResultMessage(err.message);
      });
  };

  const handleEditProfile = () => {
    setIsEditProfile(true);
    setResultMessage("");
  };

  const hideMessage = () => {
    setResultMessage("");
  };

  const checkPath = (paths) => {
    return paths.includes(pathname);
  };

  useEffect(() => {
    getUserInfo();
    if (loggedIn) getMoviesMyApi();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  isLoading={isLoading}
                  getMovies={getMoviesOtherApi}
                  onClick={handleClick}
                  findInSavedMovies={findInSavedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  movies={savedMovies}
                  onClick={handleDeleteMovie}
                  findInSavedMovies={findInSavedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  onLogout={handleLogout}
                  onUpdate={handleUpdateUser}
                  isLoading={isLoading}
                  message ={resultMessage}
                  isEditProfile={isEditProfile}
                  onEditProfile={handleEditProfile}
                  onHideMessage={hideMessage}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={loggedIn ? (
              <Navigate to="/" />
            ) : (
              <Register
                onRegister={handleRegister}
                message={resultMessage}
                isLoading={isLoading}
                onHideMessage={hideMessage}
              />
            )}
          />
          <Route
            path="/signin"
            element={loggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login
                onLogin={handleLogin}
                message={resultMessage}
                isLoading={isLoading}
                onHideMessage={hideMessage}
              />
            )}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
        {checkPath(pathsForFooter) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
