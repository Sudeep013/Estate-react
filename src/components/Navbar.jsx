import React from 'react'

function Navbar() {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <i className='text-white text-3xl font-bold' >E-State</i>
            <ul className='hidden md:flex gap-7 text-white'> 
                <a href="#Header" className='cursor-pointer 
                hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer 
                hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer 
                hover:text-gray-400'>Projects</a>
                <a href="#Contact" className='cursor-pointer 
                hover:text-gray-400'>Contact</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
            <button className='md:hidden w-7 text-white text-3xl'>&#9776;</button>
        </div>
    </div>
  )
}

export default Navbar