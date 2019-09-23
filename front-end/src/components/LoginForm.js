import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import useForm from '../hooks/useForm'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const LoginForm = () => {

  const {redirect, setRedirect} = useState(false)

  const {error, setError} = useState(false)

  const {handleSubmit, handleChange, values} = useForm(login)

  function login() {
    axios.post('http://localhost:3000/api/users/login', values)
    .then(res => setRedirect(true))
    .catch(error => setError(true))
  }

  if (redirect === true) {
    return <Redirect to="/wordsafe"/>
  } else {
    return (
      <div className="login-form">
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input id="username" name="username" placeholder="Username" value={values.username} onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange}/>
          </FormGroup>
          <Button color="primary">Login</Button>
        </Form>
        {error === true ? <p>Login Unsuccessful</p> : null}
      </div>
    )
  }
}

export default LoginForm
