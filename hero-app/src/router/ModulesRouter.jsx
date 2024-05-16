import React from 'react'
import { Navbar } from '../components/Navbar'
import Marvel from '../screen/heroes/Marvel'
import Dc from '../screen/heroes/Dc'
import {Routes, Route, Navigate} from 'react-router-dom'
import Heroes from '../screen/heroes/Heroes'
import Search from '../screen/heroes/Search'
const ModulesRouter = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/*" element={<Marvel />} />
            <Route path="/marvel" element={<Marvel />} />
            <Route path="/dc" element={<Dc />} />
            <Route path="/search" element={<Search />} />
            <Route path="/heroe/:id" element={<Heroes />} />
            <Route path="/" element={<Navigate to ="/login" />} />
          </Routes>
        </div>
        
    </>
  )
}
export default ModulesRouter;
