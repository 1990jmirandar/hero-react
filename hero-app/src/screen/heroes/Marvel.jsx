import React from 'react'
import HeroesList from '../../components/heroes/HeroesList'

const Marvel = () => {
  return (
    <>
     <h1>MARVEL COMICS</h1>
      <hr />
      <HeroesList publisher={"Marvel Comics"} />
    </>
  )
}

export default Marvel
