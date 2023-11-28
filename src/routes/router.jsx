import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import Registration from "../pages/authentication/Registration";
import Login from "../pages/authentication/Login";


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
        }
    ]
    
    }
  ])

  export default router;