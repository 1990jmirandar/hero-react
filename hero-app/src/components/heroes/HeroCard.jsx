import React from 'react'
import { Link } from 'react-router-dom';
const HeroCard = ({id, superhero, firstappearance}) => {
    const imgPath = `/assets/heroes/${id}.jpg`;
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={ imgPath } className='card-img' alt={superhero}/>
                </div>
                <div className='col-8'>
                    <div className='cad-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{firstappearance}</p>
                        <Link to={`/heroe/${id}`}>Ver más...</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HeroCard
