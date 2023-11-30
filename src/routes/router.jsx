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
import AllUsers from "../pages/layout/dashboard/AllUsers";
import AllBloodDonationRequest from "../pages/layout/dashboard/AllBloodDonationRequest";
import AddBlog from "../pages/layout/dashboard/AddBlog";
import Profile from "../pages/layout/dashboard/Profile";
import PrivateRoute from "./PrivateRoute";


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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
          element:<PrivateRoute><CreateDonetion></CreateDonetion></PrivateRoute>
        },
        {
          path:'all-users',
          element:<AllUsers></AllUsers>
        },
        {
          path:'all-blood-donation-request',
          element:<AllBloodDonationRequest></AllBloodDonationRequest>
        },
        {
          path:'content-management/add-blog',
          element:<AddBlog></AddBlog>
        },
        {
          path:'profile',
          element:<Profile></Profile>
        }
      ]
    }
  ])

  export default router;