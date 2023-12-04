import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";

const ContentManagement = () => {

    const [blogs, setblogs] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
        axiosPublic.get(`/blogs`)
        .then(res => setblogs(res.data));

    },[axiosPublic]);
    console.log(blogs);

    const makePublish = (id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, publish it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.put(`/blogs/publish/${id}`)
                .then(res => {
                    window.location.reload();
                    return Swal.fire('Published', 'You successfully published the blog', 'success')
        
                });
            }
          });

    }

    const deleteBlog= (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/blogs/delete/${id}`)
                .then(res => {
                    window.location.reload();
                    return Swal.fire('Deleted', 'You successfully deleted the blog', 'success')
        
                });
            }
          });

            


    };
    


    return (
        <div>

            <div className='flex justify-end p-10'> 
            <Link to={'/dashboard/content-management/add-blog'}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">Add blog</button></Link>
            
            </div>

            
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className="">Thambinal</th>
                                <th >Title</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                blogs.map(blog => <tr key={blog?._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={blog?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                
                                                {/* <div className="text-sm opacity-50">{blog?.district}</div> */}
                                            </div>
                                        </div>
                                    </td>

                                    <td className="font-bold">
                                     {blog?.title}
                                    </td>
                                    
                                
                                    <th className={`${blog?.status =='draft' ? 'text-red-600': 'text-green-600'}`}>
                                        {blog?.status}
                                    </th>

                                    <th  className={`${blog?.status =='draft' ? '': 'text-green-600'}`}>

                                        <div className='flex items-center'>

                                        {
                                            blog?.status=='draft' ? <button onClick={()=>makePublish(blog?._id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">Make publish</button>:<div>Already published</div>
                                        }
                                        <button onClick={()=>deleteBlog(blog?._id)} className='text-red-600 text-3xl btn btn-ghost'><MdDelete /></button>

                                        </div>
                                        
                                        
                                       
                                    </th>
                                   
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
                        
            
            
        </div>
    );
};

export default ContentManagement;