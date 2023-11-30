import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";



const SearchDoner = () => {

    const { register, handleSubmit, reset,watch } = useForm();
    // console.log(City.getCitiesOfState('BD','13'));
    const [doners,setDoners]=useState([]);

    const axiosPublic = useAxiosPublic();
   

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

         
            const email = data.email;
            const blood_group= data.blood_group
            const district=data.district
            const upazila=data.upazila
            let search_query ='';


            if(email)search_query+=`email=${email}`
            if(blood_group)search_query+=`&blood_group=${blood_group}`
            if(district)search_query+=`&district=${district}`;
            if(upazila)search_query+=`&upazila=${upazila}`
            console.log(search_query);

            axiosPublic.get(`/search-doner?role=donor&${search_query}`)
            .then(res=>setDoners(res.data));

           


    }




    return (
        <div>
            <div className='flex'>

                <div className='w-1/4'>

                <form onSubmit={handleSubmit(onSubmit)} >
                <div className="hero-content flex-col lg:flex-row-reverse">
               
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Search by Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email')} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Search by Blood Group</span>
                                </label>
                                <select {...register('blood_group')} className="select select-error w-full max-w-xs">
                                    <option value={''} selected>Select One</option>
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


                          
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-blue-700 border-none hover:bg-blue-800">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


                </div>
                <div className='w-3/4'>

                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th className="text-center">Name</th>
        <th >upazila</th>

        <th >Blood Group</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        doners.map(doner=><tr key={doner._id}>
        
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
          </tr>)
      }
      
      
    </tbody>
  
    
  </table>
</div>





                </div>


            </div>



        </div>
    );
};

export default SearchDoner;