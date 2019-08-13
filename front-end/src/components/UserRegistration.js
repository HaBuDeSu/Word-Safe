import React from 'react'
import UserRegistrationForm from './UserRegistrationForm'
import { Link } from 'react-router-dom'

const UserRegistration = () => {
  return(
    <div>
      <h1>Welcome to WordSafe</h1>
      <p>Register an Account to Get Started</p>
      <UserRegistrationForm />
      <Link to='/'>Already have an account? Log in.</Link>
    </div>
  )
}

export default UserRegistration
