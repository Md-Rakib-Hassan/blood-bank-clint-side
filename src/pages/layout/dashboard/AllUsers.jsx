import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaEllipsis } from "react-icons/fa6";
import toast from 'react-hot-toast';
const AllUsers = () => {
    const [doners, setDoners] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic.get(`/search-doner`)
        .then(res => setDoners(res.data));
    return (
        <div>

            <div className=''>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className="text-center">Name</th>
                                <th >upazila</th>

                                <th >Blood Group</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                doners.map(doner => <tr key={doner._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={doner.profile} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{doner.name}</div>
                                                <div className="text-sm opacity-50">{doner.district}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {doner.upazila}
                                    </td>
                                    <td>
                                        {doner.blood_group}
                                    </td>
                                    <td>{doner.role}</td>
                                    <th className="text-green-600">
                                        {doner.status}
                                    </th>
                                    <td><div className="dropdown">
                                        <div tabIndex={0} role="button"><FaEllipsis /></div>
                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                            {doner.role == 'donor' && <><li><a>Make volunteer</a></li>
                                                <li><a>Make admin</a></li>
                                                <li><a>Delete User</a></li></>}
                                            {doner.role == 'volunteer' && <>
                                                <li><a>Make admin</a></li>
                                                <li><a>Delete User</a></li>
                                            </>}
                                           

                                        </ul>
                                    </div></td>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>





            </div>


        </div>



    );
};

export default AllUsers;