import '../../../index.css';
import './SearchForm.css';
import React from "react";






function SearchForm(props) {

  const [searchValue, setSearchValue] = React.useState('');
  const [isShorts, setShorts] = React.useState(true);
  const [errorVisible, setErrorVisible] = React.useState(false);
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
    localStorage.setItem('localSearchValue', e.target.value);
    setErrorVisible(false)

  }
  React.useEffect(() => {
    if(localStorage.getItem('localSearchValue')){
      setSearchValue(localStorage.getItem('localSearchValue'))
      setShorts(localStorage.getItem('localIsShorts'))
    }
  }, [])

console.log(isShorts)
  function handleShortsChange() {

    if (isShorts) {
      setShorts(false)
      props.handleShortsChange(false)
      localStorage.setItem('localIsShorts', isShorts);
    } else {
      setShorts(true);
      props.handleShortsChange(true)
      localStorage.setItem('localIsShorts', isShorts);
    }

  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log(searchValue)
    if (!searchValue) {
      setErrorVisible(true)
      return
    }
    localStorage.setItem('localIsShorts', isShorts);
    props.getMovies(searchValue, isShorts);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>

      <div className="search-form__container">


        <input className="search-form__input" name="search" type="text" value={searchValue} onChange={handleSearchChange} placeholder="Фильм"></input>
        <button type="submit" className="search-form__button">Поиск</button>
      </div>
      {errorVisible && <span className="search-form__error">Нужно ввести ключевое слово</span>}
      <div className="search-form__checkbox-container">
        <label className="search-form__checkbox-label" htmlFor="checkbox-1">
          <input type="checkbox" className="search-form__checkbox" name="short-film" value="short-films" onChange={handleShortsChange} id="checkbox-1" defaultChecked={isShorts}  ></input>
          <span className="search-form__visible-checkbox"></span>
        </label>
        <p className="search-form__checkbox-title">Короткометражки</p>
      </div>

    </form>

  );
}

export default SearchForm;
