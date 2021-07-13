import '../../../index.css';
import './SearchForm.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';





function SearchForm(props) {

  const [searchValue, setSearchValue] = React.useState('');
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input className="search-form__input" name="search" type="text" required value={searchValue} onChange={handleSearchChange} placeholder="Фильм"></input>
        <button type="submit" className="search-form__button">Поиск</button>
      </div>
      <div className="search-form__checkbox-container">
        <label className="search-form__checkbox-label" for="checkbox-1">
          <input type="checkbox" className="search-form__checkbox" name="short-film" value="short-films" id="checkbox-1" ></input>
          <span class="search-form__visible-checkbox"></span>
        </label>
        <p className="search-form__checkbox-title">Короткометражки</p>
      </div>

    </form>

  );
}

export default SearchForm;
