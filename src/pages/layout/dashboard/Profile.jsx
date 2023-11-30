import React, { useContext, useEffect, useState } from 'react';
import ProfileCard from '../../../components/ProfileCard';
import useUser from '../../../hooks/useUser';
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import Swal from 'sweetalert2';


const Profile = () => {

    const axiosPublic=useAxiosPublic();
    const { register, handleSubmit, reset,watch,resetField } = useForm();
    const [districts,setDistricts]=useState([]);
    const [upazilas,setUpazilas]=useState([]);

    const watchDistrict=watch('district')
    const districtCode=watchDistrict ? watchDistrict.split(","):'';
  
    useEffect(() => {
        axiosPublic.get('/districts')
        .then(res=>setDistricts(res.data));
    },[axiosPublic])

    useEffect(() => {
        // resetField('upazilas');
        axiosPublic.get(`/upazilas/${districtCode[0]}`)
        .then(res=>setUpazilas(res.data));
    },[axiosPublic,districtCode])
    


    const onSubmit = async (data) => {
        data.preventDefault();

        

        
        
            const email = data.target.email.value;
            const name = data.target.name.value;
            const upazila=data.target.upazila.value;
            const blood_group=data.target.blood_group.value;
            const district=data.target.district.value.split(',')[1];
            // console.log(upazila);
            // if(!upazila){
            // // console.log('inside if',upazila);

            //     return Swal.fire('Error', `Select an upazila`, 'error');
                
            // }
            const user = {
                name,
                email,
                blood_group: blood_group,
                district:district,
                upazila:upazila,
           
            }

            console.log(user);

            axiosPublic.put(`/update-profile/${DBuser?._id}`,user)
            .then(res=>{
                if(res.data.modifiedCount>0){
                    
                    window.location.reload(true);
                    Swal.fire('Updated','Successfully updated profile','success');
                }
            })

            


    }

   
    const [DBuser] = useUser();
    return (
        <div className=''>
            <div className='flex justify-around items-center h-[100vh]'>
                <ProfileCard></ProfileCard>
                <form onSubmit={onSubmit} >
                
                   
                    <div className=" flex-shrink-0 w-full bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  defaultValue={DBuser?.name} type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required value={DBuser?.email} disabled type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
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


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">District</span>
                                </label>
                                <select  {...register('district', { required: true })} required name='district' className="select input-bordered w-full max-w-xs">
                                    <option selected disabled value={''} >--Select districts--</option>
                                    {
                                        districts.map((district) =>
                                        <option   key={district.name} value={`${district.id},${district.name}` } >{district.name}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upazilas</span>
                                </label>
                                <select  required name='upazila' className="select input-bordered  w-full max-w-xs">
                                    <option value={''}  >--Select upazila--</option>
                                    {
                                       
                                    
                                        upazilas.map((upazilaa) =>
                                        <option key={upazilaa.name}>{upazilaa.name}</option>
                                        )


                                    }
                                </select>
                            </div>

                            <div  className="form-control mt-6">

                            {/* <button  className="btn btn-primary bg-blue-700 border-none hover:bg-blue-800">Update</button> */}

                                    <input className='btn btn-primary bg-blue-700 border-none hover:bg-blue-800' type="submit" value="Update" />
                            </div>

                            
                           
                              
                                
                          
                        </div>
                        
                    </div>

                   
                  
               
            </form>

            </div>


            <div>

            </div>


        </div>
    );
};

export default Profile;