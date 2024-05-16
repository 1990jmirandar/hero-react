import React from 'react'
import HeroCard from '../../components/heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../helpers/heroes/getHeroesByName';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const onSubmitForm = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmitForm}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              value={searchText}
              onChange={onInputChange}
              autoComplete='off' />
          </form>
          < br/>
          <button className='btn btn-primary' onClick={onSubmitForm}> Buscar</button>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {heroes.length === 0 ?
            (
              <div className='alert alert-danger animate__animated animate__fadeIn'>
                No found hero <b>{q}</b>
              </div>
            ) :
            (
              heroes.map(heroe => (
                <HeroCard key={heroe.id} id={heroe.id} superhero={heroe.superhero} firstappearance={heroe.first_appearance} />
              ))
            )
          }
        </div>
      </div>
    </>
  )
}

export default Search
