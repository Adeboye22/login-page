import React, { useState } from 'react';
import axios from 'axios';
import Validate from './loginValidation';
import Navbar from './navbar';

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
    <div>
      <Navbar />
      <main className='bg-blue p-16 min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-white'>user email: </label>
          <input type="email" name='email' onChange={handleInput} placeholder="youremail@gmail.com" className='border border-gray p-1'/>
          {error.email && <span className = 'text-red'>{error.email}</span>}
          <label htmlFor="" className='text-white'>password: </label>
          <input type="password" name="password" onChange={handleInput} placeholder="*********" className='border border-gray-100 p-1'/>
          {error.password && <span className = 'text-red'>{error.password}</span>}
          <div className='grid'>
            <button className='bg-white p-2 border-gray border w-64 place-self-center rounded mt-4' type='submit'>Log In</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default UserLogin
