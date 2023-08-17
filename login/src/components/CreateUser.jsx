import React, { useState } from 'react'
import axios from 'axios'
import './signupValidation'
import sgnValidate from './signupValidation';

const CreateUser = () => {
  const [value, setValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState({})

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setValue(prev => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    setErr(sgnValidate(value));
    axios.post('http://localhost:8080/register', value)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err))
  }  
  return (
    <div className='bg-slate-100 p-16'>
      {/* <input type="image" src="" alt="" /> */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h3>First Name:</h3>
        <input type="text" name='firstname' onChange={handleInput} placeholder='first name' className='border border-gray-100 p-1'/>
        <h3>Last Name:</h3>
        <input type="text" name='lastname' onChange={handleInput} placeholder='last name' className='border border-gray-100 p-1'/>
        <h3>Email:</h3>
        <input type="email" name='email' onChange={handleInput} placeholder='email' className='border border-gray-100 p-1'/>
        <h3>Password:</h3>
        <input type="password" name='password' onChange={handleInput} placeholder='**********' className='border border-gray-100 p-1'/>
        <button type="submit" className='bg-white p-2 border-gray-100 border w-full'>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
