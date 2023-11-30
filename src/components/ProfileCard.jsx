import React from 'react';
import useUser from '../hooks/useUser';

const ProfileCard = () => {
    const [DBuser] = useUser();
    return (
        <div className='text-center  shadow-lg card  glass  px-3 py-10'>
            <div className="avatar mx-auto">
                <div className="w-24 rounded-full">
                    <img src={DBuser.profile} />
                </div>
                </div>
                {/* <img className='rounded-full h-24 w-auto mx-auto' src={DBuser.profile} alt="" /> */}
                <h1 className='font-bold text-xl '>{DBuser.name}</h1>
                {/* <div className='flex justify-center text-yellow-400 '>{...ratings}</div> */}
                <p className='pt-4 text-left font-medium  text-red-600'>Blood Group: {DBuser.blood_group} </p>
                <p className='pt-4 text-left font-medium'>District: {DBuser?.district}</p>
                <p className='pt-4 text-left font-medium'>Upazila: {DBuser?.upazila}</p>
                <p className='pt-4 text-left font-medium'>Role: {DBuser?.role}</p>
                <p className='pt-4 text-left font-medium'>Status: <span className={`${DBuser?.status=='active'?'text-green-600':'text-red-600'}`}>{DBuser?.status}</span> </p>





                {/* <p className=' text-justify'>{info.feedback}</p> */}

            </div>
            );
};

            export default ProfileCard;