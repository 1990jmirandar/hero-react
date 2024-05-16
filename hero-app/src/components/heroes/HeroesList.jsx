import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/heroes/getrHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroesList = ({publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( (heroe) => (
                <HeroCard key={heroe.id} 
                id={heroe.id} 
                superhero={heroe.superhero} 
                firstappearance={heroe.first_appearance}/>
            ))
        }
    </div>
  )
}

export default HeroesList
