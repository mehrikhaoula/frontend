import React from "react";
const UserTable=({users,onEdit,onDelete})=> {
    return(
        <table className="min-w-full bg-white table-auto">
            <thead>
                <tr className="text-left border-b bg-gray-400">
                    <th className="px-6 py-3 text-sm font-medium text-gray-800">#</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-800">Nom</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-800">Prenom</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-800">Email</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-800">Action</th>
                </tr>

            </thead>
            <tbody>
                {users?.map((user,index)=>(
                        <tr key={user?._id} className="bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-700">{index+1}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{user?.nom}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{user?.prenom}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{user?.email}</td>
                            <td className="px-6 py-4 text-sm">
                                <button className="text-blue-600 hover:text-blue-950"
                                onClick={()=>onEdit(user)}
                                
                                > modifier
                                </button>
                                <button className="text-red-700 hover:text-red-900"
                                onClick={()=> onDelete (user)}>
                                
                                supprimer</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default UserTable