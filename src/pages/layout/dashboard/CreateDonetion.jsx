import React, { useContext, useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';

const CreateDonetion = () => {
    const { user } = useContext(AuthContext);
    const [DBuser] = useUser();
    // console.log(DBuser);
    const [formData, setFormData] = useState({
        requesterName: `${user?.displayName}`,
        requesterEmail: `${user?.email}`,
        recipientName: '',
        recipientDistrict: '',
        recipientUpazila: '',
        hospitalName: '',
        fullAddress: '',
        blood_group: '',
        donationDate: '',
        donationTime: '',
        requestMessage: '',
    });

    const axiosPublic = useAxiosPublic();
    const { register, watch, } = useForm();
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);

    const watchDistrict = watch('district')
    const districtCode = watchDistrict ? watchDistrict.split(",") : '';

    useEffect(() => {
        axiosPublic.get('/districts')
            .then(res => setDistricts(res.data));
    }, [axiosPublic])

    useEffect(() => {
        // resetField('upazilas');
        axiosPublic.get(`/upazilas/${districtCode[0]}`)
            .then(res => setUpazilas(res.data));
    }, [axiosPublic, districtCode])



    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const donationInfo = {
            requesterName:e.target.requesterName.value,
            requesterEmail:e.target.requesterEmail.value,
            recipientName:e.target.recipientName.value,
            recipientDistrict:e.target.recipientDistrict.value,
            recipientUpazila:e.target.recipientUpazila.value,
            hospitalName:e.target.hospitalName.value,
            fullAddress:e.target.fullAddress.value,
            blood_group:e.target.blood_group.value,
            donationDate:e.target.donationDate.value,
            donationTime:e.target.donationTime.value,
            requestMessage:e.target.requestMessage.value
        }
        console.log(donationInfo);
    };
    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Requester Name</label>
                    <input
                        type="text"
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"
                        value={formData?.requesterName}
                        readOnly
                        name='requesterName'
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Requester Email</label>
                    <input
                        type="text"
                        value={formData?.requesterEmail}
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"
                        readOnly
                        name='requesterEmail'
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-sm font-bold text-gray-700">Recipient Name</label>
                    <input
                        type="text"
                        name="recipientName"
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Recipient District</label>
                    <select  {...register('district', { required: true })} required name='recipientDistrict' className="select input-bordered w-full max-w-xs">
                        <option selected disabled value={''} >--Select districts--</option>
                        {
                            districts.map((district) =>
                                <option key={district.name} value={`${district.id},${district.name}`} >{district.name}</option>
                            )
                        }
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Recipient Upazila</label>
                    <select required name='recipientUpazila' className="select input-bordered  w-full max-w-xs">
                        <option value={''}  >--Select upazila--</option>
                        {


                            upazilas.map((upazilaa) =>
                                <option key={upazilaa.name}>{upazilaa.name}</option>
                            )


                        }
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Hospital Name</label>
                    <input
                        type="text"
                        name="hospitalName"
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Blood Group</label>
                    <select defaultValue={DBuser?.blood_group} name='blood_group' className="select select-error w-full max-w-xs">
                        <option  >Select One</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>



                <div className="mb-4 col-span-2">
                    <label className="block text-sm font-bold text-gray-700">Full Address</label>
                    <input
                        type="text"
                        name="fullAddress"
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"

                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Donation Date</label>
                    <input
                        type="date"
                        name="donationDate"
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"

                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Donation Time</label>
                    <input
                        type="time"
                        name="donationTime"
                        className="form-input border border-gray-300 rounded-md mt-1 w-full"

                        required
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-sm font-bold text-gray-700">Request Message</label>
                    <textarea
                        name="requestMessage"
                        className="form-textarea border border-gray-300 rounded-md mt-1 w-full"
                        rows="4"

                        required
                    ></textarea>
                </div>

                <div className="col-span-2 text-right">
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateDonetion;