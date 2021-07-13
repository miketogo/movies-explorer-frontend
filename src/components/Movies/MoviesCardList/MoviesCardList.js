import '../../../index.css';
import './MoviesCardList.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';




function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="movies-card-list__more">
        Ещё
      </button>
    </section>

  );
}

export default MoviesCardList;
