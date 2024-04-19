import { React, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate, } from "react-router-dom";
import mainApi from '../../utils/MainApi';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';
import InfoPopup from '../InfoPopup/InfoPopup'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [load, setLoad] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isInfoPopup, setInfoPopup] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(res => setCurrentUser(res))
        .catch(err =>
          setInfoPopup({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => setIsLoader(false));
    }
  }, [loggedIn]);

  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoader(true);
      mainApi.getUserInfo()
        .then(data => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            navigate(path, { replace: true });
          }
        })
        .catch(err =>
          setInfoPopup({
            isOpen: true,
            successful: false,
            text: err,
          })
        )
        .finally(() => {
          setIsLoader(false);
          setLoad(true);
        });
    } else {
      setLoad(true);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi.getSavedMovies()
        .then(data => {
          const UserMoviesList = data.filter(m => m.owner === currentUser._id);
          setSavedMoviesList(UserMoviesList);
        })
        .catch(err =>
          setInfoPopup({
            isOpen: true,
            successful: false,
            text: err,
          })
        );
    }
  }, [currentUser, loggedIn]);

  function handleRegister({ name, email, password }) {
    setIsLoader(true);
    mainApi.registerUser(name, email, password)
      .then(data => {
        if (data) {
          handleLogin({ email, password })
        }
      })
      .catch(err =>
        setInfoPopup({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleLogin({ email, password }) {
    setIsLoader(true);
    mainApi.loginUser(email, password)
      .then(jwt => {
        if (jwt.userToken) {
          localStorage.setItem('jwt', jwt.userToken);
          setLoggedIn(true);
          navigate('/movies', { replace: true })
          setInfoPopup({
            isOpen: true,
            successful: true,
            text: 'Добро пожаловать!',
          });
        }
      })
      .catch(err =>
        setInfoPopup({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    navigate('/', { replace: true });
  }

  function handleUpdateProfile({ name, email }) {
    setIsLoader(true);
    mainApi.updateUserInfo(name, email)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setInfoPopup({
          isOpen: true,
          successful: true,
          text: 'Ваши данные обновлены!',
        });
      })
      .catch(err =>
        setInfoPopup({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  function handleSaveMovie(movie) {
    mainApi.addNewMovie(movie)
      .then(newMovie => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch(err =>
        setInfoPopup({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi.deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch(err =>
        setInfoPopup({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  function closeInfoPopup() {
    setInfoPopup({ ...isInfoPopup, isOpen: false });
  }

  return (
    <div className='app'>
      {!load ? (
        <Preloader isOpen={isLoader} />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path='/' element={<Main loggedIn={loggedIn} />}></Route>
            <Route path='signin' element={<Login handleLogin={handleLogin} />}></Route>
            <Route path='signup' element={<Register handleRegister={handleRegister} />}></Route>
            <Route path='/profile' element={
              <ProtectedRoute
                element={Profile}
                handleUpdateProfile={handleUpdateProfile}
                handleSignOut={handleSignOut}
                loggedIn={loggedIn}
              />}>
            </Route>
            <Route path='/movies' element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                setIsLoader={setIsLoader}
                setInfoPopup={setInfoPopup}
                savedMoviesList={savedMoviesList}
                onClickLike={handleSaveMovie}
                onClickDelete={handleDeleteMovie}
              />}>
            </Route>
            <Route path='/saved-movies' element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMoviesList={savedMoviesList}
                onClickDelete={handleDeleteMovie}
                setInfoPopup={setInfoPopup}
              />}>
            </Route>
            <Route path='*' exact={true} element={<NotFound />} ></Route>
          </Routes>
          <Preloader isOpen={isLoader} />
          <InfoPopup
            status={isInfoPopup}
            onClose={closeInfoPopup}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
