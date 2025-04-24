import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdNotifications } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'

function Header () {
  const [menuDisplay,setMenuDisplay]=useState(false)
  return (
    <header className=' h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
        <div>
          <Link to="/">Dashboard Admin</Link>
        </div>
        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
            <IoMdNotifications/>
            <span className='absolute top-0 right-0 transform translate-x-1/2 translate-y-2/2 bg-red-500 text-white text-justify'>0</span>
          </div>
        </div>
        <div className='relative flex justify-center'>
          <div className=' text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay((preve)=>!preve)}>
            <FaRegUserCircle/>
          
          </div>
          {menuDisplay &&(
            <div className='absolute bg-white bottom-0 top-11 h-fit p-4 shadow-lg rounded w-auto md:w-auto'>
              <nav>
                <div className='flex items-center space-x-2 md:space-x-4'
                onClick={()=>setMenuDisplay((preve)=>!preve)}>
                  <FaHome/>
                  <Link to={"/admin/users"} className=' whitespace-nowrap hover:bg-slate-100'>
                  Dashboard Admin
                  </Link>
                </div>
              </nav>

            </div>
          )}
        </div>
        <div>
        <Link to={"/"} className=' px-3 py-1 rounded-full text-wrap bg-red-600 hover:bg-red-700'>
                  LogOut
                  </Link>
        </div>
      </div>
    </header>
  )
}

export default Header