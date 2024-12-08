import React, { useState } from 'react'
import { toast, ToastContainer} from 'react-toastify';
import { CgClose } from "react-icons/cg";
 

function AjouterUser ({onClose,fetchdata}) {
    const [user,SetUser]=useState ({
        nom:"",
        prenom:"",
        email:"",
        password:""
    });
const handleChange=(e)=>{
    const {name,value}=e.target;
    SetUser((prev)=> ({
        ...prev,
        [name]:value,
    })
    );
};
//bech yab3ath formulaire
const handleSubmit = async(e)=>{
    e.preventDefault();
    const reponse=await fetch(`${process.env.REACT_APP_API_URL}/inscrit`,{
        method:"post",
        headers:{
            "content-type":"application/json",
        },
        body: JSON.stringify(user),
        //ou bien par élement body:JSON.stringify({email:user?email})
    });
     //convertir reponse en json
    const reponseData=await reponse.json()
    if(reponseData.success){
        toast.success(reponseData?.msg);
        onClose();
        fetchdata();
    } 
    if(reponseData.error){
        toast.error(reponseData?.msg);
    } 
    if(reponse.status ===302){
        toast.error(reponseData?.msg);
    } 

};
  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[60%] overflow-hidden'>
            <div className='felx justify-between items-center pb-3'>
            <h2 className='font-bold text-lg'>AjouterUser</h2>
            <div className='w-fit ml-auto text-2xl hover:text-red-500 cursor-pointer' onClick={onClose}>
              <CgClose/>
                 </div>
                 </div>
        <form onSubmit={handleSubmit}
         className='grid gap-2 p-4 overflow-y-scroll h-full pb-2'>
            <label htmlFor='UserName'>Nom User</label>
            <input
             type='text'
             id='UserName'
             name='nom'
             value={user?.nom}
             placeholder='Nom User'
             onChange={handleChange}
             required
             className='p-2 bg-slate-100 border rounded'
             />
             <label htmlFor='UserPrenom'>Prénom User</label>
            <input
             type='text'
             id='UserPrenom'
             name='prenom'
             value={user?.prenom}
             placeholder='Prénom User'
             onChange={handleChange}
             required
             className='p-2 bg-slate-100 border rounded'
             />
             <label htmlFor='Useremail'>Email User</label>
            <input
             type='email'
             id='Useremail'
             name='email'
             value={user?.email}
             placeholder='Email User'
             onChange={handleChange}
             required
             className='p-2 bg-slate-100 border rounded'
             />
             <label htmlFor='UserPassword'>Password User</label>
            <input
             type='password'
             id='UserPassword'
             name='password'
             value={user?.password}
             placeholder='Password User'
             onChange={handleChange}
             required
             className='p-2 bg-slate-100 border rounded'
             />

             <button className='px-3 py-2 bg-red-400 text-white mb-10 hover:bg-red-700'>Ajouter User</button>
        </form>
        </div>
    </div>
  );
};

export default AjouterUser