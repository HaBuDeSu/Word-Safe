import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import useForm from '../hooks/useForm'

const UserRegistrationForm = () => {

  const {handleSubmit, handleChange, values} = useForm(register)

  function register() {
    console.log(values)
  }

  return (
    <div className="user-registration-form">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input id="username" name="username" placeholder="Username" value={values.username} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input id="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
        </FormGroup>
        <Button color="primary">Create Your WordSafe</Button>
      </Form>
    </div>
  )
}

export default UserRegistrationForm
