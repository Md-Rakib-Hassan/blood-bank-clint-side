import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaEllipsis } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
const AllUsers = () => {
    const [doners, setDoners] = useState([]);
    const axiosPublic = useAxiosPublic();
   

        useEffect(()=>{
            axiosPublic.get(`/search-doner`)
            .then(res => setDoners(res.data));
        },[axiosPublic]);


        const changeRole=(rl,id)=>{

            
            Swal.fire({
                title: "Are you sure?",
                text: `You won't revert your changes`,
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                  
                  axiosPublic.put(`/update-role/${id}`,{role:rl})
                  .then(res => {
                      window.location.reload();
                      return Swal.fire('Success', 'You successfully change the role', 'success')
              
                  });
              
                }
              });
    
    
    
            }


            const changeStatus=(rl,id)=>{

            
                Swal.fire({
                    title: "Are you sure?",
                    text: `You want to ${rl} the user!!!`,
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      
                      axiosPublic.put(`/status/${id}`,{status:rl})
                      .then(res => {
                          window.location.reload();
                          return Swal.fire('Success', `You successfully ${rl} the user.`, 'success')
                  
                      });
                  
                    }
                  });
        
        
        
                }


                const deletUser=(id)=>{

            
                    Swal.fire({
                        title: "Are you sure?",
                        text: `You want to delete the user!!!`,
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          
                          axiosPublic.delete(`/users/delete/${id}`)
                          .then(res => {
                              window.location.reload();
                              return Swal.fire('Success', `You successfully delete the user.`, 'success')
                      
                          });
                      
                        }
                      });
            
            
            
                    }


        
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
                                    <th className={`${doner?.status=='active'?'text-green-600':'text-red-600'}`}>
                                        {doner?.status}
                                    </th>
                                    <td><div className="dropdown">
                                        <div  tabIndex={0} role="button"><FaEllipsis /></div>
                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                            {doner.role == 'donor' && <>
                                                <li><button onClick={()=>changeRole('volunteer',doner?._id)}>Make volunteer</button></li>
                                                <li><button onClick={()=>changeRole('admin',doner?._id)}>Make admin</button></li>
                                                <li><button onClick={()=>changeStatus(`${doner?.status=='active'?'block':'active'}`,doner?._id)}>{doner?.status=='active'?'Block':'Unblock'} User</button></li>
                                                <li><button onClick={()=>deletUser(doner?._id)}>Delete User</button></li>
                                                </>}
                                            {doner.role == 'volunteer' && <>
                                            <li><button onClick={()=>changeRole('admin',doner?._id)}>Make admin</button></li>
                                                <li><button onClick={()=>changeStatus(`${doner?.status=='active'?'block':'active'}`,doner?._id)}>{doner?.status=='active'?'Block':'Unblock'} User</button></li>
                                                <li><button onClick={()=>deletUser(doner?._id)}>Delete User</button></li>
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