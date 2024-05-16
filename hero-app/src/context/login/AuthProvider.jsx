import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../../types/types'
const initialStaste = {
    logged : false
}

const init = () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user
  }
}
const AuthProvider = ({children}) => {
    const [authState, dispatch]  = useReducer(authReducer, initialStaste, init);
    const callLogin = (name = '') =>{
      const user = {
        id: 'ABC',
        name
      }
      const action = {
        type: types.login,
        payload: user
      }
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(action);
    }
    const callLogout = () =>{
      localStorage.removeItem('user');
      const action = {
        type: types.logout,
        payload: {
          logged: false,
          user: {}
        }
      }
      dispatch(action);
    }    
  return (
    <AuthContext.Provider value = {{authState, callLogin, callLogout}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
