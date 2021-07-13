import '../../index.css';
import './Movies.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';




function Movies(props) {
  return (
    <>
    <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={true}/>
    {/* <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={props.isLoggedIn}/> */}
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
    </div>
    <Footer />
    </>

  );
}

export default Movies;
