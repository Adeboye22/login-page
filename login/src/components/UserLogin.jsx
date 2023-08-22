import React, { useState } from 'react';
import axios from 'axios';
import Validate from './loginValidation';

const UserLogin = () => {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({});

  const handleInput = e => {
    setValue(prev => {
      return {...prev, [e.target.name]: [e.target.value]}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validate(value))
    axios.post('http://localhost:8080/register', value)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  return (
    <div className='bg-slate-100 p-16'>
      <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <label htmlFor="email">user email: </label>
        <input type="email" name='email' onChange={handleInput} placeholder="youremail@gmail.com" className='border border-gray-100 p-1'/>
        {error.email && <span className = 'text-red-500'>{error.email}</span>}
        <label htmlFor="">password: </label>
        <input type="password" name="password" onChange={handleInput} placeholder="*********" className='border border-gray-100 p-1'/>
        {error.password && <span className = 'text-red-500'>{error.password}</span>}
        <button className='bg-white p-2 border-gray-100 border' type='submit'>Log In</button>
      </form>
      </>
    </div>
  )
}

export default UserLogin
