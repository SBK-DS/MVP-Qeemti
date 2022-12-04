import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isAdmin, setAdmin] = useState(false)


  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, success } = userRegister

  useEffect(() => {
    if (success) {
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  }, [success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(register(name, email, password, isAdmin))
    }
  }
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {success && (
        <Message variant='success'>User has registered successfully</Message>
      )}
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader></Loader>}
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='name' className='text-danger'>Name</label>
          <input
            type='text'
            placeholder='Enter name'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='text-danger'>Email Address</label>
          <input
            type='email'
            placeholder='Enter email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' className='text-danger'>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword' className='text-danger'>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm password'
            className='form-control'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(e) => setAdmin(e.target.checked)} />
          <label class="form-check-label" for="exampleCheck1">Are You Admin?</label>
        </div>

        <button type='submit' className='btn btn-info'>
          Sign Up
        </button>
      </form>

      <div className='row py-3'>
        <div className='col'>
          Have an Account?
          <Link to='/login' className='text-danger'> Login</Link>
        </div>
      </div>
    </FormContainer>
  )
}

export default RegisterScreen
