import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import HTMLReactParser from 'html-react-parser';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setblogs] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
        axiosPublic.get(`/blogs?status=published`)
        .then(res => setblogs(res.data));

    },[axiosPublic]);
    console.log(blogs);

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                blogs.map((blog)=><div key={blog?._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={blog?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title">{blog?.title}</h2>
                  
                  <div className="card-actions">
                    <Link to={`/blog/${blog?._id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">Learn More</button></Link>
                  
                  </div>
                </div>
              </div>)
            }


            </div>

           
            
        </div>
    );
};

export default Blog;