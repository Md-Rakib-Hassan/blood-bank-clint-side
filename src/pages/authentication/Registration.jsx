import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;




const Registration = () => {
    const axiosPublic=useAxiosPublic();
    const { register, handleSubmit, reset,watch,resetField } = useForm();
    const [districts,setDistricts]=useState([]);
    const [upazilas,setUpazilas]=useState([]);

    const context = useContext(AuthContext)
    const navigate = useNavigate();
    const watchDistrict=watch('district')
    const districtCode=watchDistrict ? watchDistrict.split(","):'';
    // console.log(districtCode);


    const { createUser, auth, logOut } = context;
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

        console.log(data);

        const imageFile = { image: data.profile[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        console.log(res.data);

        if (res.data.success) {
            const password = data.password;
            const email = data.email;
            const profile = res?.data?.data?.display_url;
            const name = data.name;
            const upazila=data.upazila;
            // console.log(upazila);
            if(!upazila){
            // console.log('inside if',upazila);

                return Swal.fire('Error', `Select an upazila`, 'error');
                
            }
            const user = {
                name,
                email,
                profile,
                blood_group: data.blood_group,
                district:districtCode[1],
                upazila:upazila,
                status: 'active',
                role: 'donor',
            }

            console.log(profile);

            if (password.length < 6) return Swal.fire('Error', `Password is less than 6 characters`, 'error')
            else if (!/(?=.*[A-Z])/.test(password)) return Swal.fire('Error', `Password don't have a capital letter`, 'error')
            else if (!/(?=.*\W)/.test(password)) return Swal.fire('Error', `Password don't have a special character`, 'error')


            createUser(email, password)
                .then(() => {

                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: profile,
                    }).then(() => {
                        
                        axiosPublic.post('/users', user)
                            .then(() => {
                              
                                logOut()
                                navigate('/login');
                                return Swal.fire('Registered', 'You successfully done registration', 'success')
                            })

                    }).catch((error) => {
                        Swal.fire('Error', `${error.message}`, 'error')
                    });



                    
                })
                .catch((error) => {
                    Swal.fire('Error', `${error.message}`, 'error')
                })
        }


    }



    return (
        <div className="hero min-h-screen bg-base-200 bg-[url(https://www.reshot.com/preview-assets/illustrations/GTQRL8HFXU/system-user-login-GTQRL8HFXU-w1600.jpg)]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blood Bank | Registration</title>

            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Register now!</h1>
                        <p className="py-6 text-xl text-gray-700" >Welcome to Book Hotel! We are thrilled that you have decided to join our community. To get started, please fill out the registration form below. We look forward to helping you create memorable events and celebrations.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" placeholder="name" {...register('name', { required: true })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile</span>
                                </label>
                                <input required type="file" accept="image/*"  {...register('profile', { required: true })} className="input" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select {...register('blood_group', { required: true })} className="select select-error w-full max-w-xs">
                                    <option disabled selected>Select One</option>
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
                                <select {...register('district', { required: true })} className="select input-bordered w-full max-w-xs">
                                    <option disabled selected>--Select districts--</option>
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
                                <select {...register('upazila', { required: true })} className="select input-bordered  w-full max-w-xs">
                                    <option value={''}  selected>--Select upazila--</option>
                                    {
                                       
                                    
                                        upazilas.map((upazilaa) =>
                                        <option key={upazilaa.name}>{upazilaa.name}</option>
                                        )


                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" placeholder="password" {...register('password', { required: true })} className="input input-bordered" />
                                <label className="label">
                                    <Link to={'/login'}><a className="label-text-alt link link-hover">Already have an account?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-blue-700 border-none hover:bg-blue-800">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Registration;