import React, { useState } from 'react';
import axios from 'axios';
import './signupValidation';
import Validate from './signupValidation';
import Navbar from './navbar'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  // this objects stores the user data
  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  // use this hook to route to the UserLogin page
  const navigate = useNavigate();

  // This object collects the error data
  const [errors, setErrors] = useState({})

  // This function collects the user data
  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setValue(prev => {
      return {...prev, [name]: value}
    })
  }

  // This function validates users data then redirect to UserLogin page if successful
  const handleSubmit= (e) => {
    e.preventDefault();
    setErrors(Validate(value));
    axios.post('http://localhost:8080/register', value)
    .then(response => {
      console.log(response);
      navigate('/')
    })
    .catch(err => console.log(err))
  }  
  return (
    <div>
      <Navbar />
      <main className='bg-blue p-16 min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <h3 className='text-white'>First Name:</h3>
          <input type="text" name='firstname' onChange={handleInput} placeholder='first name' 
          className='border border-gray p-1 text-white'/>
          {errors.firstname && <span className="text-red">{errors.firstname}</span>}
          <h3 className='text-white'>Last Name:</h3>
          <input type="text" name='lastname' onChange={handleInput} placeholder='last name' className='border border-gray p-1'/>
          {errors.lastname && <span className="text-red">{errors.lastname}</span>}
          <h3 className='text-white'>Email:</h3>
          <input type="email" name='email' onChange={handleInput} placeholder='email' className='border border-gray p-1'/>
          
          {errors.email && <span className = 'text-red'>{errors.email}</span>}
          <h3 className='text-white'>Password:</h3>
          <input type="password" name='password' onChange={handleInput} placeholder='**********' className='border border-gray p-1'/>
          {errors.password && <span className = 'text-red'>{errors.password}</span>}
          <div className='grid'>
          <button type="submit" className='bg-white p-2 border-gray border w-64 rounded place-self-center'>Submit</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default CreateUser