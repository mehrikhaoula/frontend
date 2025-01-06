import React, { useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { Link, Outlet,useLocation } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
function AdminPanel () {
const [isOpenMenu,SetIsOpenMenu]=useState(false)
const location=useLocation()
const isActive=(path)=>location.pathname===path
  return (
    <div className=' min-h-[calc(100vh-theme(spacing.16))]  flex-col md:flex-row '>
        <header className=' bg-white p-4 justify-between items-center md:hidden'>
            <div className=' flex items-center'>
             <FaRegCircleUser className=' text-2xl'/>
             <div className='ml-2'>
                <p className=' capitalize text-lg font-semibold'>Admin</p>
                <p className='text-sm'>admin@gmail.com</p>
             </div>
            </div>
            <button onClick={()=>SetIsOpenMenu(!isOpenMenu)}
                className='text-2xl'>
                    {isOpenMenu? <IoIosClose/>:<TiThMenu/>}
            </button>

        </header>
        <aside className=' bg-white min-h-full w-full max-w-60 hidden md:block'>
          <div className=' h-32 flex justify-center items-center felx-col'>
            <div className='text-5xl cursor-pointer relative flex justify-center'>
            <FaRegCircleUser className=' text-2xl'/>
            </div>
            <div className='ml-2'>
                <p className=' capitalize text-lg font-semibold'>Admin</p>
                <p className='text-sm'>admin@gmail.com</p>
             </div>
             <nav className='grid p-4'>
                <Link to="/admin/users"
                className={`flex items-center px-2 py-1 rounded-full mt-2 ${
                    isActive ('/admin/users')?"bg-slate-300":"hover:bg-slate-500"}`}    
                >
                <FaUsers className='mr-2 w-10 h-6'/> Liste des Users
                </Link>

                <Link to="/admin/produits"
                className={`flex items-center px-2 py-1 rounded-full mt-2 ${
                    isActive ('/admin/produits')?"bg-slate-300":"hover:bg-slate-500"}`}    
                >
                <FaProductHunt className='mr-2 w-10 h-6'/> Liste des produits
                </Link>
            
                </nav>
            </div>
          
        </aside>
        <main className=' w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel