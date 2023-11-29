import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import Registration from "../pages/authentication/Registration";
import Login from "../pages/authentication/Login";
import SearchDoner from "../pages/SearchDoner";
import Dashboard from "../pages/layout/Dashboard";
import DashboardHome from "../pages/layout/dashboard/DashboardHome";
import MyDonetion from "../pages/layout/dashboard/MyDonetion";
import CreateDonetion from "../pages/layout/dashboard/CreateDonetion";


  const router = createBrowserRouter([

    {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },{
            path:'registeration',
            element:<Registration></Registration>,
        },
        {
          path:'login',
          element:<Login></Login>,
        },
        {
          path:'/search-doner',
          element:<SearchDoner></SearchDoner>
        }
    ]
    
    },

    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'home',
          element:<DashboardHome></DashboardHome>

        },
        {
          path:'my-donation-requests',
          element:<MyDonetion></MyDonetion>
        },
        {
          path:'create-donation-request',
          element:<CreateDonetion></CreateDonetion>
        }
      ]
    }
  ])

  export default router;