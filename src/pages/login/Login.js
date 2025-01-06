import React, { useState } from 'react'
import ImageLogo from '../../assets/images.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


function Login () {
    const [showPassword,SetShowPassword]=useState(false)
    //SetData pour modifier state w data 
    const [data, SetData]=useState({
        email:"",
        password:"",
    });
    const navigate=useNavigate()
    const HandleChange=async(e)=>{
        const {name,value}=e.target;
        SetData((preve)=> {
            return {
                ...preve,
                [name]: value,
            }
        })
    }

    const handleLogin=async (e)=>{
        e.preventDefault()
        const dataResponse=await fetch(`${process.env.REACT_APP_API_URL}/login`,{
            method:"Post",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const response=await dataResponse.json();
        if (response.success) {
            toast.success(response.message);
            navigate("/admin/users")
        } else{
            toast.error(response.message);
        }
    }

  return (
    <div className='mx-auto container p-6'>
        <ToastContainer position=' top-center'/>
        <div className=' bg-white p-5 w-full max-w-sm mx-auto'>
            <div className=' w-48 h-32 mx-auto'>
                <img src={ImageLogo} alt="logo" />
            </div>
            <form className=' pt-6 flex flex-col gap-2' >
                <div className='grid'>
                    <label> Email: </label>
                    <div className=' bg-slate-100 p-2'>
                        <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        className=' w-full h-full outline-none bg-transparent'
                        onChange={HandleChange}
                        value={data?.email}
                        />
                    </div>

                </div>

                <div >
                    <label> Password: </label>
                    <div className=' bg-slate-100 p-2 flex'>
                        <input
                        type={showPassword? "text":"password"}
                        placeholder='Password'
                        name='password'
                        className=' w-full h-full outline-none bg-transparent'
                        onChange={HandleChange}
                        value={data?.password}
                        />
                      <div className=' cursor-pointer text-xl'
                      onClick={()=>SetShowPassword((preve)=>!preve)}>
                        <span>{showPassword? <FaEyeSlash/> : <FaEye/>} </span>

                      </div>
                    </div>
                </div>
                <button
                onClick={handleLogin}
                className=' bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full mt-6 mx-auto'>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login