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
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import TermsAndConditions from "../pages/TermsAndConditions";
import ContentManagement from "../pages/layout/dashboard/ContentManagement";
import Blog from "../pages/Blog";
import FullBlog from "../pages/FullBlog";
import DonationRequest from "../pages/DonationRequest";
import DonationDetails from "../pages/DonetionDetails";
import Donate from "../pages/Donate";
import Error from "../pages/Error"


const router = createBrowserRouter([

  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }, {
        path: 'registeration',
        element: <Registration></Registration>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: '/search-doner',
        element: <SearchDoner></SearchDoner>
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path:'/faqs',
        element:<FAQ></FAQ>
      },
      {
        path:'/terms-and-conditions',
        element:<TermsAndConditions></TermsAndConditions>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/blog/:id',
        element:<FullBlog></FullBlog>
      },
      {
        path:'/donation-req',
        element:<DonationRequest></DonationRequest>
      },
      {
        path:'/donation-req/:id',
        element:<PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>
        
      },{
        path:'/donate',
        element:<Donate></Donate>
      }
    ]

  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '',
        element: <DashboardHome></DashboardHome>

      },
      {
        path: 'my-donation-requests',
        element: <MyDonetion></MyDonetion>
      },
      {
        path: 'create-donation-request',
        element: <PrivateRoute><CreateDonetion></CreateDonetion></PrivateRoute>
      },
      {
        path: 'all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'all-blood-donation-request',
        element: <AllBloodDonationRequest></AllBloodDonationRequest>
      },
      {
        path: 'content-management/add-blog',
        element: <AddBlog></AddBlog>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path:'content-management',
        element:<ContentManagement></ContentManagement>
      }
    ]
  }
])

export default router;