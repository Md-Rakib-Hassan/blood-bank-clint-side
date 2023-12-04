import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const DonationRequest = () => {
    const [pendingReq,setPendingReq] =useState([]);
    const axiosPublic=useAxiosPublic();

    useEffect(()=>{
        axiosPublic.get(`/donation-req?status=pending`)
        .then(res=>setPendingReq(res.data));

    },[axiosPublic]);

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
                                pendingReq.map(req => <tr key={req._id}>

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
                                    <td >
                                        <Link to={`/donation-req/${req?._id}`}>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">Details</button></Link>
                                        

                                    </td>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            
        </div>
    );
};

export default DonationRequest;