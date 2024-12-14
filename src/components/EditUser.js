import React, { useEffect, useState } from 'react'

function EditUser ({user,onSave,onCancel}) {
    const [editUser, SetEditUser]=useState(user)
    useEffect(()=>{
        SetEditUser(user)
    },[user])
    const handlechange=(e)=>{
        const {name,value}=e.target;
        SetEditUser((prevuser)=>({
            ...prevuser,
            [name]:value,
        }));
    };

    const handlesave=()=>{
        onSave(editUser)
    }
  return (
    <div className=' bg-white p-6 shadow-lg rounded-lg'>
        <h3 className=' text-xl font-semibold mb-4'>modifier User</h3>
        <div className=' space-y-4'>
            <div>
                <label className=' block text-sm font-medium'>Nom</label>
                <input
                type='text'
                name='nom'
                value={editUser?.nom} 
                onChange={handlechange}
                className=' w-full p-2 horder border-gray-300 rounded-lg'               
                />
            </div>
            <div>
                <label className=' block text-sm font-medium'>Prenom</label>
                <input
                type='text'
                name='prenom'
                value={editUser?.prenom} 
                onChange={handlechange}
                className=' w-full p-2 horder border-gray-300 rounded-lg'               
                />
            </div>
            <div>
                <label className=' block text-sm font-medium'>Email</label>
                <input
                type='email'
                name='email'
                value={editUser?.email} 
                onChange={handlechange}
                className=' w-full p-2 horder border-gray-300 rounded-lg'               
                />
            </div>
            <div className=' flex justify-end space-x-4 mt-4'>
                <button
                className=' bg-gray-500 text-white px-4 py-2 rounded-lg'
                onClick={onCancel}
                >
                    Annuler
                </button>
                <button
                className=' bg-blue-600 text-white px-4 py-2 rounded-lg'
                onClick={handlesave}
                >
                    Modifier
                </button>

            </div>

        </div>
        </div>
  )
}

export default EditUser