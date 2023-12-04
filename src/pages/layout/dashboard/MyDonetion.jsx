import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import {AuthContext} from '../../../provider/AuthProvider';
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Swal from 'sweetalert2';

const MyDonetion = () => {

    const [myReq,setMyReq] =useState([]);
    const axiosPublic=useAxiosPublic();
    const { user } = useContext(AuthContext);

    useEffect(()=>{
        axiosPublic.get(`/donation-req?requesterEmail=${user?.email}`)
        .then(res=>setMyReq(res.data));

    },[axiosPublic,user]);

    const deleteReq=(id)=>{


        Swal.fire({
            title: "Are you sure?",
            text: `You wan't to delete the request!!!`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              
              axiosPublic.delete(`/donation-requests/delete/${id}`)
              .then(res => {
                  window.location.reload();
                  return Swal.fire('Success', 'You successfully deleted the request', 'success')
          
              });
          
            }
          });

    }

    const doneReq=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: `If you got the blood you can proceed.`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
              
              axiosPublic.put(`/update/donetion-req/${id}`,{status:'done'})
              .then(res => {
                  window.location.reload();
                  return Swal.fire('Success', 'You successfully deleted the blog', 'success')
          
              });
          
            }
          });


    }


    return (
        <div className=''>

        <div className="overflow-x-auto lg:px-10">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
        
                                        <th >Name</th>
                                        <th >Location</th>
        
                                        <th >Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
        
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
        
                                    {
                                        myReq.map(req => <tr key={req._id}>
        
                                            <td >
                                                {req?.requesterName}
                                            </td>
                                            <td>
                                                {`${req?.recipientUpazila}, ${req?.recipientDistrict}`}
                                            </td>
                                            <td>{req?.donationDate}</td>
                                            <td >
                                                {req?.donationTime}
                                            </td>
        
                                            <td className={`font-medium ${req?.status=='done'?'text-green-600':req?.status=='inprogress'?'text-orange-500':'text-red-600'}`}>
                                                {req?.status}
                                            </td>
                                            <td className='flex items-center'>
                                                <Link to={`/donation-req/${req?._id}`}>
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">Details</button></Link>
                                                {req?.status=='inprogress'?<>

                                                <button onClick={()=>deleteReq(req?._id)} className='text-red-600 text-3xl btn btn-ghost'><MdDelete /></button>
                                                <button onClick={()=>doneReq(req?._id)} className='text-green-600 text-3xl btn btn-ghost'><IoCheckmarkDoneCircle /></button>
                                                
                                                </>:''}
        
                                            </td>
                                        </tr>)
                                    }
        
        
                                </tbody>
        
        
                            </table>
                        </div>
                    
                </div>
    );
};

export default MyDonetion;