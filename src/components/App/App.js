import '../../index.css';
import './App.css';
import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import MenuPopup from '../MenuPopup/MenuPopup';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import CurrentUserContext from '../CurrentUserContext/CurrentUserContext'
import filterFilms from '../../utils/filterFilms'

function App(props) {
  const [isMenuPopupOpen, setMenuPopupOpen] = React.useState(false);
  const [isPreloaderVisible, setPreloaderVisible] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [allFilms, setAllFilms] = React.useState(null);
  const [films, setFilms] = React.useState(null);
  const [allSavedFilms, setAllSavedFilms] = React.useState(null);
  const [savedFilms, setSavedFilms] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [apiErrorMessage, setApiErrorMessage] = React.useState('');
  const [filmsApiErrorMessage, setFilmsApiErrorMessage] = React.useState('');
  const [isEditProfileClicked, setEditProfileClicked] = React.useState(false);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      let jwt = localStorage.getItem("jwt");
      mainApi.jwtCheck(jwt).then((res) => {
        console.log(res)
        setCurrentUser(res.user)
        // авторизуем пользователя
        setLoggedIn(true);
        props.history.push("/movies");
        mainApi.getSavedFilms()
          .then((res) => {
            setAllSavedFilms(res.movies)
            console.log(res)
            getSavedFilms()
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          });
      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

    };

    if (localStorage.getItem('localSearchValue') && localStorage.getItem('localIsShorts')) {
      setPreloaderVisible(true)
      moviesApi.getAllMovies().then((films) => {
        let localSearchValue = localStorage.getItem('localSearchValue');
        let localIsShorts = localStorage.getItem('localIsShorts');
        setAllFilms(films)
        setSearchValue(localSearchValue)
        setFilmsApiErrorMessage('')
        setFilms(filterFilms(localSearchValue, localIsShorts, films))
      })
        .catch((err) => {
          setFilmsApiErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
          console.log(err); // выведем ошибку в консоль
        })
        .finally(() =>
          setPreloaderVisible(false)
        )
    }


  }, [props.history])

  function getMovies(searchValue, isShorts) {
    setPreloaderVisible(true)
    moviesApi.getAllMovies().then((films) => {

      setAllFilms(films)
      setSearchValue(searchValue)
      setFilmsApiErrorMessage('')
      setFilms(filterFilms(searchValue, isShorts, films))
    })
      .catch((err) => {
        setFilmsApiErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() =>
        setPreloaderVisible(false)
      )
  }

  function getSavedFilms() {
    mainApi.getSavedFilms()
      .then((res) => {
        setAllSavedFilms(res.movies)
        setSavedFilms(res.movies)
        console.log(res)
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  function handleMenuOpenClick() {
    console.log('menu clicked')
    setMenuPopupOpen(true)
  }

  function handleMenuCloseClick() {
    console.log('close clicked')
    setMenuPopupOpen(false)
  }

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password).then(() => {
      handleLogin(email, password)
      setApiErrorMessage('')
    }).catch((err) => {
      setApiErrorMessage(err.message)
      setTimeout(setApiErrorMessage, 10000, '')
      console.log(err)
    });
  }

  function handleLogin(email, password) {
    mainApi.auth(email, password)
      .then((data) => {
        console.log(data)
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          localStorage.removeItem('regEmail');
        }
        return data.token
      }).then((token) => {
        setLoggedIn(true)
        mainApi.getUserInfo()
          .then((result) => {
            setCurrentUser(result.user);
            console.log(result.user)
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          });
        setApiErrorMessage('')
        props.history.push("/movies");
      }).catch((err) => {
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err); // выведем ошибку в консоль
      });
  }

  function handleUpdateUser(userInfo) {
    mainApi.setUserInfo(userInfo)
      .then((res) => {
        setApiErrorMessage('')
        setCurrentUser(res.user)
        setEditProfileClicked(false)
      })
      .catch((err) => {
        setEditProfileClicked(true)
        setApiErrorMessage(err.message)
        setTimeout(setApiErrorMessage, 10000, '')
        console.log(err); // выведем ошибку в консоль
      });
  }
  function handleShortsChange(isShorts) {
    if (allFilms) {
      setFilms(filterFilms(searchValue, isShorts, allFilms))
      console.log(isShorts)
    }
  }

  function handleCardSave(card, isCardSaved) {
    console.log(card)
    if (!isCardSaved) {
      mainApi.saveFilm(card).then((res) => {
        console.log(res.movie)
        getSavedFilms()
      })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    } else {
      const savedFilmId = allSavedFilms.find(function (savedFilm) {
        if (savedFilm.movieId === card.id) {
          let id = savedFilm._id
          console.log(id)
          return id
        }
        return false
      });
      mainApi.unsaveFilm(savedFilmId._id).then((res) => {
        console.log(res.movie)
        getSavedFilms()
      })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }



    // console.log(card.likes.some(i => i === currentUser._id))
    // const isLiked = card.likes.some(i => i === currentUser._id);
    // api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
    //   console.log(newCard.card)
    //   setCards((cards) => cards.map((c) => c._id === card._id ? newCard.card : c));
    // })
    //   .catch((err) => {
    //     console.log(err); // выведем ошибку в консоль
    //   });
  }

  function handleCardDelite(card) {
    mainApi.unsaveFilm(card._id).then((res) => {
      console.log(res.movie)
      getSavedFilms()
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  function filterSavedFilms(searchValue, isShorts){
    setSavedFilms(filterFilms(searchValue, isShorts, allSavedFilms))
  }
  function handleSavedShortsChange(isShorts){
    if (allSavedFilms) {
      setSavedFilms(filterFilms(searchValue, isShorts, allSavedFilms))
      console.log(isShorts)
    }
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <MenuPopup isMenuPopupOpen={isMenuPopupOpen} handleMenuCloseClick={handleMenuCloseClick} />
        <Switch>
          <Route path="/signup" >
            <Register onRegister={handleRegister} apiErrorMessage={apiErrorMessage} />
          </Route>
          <Route path="/signin" >
            <Login onLogin={handleLogin} apiErrorMessage={apiErrorMessage} />
          </Route>
          <Route path="/movies">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Movies}
              handleMenuOpenClick={handleMenuOpenClick}
              getMovies={getMovies}
              films={films}
              isPreloaderVisible={isPreloaderVisible}
              handleShortsChange={handleShortsChange}
              filmsApiErrorMessage={filmsApiErrorMessage}
              onCardSave={handleCardSave}
              savedFilms={savedFilms}
            />

          </Route>
          <Route path="/saved-movies">
            <ProtectedRoute
              loggedIn={loggedIn}
              component={SavedMovies}
              handleMenuOpenClick={handleMenuOpenClick}
              savedFilms={savedFilms}
              handleCardDelite={handleCardDelite}
              getMovies={filterSavedFilms}
              handleShortsChange={handleSavedShortsChange}
            />
          </Route>
          <Route exact path="/">
            <Main handleMenuOpenClick={handleMenuOpenClick} loggedIn={loggedIn} />
          </Route>
          <Route path="/profile">
            <ProtectedRoute
              setEditProfileClicked={setEditProfileClicked}
              isEditProfileClicked={isEditProfileClicked}
              loggedIn={loggedIn}
              component={Profile}
              handleMenuOpenClick={handleMenuOpenClick}
              setLoggedIn={setLoggedIn}
              handleUpdateUser={handleUpdateUser}
              apiErrorMessage={apiErrorMessage}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default withRouter(App);
