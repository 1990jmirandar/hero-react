import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/login/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { callLogin } = useContext(AuthContext);
  const handleLogin = () =>{
    callLogin('Javier Miranda')
    navigate("/marvel", {
      replace: true
    })
  }
  return (
    <div className='container m-5'>
        <h1>Login</h1>
        <hr />
        <button className='btn btn-primary' onClick={ handleLogin }>Iniciar</button>
    </div>
  )
}

export default Login
