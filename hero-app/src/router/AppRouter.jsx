import React from 'react'
import Login from '../screen/auth/Login'
import {Routes, Route, Navigate} from "react-router-dom";
import ModulesRouter from './ModulesRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element = {
          <PublicRouter>
            <Login />
          </PublicRouter>
        } />
          <Route path="/*" element={
            <PrivateRouter>
              <ModulesRouter />
            </PrivateRouter>
          } />
        </Routes>
    </>
  )
}

export default AppRouter
