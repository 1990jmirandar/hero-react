import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../helpers/heroes/getHeroesById';

const Heroes = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const {superhero,publisher,alter_ego, first_appearance} = useMemo(() => getHeroesById(id), [id]);
  const onNavigateBack = () =>{
    navigate(-1);
  }
  return (

    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4'>
        <img src={`/assets/heroes/${id}.jpg`}
        alt={superhero}
        className='img-thumbnail' />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <button className='btn btn-outline-primary'
        onClick={onNavigateBack}>Regresar</button>
      </div>
    </div>
  )
}

export default Heroes
