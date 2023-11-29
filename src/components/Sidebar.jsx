
import {FaHouseMedical, FaNotesMedical, FaSliders } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { BiSolidDonateBlood } from "react-icons/bi";
import { ImExit } from "react-icons/im";

const Sidebar = ({children}) => {

    const DonerSidebar= <>
    <li><NavLink to={'/dashboard' } end ><a className="flex items-center gap-3"><FaHome></FaHome>Home</a></NavLink></li>
    <li><NavLink to={'/dashboard/my-donation-requests' } end ><a className="flex items-center gap-3"> <BiSolidDonateBlood /> My donation Request</a></NavLink></li>
    <li><NavLink to={'/dashboard/create-donation-request' } end ><a className="flex items-center gap-3">  <FaNotesMedical />Create Donetion Request</a></NavLink></li>
    <li ><NavLink to={'/' } end ><a className="flex items-center gap-3"> <ImExit />Back to main Page</a></NavLink></li>
    </>

// const VolenteerSidebar= <>
// <li><NavLink to={'/dashboard' } end ><a className="flex items-center gap-3"><FaHome></FaHome>Home</a></NavLink></li>
// <li><NavLink to={'/dashboard/my-donation-requests' } end ><a className="flex items-center gap-3"> <BiSolidDonateBlood /> My donation Request</a></NavLink></li>
// <li><NavLink to={'/dashboard/create-donation-request' } end ><a className="flex items-center gap-3">  <FaNotesMedical />Create Donetion Request</a></NavLink></li>
// <li ><NavLink to={'/' } end ><a className="flex items-center gap-3"> <ImExit />Back to main Page</a></NavLink></li>
// </>



    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
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