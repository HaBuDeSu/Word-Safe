import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import useForm from '../hooks/useForm'

const LoginForm = () => {

  const {handleSubmit, handleChange, values} = useForm(login)

  function login() {
    console.log(values)
  }

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
    </div>
  )
}

export default LoginForm
