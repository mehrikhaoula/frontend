import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserTable from '../../components/UserTable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AjouterUser from '../../components/AjouterUser';
import DeleteUser from '../../components/DeleteUser';
import EditUser from '../../components/EditUser';


function AllUsers (){
const[users, SetUsers]=useState([])
const [ajouterUser, SetAjouterUser] = useState(false)
const [viewDelete, SetViewDelete]=useState(false)
const [UserDeleted, SetUserDeleted]=useState(null)
const [selectedUser, SetSelectedUser]=useState(null)
const [isEditing, SetIsEditing]=useState(false)


const getAllUsers= async ()=> {
  try {

    const fetchData=await fetch(`${process.env.REACT_APP_API_URL}/users`,{
      method:"get",
      credentials:"include"
    })
    const response=await fetchData.json()
    if(fetchData.status===200){
      SetUsers(response.result)
    }
    // axios
    // .get(`${process.env.REACT_APP_API_URL}/users`)
    // .then ((Response)=>{
     
    //   SetUsers(Response.data?.result)
    // })
    // .catch((error)=> {
    //   console.log("error",error);
    // });
  } catch (error){
    console.log("error",error);
  }
};

useEffect(()=>{getAllUsers()},[]);

const handelDeleted=(user)=>{
  console.log("userDeleted", user);
  SetUserDeleted(user);
  SetViewDelete(true);
};

const handelCancelDeleted=()=>{
  SetViewDelete(false)
};
const onDeleteUser=async (userId)=>{
try {
  await axios
  .delete(`${process.env.REACT_APP_API_URL}/user/` +userId, {
    headers:{
      "Content-Type": "application/json",
    },
  })
  .then((Response)=>{
    toast.success(Response?.data?.msg);
    getAllUsers();
    SetViewDelete(false);
  })
  .catch((error)=>{
    toast.error(error);
  })
} catch (error) {
  toast.error(error);
}
};

const handleEditUser= (user)=>{
SetSelectedUser(user);
SetIsEditing(true);
};
const handleCancel=()=>{
SetIsEditing(false);
};

const handleUpdateUser=(updateUser)=> {
try {
  axios.put(`${process.env.REACT_APP_API_URL}/user`,
    {
      id:updateUser?._id,
      nom:updateUser?.nom,
      prenom:updateUser?.prenom,
      email:updateUser?.email,
    },
    {
      headers:{
        "Content-Type": "application/json",
      },
    }
  )
  .then((response)=>{
    toast.success(response?.data?.msg);
    getAllUsers();
    SetIsEditing(false);
  })
  .catch((error)=>{
    toast.error(error);
  });
} catch (error) {
  toast.error(error);
}
}
<div>
<ToastContainer /> {ToastContainer}
</div>
  return (
    
    <div className="bg-gray-100 flex items-center justify-center py-10 min-h-screen"> 
        <div className=" w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white py-2 px-4 flex justify-between items-center">
         <h2 className="text-3xl font-medium text-center py-4 text-pink-500">liste des utilisateurs</h2>
          <button className="border-2 border-red-800 hover:bg-red-500 hover:text-white py-1 px-3 rounded-full" 
             onClick={()=> SetAjouterUser(true)}
            >Ajouter Nv User</button>
          </div>
          <div className="md:block">
    <UserTable
    users={users}
    onDelete={handelDeleted}
    onEdit={handleEditUser}
    />
          </div>
        </div>
        {ajouterUser &&(
          <AjouterUser
          fetchdata={getAllUsers}
          onClose={()=> SetAjouterUser(false)}/>
        )}
        {
          viewDelete &&(
            <DeleteUser
            user={UserDeleted}
            onCancel={handelCancelDeleted}
            onDelete={onDeleteUser}
            />
          )}
        { isEditing && (
            <div className=' fixed bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'>
              <EditUser
              user={selectedUser}
              onSave={handleUpdateUser}
              onCancel={handleCancel}
              />
              </div>
        )}
        </div>
  )
}

export default AllUsers