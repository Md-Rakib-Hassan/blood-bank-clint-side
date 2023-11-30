import { NavLink,Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {


  const context = useContext(AuthContext);
    const { user, logOut } = context;
  
  const navElement = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/donation-req'}>Donation Request</NavLink></li>
    <li> <NavLink to={'/blog'}>Blog</NavLink></li>
    <li> <NavLink to={'/testimonials'}>Donate</NavLink></li>
    <li> <NavLink to={'/Events-and-Activities'}>Events and Activities</NavLink></li>
    <li> <NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    
    
  </>





  return (
    <div className="navbar  bg-white bg-opacity-20  top-0 z-[1000]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={10} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={10} className="menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
           {
            navElement
           }
          </ul>
        </div>
        <Link to={'/'}><img src="hotel-logo.png" className="h-16 hidden lg:block" alt="" /></Link>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navElement
          }
        </ul>
      </div>
      <div className="navbar-end">
                <div className=" hidden md:flex  ">

                    <div className=' flex justify-end items-center' >

                        {
                            user && <p className='mr-4 '>{user?.displayName}</p>
                        }
                        {
                            user == null ? <Link to={'/login'}><button className="btn">Login</button></Link> : <div className="dropdown dropdown-end ">
                                <label tabIndex={10} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 h-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={10} className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><Link to={'/dashboard'}><button >Dashboard</button></Link></li>
                                    <li><button onClick={logOut}>Logout</button></li>
                                </ul>
                            </div>
                        }


                    </div>

                   

                </div>

                
                {user != null ? <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={10} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={10} className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><button>{user?.displayName}</button></li>
                        <li><button onClick={logOut}>Logout</button></li>
                    </ul>
                </div> : <Link to={'/login'}><button className="btn md:hidden">Login</button></Link>}

               


            </div>
    </div>
  );
};

export default Navbar;