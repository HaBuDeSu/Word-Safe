import React from 'react'
import LoginForm from './LoginForm.js'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="Login">
      <h1>Welcome to WordSafe</h1>
      <LoginForm />
      <Link to='/signup'>New to WordSafe? Create an Account.</Link>
    </div>
  )
}

export default Login
