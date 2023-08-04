import React, { useState } from 'react'

const UserLogin = () => {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })

  const handleInput = e =>{
    setValue(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='bg-slate-100 p-16'>
      <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <label htmlFor="email">user email: </label>
        <input type="email" name='email' onChange={handleInput} placeholder="youremail@gmail.com" className='border border-gray-100 p-1'/>
        <label htmlFor="">password: </label>
        <input type="password" name="password" onChange={handleInput} placeholder="*********" className='border border-gray-100 p-1'/>
        <button className='bg-white p-2 border-gray-100 border' type='submit'>Log In</button>
      </form>
      </>
    </div>
  )
}

export default UserLogin
