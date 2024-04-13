import { React, useState } from 'react';
import './App.css';
import { Route, Routes, } from "react-router-dom";
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import savedPageContext from '../../contexts/savedPageContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const [onSavedPage, setOnSavedPage] = useState(false);

  return (
    <div className='app'>
      <savedPageContext.Provider value={{ onSavedPage, setOnSavedPage }}>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/signup' element={<Register />}></Route>
          <Route path='/signin' element={<Login />}></Route>
          <Route path='*' exact={true} element={<NotFound />} ></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='saved-movies' element={<SavedMovies />}></Route>
        </Routes>
      </savedPageContext.Provider>
    </div>
  );
}

export default App;
