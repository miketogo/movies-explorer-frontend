import '../../../index.css';
import './SavedMoviesCardList.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';




function SavedMoviesCardList(props) {
  return (
    <section className="saved-movies-card-list">
      <div className="saved-movies-card-list__cards">
        <SavedMoviesCard />
        <SavedMoviesCard />
        <SavedMoviesCard />
      </div>
    </section>

  );
}

export default SavedMoviesCardList;
