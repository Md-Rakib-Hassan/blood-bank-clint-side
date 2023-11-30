
import { FaNotesMedical, FaSliders, FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiSolidDonateBlood } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import useUser from "../hooks/useUser";
import { SiBlogger } from "react-icons/si";
import { GiDroplets } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ children }) => {
    const [DBuser] = useUser();
    const role = DBuser?.role;

    const DonerSidebar = <>
        <li><NavLink to={'/dashboard'} end ><a className="flex items-center gap-3"><FaHome></FaHome>Home</a></NavLink></li>
        <li><NavLink to={'/dashboard/profile'} end ><a className="flex items-center gap-3"><CgProfile></CgProfile>Profile</a></NavLink></li>
        <li><NavLink to={'/dashboard/my-donation-requests'} end ><a className="flex items-center gap-3"> <BiSolidDonateBlood /> My donation Request</a></NavLink></li>
        <li><NavLink to={'/dashboard/create-donation-request'} end ><a className="flex items-center gap-3">  <FaNotesMedical />Create Donetion Request</a></NavLink></li>
        {
            role == 'admin' ? <>
                <li><NavLink to={'/dashboard/all-users'} end ><a className="flex items-center gap-3">  <FaUsers />All Users</a></NavLink></li>

            </> : ''
        }
        {
            role == 'admin' || role == 'volenteer' ? <>
                <li><NavLink to={'/dashboard/all-blood-donation-request'} end ><a className="flex items-center gap-3">  <GiDroplets />All Blood Donetion Request</a></NavLink></li>

                <li><NavLink to={'/dashboard/content-management/add-blog'} end ><a className="flex items-center gap-3">  <SiBlogger />Add Blog</a></NavLink></li>


            </> : ''
        }
        <li ><NavLink to={'/'} end ><a className="flex items-center gap-3"> <ImExit />Back to main Page</a></NavLink></li>
    </>





    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {children}
                    <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-2xl p-4"><FaSliders /></label>


                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {DonerSidebar}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Sidebar;