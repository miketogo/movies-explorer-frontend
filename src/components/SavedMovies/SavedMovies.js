import '../../index.css';
import './SavedMovies.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';




function SavedMovies(props) {
  return (
    <>
    <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={true}/>
    {/* <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={props.isLoggedIn}/> */}
    <div className="movies">
      <SearchForm />
      <SavedMoviesCardList />
    </div>
    <Footer />
    </>

  );
}

export default SavedMovies;
