
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import axios from 'axios';
import UserTable from './components/UserTable';
import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AjouterUser from './components/AjouterUser';
import DeleteUser from './components/DeleteUser';

function App() {
  
  const[users, SetUsers]=useState([]);
  const [ajouterUser, SetAjouterUser] = useState(false)
  const [viewDelete, SetViewDelete]=useState(false)
  const [UserDeleted, SetUserDeleted]=useState(null)

  const getAllUsers= async ()=> {
    try {
      axios
      .get(`${process?.env?.REACT_APP_API_URL}/users`)
      .then ((Response)=>{
        console.log("listUsers",Response.data?.result);
        SetUsers(Response.data?.result)
      })
      .catch((error)=> {
        console.log("error",error);
      });
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
onEdit={()=>{}}
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
    </div>
  );
}

export default App;
