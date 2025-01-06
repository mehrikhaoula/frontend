import {createBrowserRouter, } from 'react-router-dom'
import Login from '../pages/login/Login'
import AllUsers from '../pages/users/AllUsers'
import Produits from '../pages/produits/Produits'
import AdminPanel from '../pages/dashbord/AdminPanel'
import App from '../App'
const router=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"",
        element:<App/>,
        children:[
           {
                path:'admin',
                element:<AdminPanel/>,
                children:[
                    {
                        path:"users",
                        element:<AllUsers/>
                    },
                    {
                        path:"produits",
                        element:<Produits/>
                    },
                ]
            }
        ]

    },
{
        path:"/users",
        element:<AllUsers/>,
    },
    
]
)






export default router