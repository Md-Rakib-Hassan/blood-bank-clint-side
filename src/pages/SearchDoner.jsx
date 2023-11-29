import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { State, City }  from 'country-state-city';


const SearchDoner = () => {

    const { register, handleSubmit, reset } = useForm();
    console.log(State.getStatesOfCountry('BD'));
    // console.log(City.getCitiesOfState('BD','13'));
    const [doners,setDoners]=useState([]);

    const axiosPublic = useAxiosPublic();
    const context = useContext(AuthContext)
    const navigate = useNavigate();

 



    const onSubmit = async (data) => {

         
            const email = data.email;
            const blood_group= data.blood_group
            const state=data.state
            const city=data.city
            let search_query ='';


            if(email)search_query+=`email=${email}`
            if(blood_group)search_query+=`&blood_group=${blood_group}`
            if(state)search_query+=`&state=${state}`;
            if(city)search_query+=`&city=${city}`
            console.log(search_query);

            axiosPublic.get(`/search-doner?${search_query}`)
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
                                    <span className="label-text">Search by State</span>
                                </label>
                                <select {...register('state')} className="select input-bordered w-full max-w-xs">
                                    <option  value={''} selected>--Select State--</option>
                                    {
                                        State.getStatesOfCountry('BD').map((state) =>
                                        <option   key={state.latitude} >{state.name}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Search by City</span>
                                </label>
                                <select {...register('city')} className="select input-bordered  w-full max-w-xs">
                                    <option  value={''} selected>--Select City--</option>
                                    {
                                       
                                    
                                        City.getCitiesOfCountry('BD').map((city) =>
                                        <option key={city.latitude}>{city.name}</option>
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
        <th >City</th>

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
                  <div className="text-sm opacity-50">{doner.state}</div>
                </div>
              </div>
            </td>
            <td>
              {doner.city}
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