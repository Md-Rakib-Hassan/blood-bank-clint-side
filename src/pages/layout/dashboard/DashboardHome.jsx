import useUser from '../../../hooks/useUser';
import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaEllipsis } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const [DBuser] = useUser();
    const [allReq, setAllReq] = useState([]);
    const [doners, setDoners] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [myReq, setMyReq] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axiosPublic.get(`/donation-req?requesterEmail=${user?.email}`)
            .then(res => setMyReq(res.data));

    }, [axiosPublic, user]);
    axiosPublic.get(`/search-doner`)
        .then(res => setDoners(res.data));


    useEffect(() => {
        axiosPublic.get(`/donation-req`)
            .then(res => setAllReq(res.data));

    }, [axiosPublic]);

    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold mb-8">Dashboard Home</h2>

                {/* Welcome Section */}
                <div className="bg-white rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">Welcome, {DBuser?.name}!</h3>
                    <p className="text-gray-700">
                        Thank you for being a part of our Blood Donation community. Your contributions make a significant impact. Here you can manage your donation requests and stay connected with other donors.
                    </p>
                </div>

                {/* Statistics Cards */}
                {DBuser?.role=='admin' &&  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {/* Total Users Card */}
                    <div className="bg-white rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-2">Total Users</h4>
                        <p className="text-gray-700">{doners?.length}</p>
                    </div>

                    {/* Total Funding Card */}
                    <div className="bg-white rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-2">Total Funding</h4>
                        <p className="text-gray-700">$150</p>
                    </div>

                    {/* Total Blood Donation Requests Card */}
                    <div className="bg-white rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-2">Total Blood Donation Requests</h4>
                        <p className="text-gray-700">{allReq.length}</p>
                    </div>
                </div>}
               

                {/* Quick Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* My Donation Requests Link */}
                    <a href="/dashboard/my-donation-requests" className="bg-white rounded-lg p-6 block">
                        <h4 className="text-lg font-semibold mb-2">My Donation Requests</h4>
                        <p className="text-gray-700">View and manage your donation requests.</p>
                    </a>

                    {/* Create Donation Request Link */}
                    <a href="/dashboard/create-donation-request" className="bg-white rounded-lg p-6 block">
                        <h4 className="text-lg font-semibold mb-2">Create Donation Request</h4>
                        <p className="text-gray-700">Create a new donation request and reach out to donors.</p>
                    </a>
                </div>
            </div>
            {
                myReq.length>0 && <div className="overflow-x-auto lg:px-10">
                    <h4 className="text-lg font-semibold mb-2">Your Recents Donation Request</h4>
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
                                    

                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
            }
        </div>
    );
};

export default DashboardHome;