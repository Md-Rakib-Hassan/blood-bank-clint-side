// src/DonationDetails.js
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const DonationDetails = () => {
    const axiosPublic=useAxiosPublic();
    const {id}=useParams();
    const [details,setDetails]=useState([]);
    const {user}=useContext(AuthContext);


    useEffect(()=>{
        axiosPublic.get(`/donation-req?id=${id}`)
        .then(res=>setDetails(res.data[0]));

    },[axiosPublic,id]);

    console.log(details);

    const handleDonate=()=>{

        

Swal.fire({
  title: "Are you sure?",
  text: `Doner Name: ${user?.displayName},  Email: ${user?.email}`,
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Donate."
}).then((result) => {
  if (result.isConfirmed) {
    
    axiosPublic.put(`/update/donetion-req/${id}`,{status:'inprogress'})
    .then(res => {
        window.location.reload();
        return Swal.fire('Success', 'You successfully deleted the blog', 'success')

    });

  }
});


    }

   


  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg max-w-2xl rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Donation Details</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <span className="text-gray-500">Requester Name:</span>
            <p className="text-lg font-semibold">{details?.requesterName}</p>
          </div>

          <div className="mb-4">
            <span className="text-gray-500">Recipient Name:</span>
            <p className="text-lg font-semibold">{details?.recipientName}</p>
          </div>

          <div className="mb-4">
            <span className="text-gray-500">Hospital Name:</span>
            <p className="text-lg font-semibold">{details?.hospitalName}</p>
          </div>

          <div className="mb-4">
            <span className="text-gray-500">Blood Group:</span>
            <p className="text-lg font-semibold">{details?.blood_group}</p>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <span className="text-gray-500">Requester Email:</span>
            <p className="text-lg font-semibold">{details?.requesterEmail}</p>
          </div>

          <div className="mb-4">
            <span className="text-gray-500">Recipient District:</span>
            <p className="text-lg font-semibold">{details?.recipientDistrict}</p>
          </div>

          <div className="mb-4">
            <span className="text-gray-500">Recipient Upazila:</span>
            <p className="text-lg font-semibold">{details?.recipientUpazila}</p>
          </div>

          <div className="mb-4">
            <span className="text-gray-500">Full Address:</span>
            <p className="text-lg font-semibold">{details?.fullAddress}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4">
          <span className="text-gray-500">Donation Date:</span>
          <p className="text-lg font-semibold">{details?.donationDate}</p>
        </div>

        <div className="mb-4">
          <span className="text-gray-500">Donation Time:</span>
          <p className="text-lg font-semibold">{details?.donationTime}</p>
        </div>

        <div className="mb-4">
          <span className="text-gray-500">Request Message:</span>
          <p className="text-lg font-semibold">{details?.requestMessage}</p>
        </div>

        <div className="mb-4">
          <span className="text-gray-500">Status:</span>
          <p className="text-lg font-semibold">{details?.status}</p>
        </div>
      </div>

      <div className='flex justify-center'>
      <button onClick={handleDonate} className={`${details?.status != 'pending'?'hidden':''}bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 `}>Donate</button>
      </div>
      
    </div>
  );
};

export default DonationDetails;
