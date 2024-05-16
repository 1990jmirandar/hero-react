import { heroes } from "../../data/heroes/heroes"

export const getHeroesById = (id) =>{
    const heroe = heroes.filter((heroe) => heroe.id === id)
    if (heroe.length === 0){
        throw new Error(`${id} is not a valid heroe`); 
    }else{
        return heroe[0];
    }
    
}