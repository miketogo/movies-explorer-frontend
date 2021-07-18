export default function filterFilms (searchValue, isShorts, films){
  const filteredFilms = films.filter(function (item) {
    if ((item.nameRU.toLowerCase().includes(searchValue.toLowerCase())) && ((isShorts? (item.duration > 0) : (item.duration > 40)))){
      return true
    }
    return false
  })
  console.log(filteredFilms)
 return filteredFilms
}
