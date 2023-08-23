import React from 'react';
import {useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const NavLogin = () => {
        return (
            navigate('/')
        )
    }
    const NavSign = () => {
        navigate('/createUser')
        // window.location.href= "https://web.whatsapp.com/"
        // window.open("https://web.whatsapp.com/")
    }
  return (
    <div className='bg-white min-w-fit'>
      <header className='flex flex-row justify-between p-6'>
        <h1 className='ml-0.5 text-xl font-bold text-gray'>Basalt/Mole App</h1>
        <div className='mr-0.5'>
            <button onClick={NavLogin} className='text-white mr-6 bg-blue py-2 px-4 rounded'>Login</button>
            <button onClick={NavSign} className='text-gray'>Sign Up</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
