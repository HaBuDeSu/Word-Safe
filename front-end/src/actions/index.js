import axios from 'axios'
import { axiosWithAuth } from '../components/axiosWithAuth.js'

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = (data, props) => dispatch => {
  dispatch({ type: REGISTER_USER_START })
  axios
    .post('http://localhost:4000/api/users', data)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.message })
      props.history.push('/sign-in')
    })
    .catch(err => dispatch({ type: REGISTER_USER_FAILURE, payload: err }))
}
