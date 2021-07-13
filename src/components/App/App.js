import '../../index.css';
import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';

import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import MenuPopup from '../MenuPopup/MenuPopup';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  function handleMenuOpenClick() {
    console.log('menu clicked')
    setMenuPopupOpen(true)
  }

  function handleMenuCloseClick() {
    console.log('close clicked')
    setMenuPopupOpen(false)
  }
  return (
    <div className="app">
      <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} />
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/movies">
          <Movies handleMenuOpenClick={handleMenuOpenClick} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies handleMenuOpenClick={handleMenuOpenClick} isLoggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/">
          <Main handleMenuOpenClick={handleMenuOpenClick} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/profile">
          <Profile handleMenuOpenClick={handleMenuOpenClick} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
