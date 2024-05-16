import React, { useContext } from 'react'
import AuthContext from '../context/login/AuthContext'
import { Navigate } from 'react-router-dom';

const PublicRouter = ({children}) => {
    const {authState} = useContext(AuthContext);
    const {logged} = authState;
    return !logged ? children : <Navigate to ="/marvel" />
}

export default PublicRouter
